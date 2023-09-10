import React, { useState } from 'react';
import styled from 'styled-components';

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
  const [isCurrent, setIsCurrent] = useState(1);

  return (
    <PaginationContainer>
      <PageArrow
        onClick={() => setIsCurrent((prev) => (prev > 3 ? prev - 1 : prev))}
      >
        {'<'}
      </PageArrow>
      {[3, 4, 5, 6, 7].map((num) => (
        <PageNumber
          key={num}
          $isActive={isCurrent === num}
          onClick={() => setIsCurrent(num)}
        >
          {num}
        </PageNumber>
      ))}
      <PageArrow
        onClick={() => setIsCurrent((prev) => (prev < 7 ? prev + 1 : prev))}
      >
        {'>'}
      </PageArrow>
    </PaginationContainer>
  );
};

export default PaginationComponent;
