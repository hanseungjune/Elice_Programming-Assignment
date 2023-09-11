import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  MyThunkDispatch,
  fetchCoursesWithFilters,
  toggleFree,
  togglePaid,
} from '../actions';
import {
  FilterBoxButtons,
  FilterBoxContainer,
  FilterBoxTitle,
  FilterFreeButton,
  FilterPayedButton,
} from '../styles/FilterComponentStyle';

const FilterComponent = () => {
  const dispatch = useDispatch<MyThunkDispatch>();
  const { isFreeSelected, isPaidSelected, title } = useSelector(
    (state: {
      isFreeSelected: boolean;
      isPaidSelected: boolean;
      title: string;
    }) => state,
  );

  const handleFilterClick = (
    toggle: () => (dispatch: MyThunkDispatch) => void,
  ) => {
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
