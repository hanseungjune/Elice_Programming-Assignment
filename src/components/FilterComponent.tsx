import React, { useState } from 'react';
import styled from 'styled-components';

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
    $isFree ? 'rgb(82, 79, 161)' : 'white'};
  color: ${({ $isFree }) => ($isFree ? 'white' : 'rgb(82, 79, 161)')};
`;

export const FilterPayedButton = styled.button<FilterPayedButtonProps>`
  background-color: ${({ $isPayed }) =>
    $isPayed ? 'rgb(82, 79, 161)' : 'white'};
  color: ${({ $isPayed }) => ($isPayed ? 'white' : 'rgb(82, 79, 161)')};
`;

const FilterComponent = () => {
  const [isFree, setIsFree] = useState(false);
  const [isPayed, setIsPayed] = useState(false);

  return (
    <FilterBoxContainer>
      <FilterBoxTitle>
        <span>가격</span>
      </FilterBoxTitle>
      <FilterBoxButtons>
        <FilterFreeButton
          $isFree={isFree}
          onClick={() => {
            setIsFree(!isFree);
          }}
        >
          무료
        </FilterFreeButton>
        <FilterPayedButton
          $isPayed={isPayed}
          onClick={() => {
            setIsPayed(!isPayed);
          }}
        >
          유료
        </FilterPayedButton>
      </FilterBoxButtons>
    </FilterBoxContainer>
  );
};

export default FilterComponent;
