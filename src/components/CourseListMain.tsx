import React, { useEffect } from 'react';
import SearchBoxComponent from './SearchBoxComponent';
import FilterComponent from './FilterComponent';
import CourseListComponent from './CourseListComponent';
import PaginationComponent from './PaginationComponent';
import { useDispatch } from 'react-redux';
import { CourseSection, CourseSectionTitle } from '../styles/AppStyle';
import { getInitialStateFromQuery } from '../utils/utils';
import {
  MyThunkDispatch,
  setTitle,
  setCurrentPage,
  toggleFree,
  togglePaid,
} from '../actions';

const CourseListMain = () => {
  const dispatch = useDispatch<MyThunkDispatch>();
  const { title, isFreeSelected, isPaidSelected, currentPage } =
    getInitialStateFromQuery();

  useEffect(() => {
    if (title) dispatch(setTitle(title));
    if (isFreeSelected) dispatch(toggleFree());
    if (isPaidSelected) dispatch(togglePaid());
    dispatch(setCurrentPage(currentPage));
  }, [dispatch]);

  return (
    <CourseSection>
      <CourseSectionTitle>과목</CourseSectionTitle>
      <SearchBoxComponent />
      <FilterComponent />
      <CourseListComponent />
      <PaginationComponent />
    </CourseSection>
  );
};

export default CourseListMain;
