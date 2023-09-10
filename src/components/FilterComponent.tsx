import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  MyThunkDispatch,
  fetchCoursesWithFilters,
  toggleFree,
  togglePaid,
} from '../actions';
import { getAPIURL } from '../utils/utils';

export const FilterBoxContainer = styled.section`
  border: 1px solid rgb(201, 202, 204);
  background-color: white;
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > div {
    margin: 0;
  }
`;

export const FilterBoxTitle = styled.div`
  width: 95px;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 12px;

  & > span {
    margin: 0 15px;
  }
`;

export const FilterBoxButtons = styled.div`
  background-color: white;
  width: 210px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  gap: 15px;

  & > button {
    margin: 0;
    width: 50px;
    height: 28px;
    border: none;
    border-radius: 20px;
    font-size: 12px;
  }
`;

interface FilterFreeButtonProps {
  $isFree: boolean;
}

interface FilterPayedButtonProps {
  $isPayed: boolean;
}

export const FilterFreeButton = styled.button<FilterFreeButtonProps>`
  background-color: ${({ $isFree }) =>
    $isFree ? 'rgb(82, 79, 161)' : 'rgb(242, 242, 242)'};
  color: ${({ $isFree }) =>
    $isFree ? 'rgb(242, 242, 242)' : 'rgb(82, 79, 161)'};
`;

export const FilterPayedButton = styled.button<FilterPayedButtonProps>`
  background-color: ${({ $isPayed }) =>
    $isPayed ? 'rgb(82, 79, 161)' : 'rgb(242, 242, 242)'};
  color: ${({ $isPayed }) =>
    $isPayed ? 'rgb(242, 242, 242)' : 'rgb(82, 79, 161)'};
`;

const FilterComponent = () => {
  const dispatch = useDispatch<MyThunkDispatch>();
  const { isFreeSelected, isPaidSelected, title } = useSelector(
    (state: {
      isFreeSelected: boolean;
      isPaidSelected: boolean;
      title: string;
    }) => state,
  );

  const handleFilterClick = (toggle: () => { type: string }) => {
    dispatch(toggle());
    dispatch(fetchCoursesWithFilters(title, 1));
  };

  return (
    <FilterBoxContainer>
      <FilterBoxTitle>
        <span>가격</span>
      </FilterBoxTitle>
      <FilterBoxButtons>
        <FilterFreeButton
          $isFree={isFreeSelected}
          onClick={() => handleFilterClick(toggleFree)}
        >
          무료
        </FilterFreeButton>
        <FilterPayedButton
          $isPayed={isPaidSelected}
          onClick={() => handleFilterClick(togglePaid)}
        >
          유료
        </FilterPayedButton>
      </FilterBoxButtons>
    </FilterBoxContainer>
  );
};

export default FilterComponent;
