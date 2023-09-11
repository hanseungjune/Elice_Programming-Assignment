import React, { useEffect } from 'react';
import SearchBoxComponent from './SearchBoxComponent';
import FilterComponent from './FilterComponent';
import CourseListComponent from './CourseListComponent';
import PaginationComponent from './PaginationComponent';
import { useDispatch } from 'react-redux';
import { CourseSection, CourseSectionTitle } from '../styles/AppStyle';
import { getInitialStateFromQuery } from '../utils/utils';
import { MyThunkDispatch, fetchCoursesWithFilters } from '../actions';

const CourseListMain = () => {
  const dispatch = useDispatch<MyThunkDispatch>();
  const { title, currentPage } = getInitialStateFromQuery();

  useEffect(() => {
    dispatch(fetchCoursesWithFilters(title, currentPage));
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
