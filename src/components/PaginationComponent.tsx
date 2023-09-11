import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  MyThunkDispatch,
  fetchCoursesWithFilters,
  setCurrentPage,
} from '../actions';
import {
  PageArrow,
  PageNumber,
  PaginationContainer,
} from '../styles/PaginationComponentStyle';
import { RootState } from './CourseListComponent';

const PaginationComponent = () => {
  const dispatch = useDispatch<MyThunkDispatch>();
  const { count, title, currentPage } = useSelector(
    (state: RootState) => state,
  );
  const totalPages = Math.ceil(count / 20);

  // 시작 및 끝 페이지 설정
  let startPage = currentPage - 2 > 0 ? currentPage - 2 : 1;
  const endPage = startPage + 4 <= totalPages ? startPage + 4 : totalPages;

  if (endPage - startPage < 4 && startPage > 1) {
    startPage = endPage - 4;
  }

  const handlePageChange = (pageNum: number) => {
    const currentURL = new URL(window.location.href);
    currentURL.searchParams.set('page', String(pageNum));
    window.history.pushState({}, '', currentURL.toString());

    dispatch(setCurrentPage(pageNum));
    dispatch(fetchCoursesWithFilters(title, pageNum));
  };

  return (
    <PaginationContainer>
      <PageArrow
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
      >
        {'<'}
      </PageArrow>
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, idx) => startPage + idx,
      ).map((num) => (
        <PageNumber
          key={num}
          $isActive={currentPage === num}
          data-testid={currentPage === num ? 'active-page' : undefined}
          data-isactive={currentPage === num ? 'true' : 'false'}
          onClick={() => handlePageChange(num)}
        >
          {num}
        </PageNumber>
      ))}
      <PageArrow
        onClick={() =>
          currentPage < totalPages && handlePageChange(currentPage + 1)
        }
      >
        {'>'}
      </PageArrow>
    </PaginationContainer>
  );
};

export default PaginationComponent;
