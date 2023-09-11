import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  MyThunkDispatch,
  fetchCoursesWithFilters,
  setCurrentPage,
} from '../actions';

export const PaginationContainer = styled.section`
  display: flex;
  align-items: center;
  width: 20vw;
  height: 30px;
  margin: 20px auto;
  margin-bottom: 100px;

  & > span {
    cursor: pointer;
  }
`;

type PageNumberProps = {
  $isActive: boolean;
};

export const PageArrow = styled.span`
  color: rgb(145, 145, 145);
`;

export const PageNumber = styled.span<PageNumberProps>`
  color: ${({ $isActive }) => ($isActive ? 'white' : 'rgb(145, 145, 145)')};
  background-color: ${({ $isActive }) =>
    $isActive ? '#524fa1' : 'transparent'};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const PaginationComponent = () => {
  const dispatch = useDispatch<MyThunkDispatch>();
  const { count, title, currentPage } = useSelector((state: any) => state);
  const totalPages = Math.ceil(count / 20);

  // 시작 및 끝 페이지 설정
  let startPage = currentPage - 2 > 0 ? currentPage - 2 : 1;
  const endPage = startPage + 4 <= totalPages ? startPage + 4 : totalPages;

  if (endPage - startPage < 4 && startPage > 1) {
    startPage = endPage - 4;
  }

  const handlePageChange = (pageNum: number) => {
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
