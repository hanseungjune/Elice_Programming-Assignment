import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBoxComponent from './SearchBoxComponent';
import FilterComponent from './FilterComponent';
import CourseListComponent from './CourseListComponent';
import PaginationComponent from './PaginationComponent';
import { useSelector, useDispatch } from 'react-redux';
import { CourseSection, CourseSectionTitle } from '../styles/AppStyle';

const CourseListMain = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const params = new URLSearchParams(location.search);

  const [title, setTitle] = useState(params.get('title') || '');
  const [page, setPage] = useState(Number(params.get('page')) || 1);
  const [isFree, setIsFree] = useState(params.get('isFree') === 'true');
  const [isPaid, setIsPaid] = useState(params.get('isPaid') === 'true');

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
