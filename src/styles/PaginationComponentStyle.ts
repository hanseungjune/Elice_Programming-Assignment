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

export type PageNumberProps = {
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
