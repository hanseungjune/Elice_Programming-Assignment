import styled from 'styled-components';

export type SearchBoxContainerProps = {
  $isClicked: boolean;
}

export const SearchBoxContainer = styled.section<SearchBoxContainerProps>`
  border: 1px solid
    ${({ $isClicked }) =>
      $isClicked ? 'rgb(82, 79, 161)' : 'rgb(201, 202, 204)'};
  background-color: white;
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
`;

export const SearchBoxLabel = styled.label`
  background-color: white;
  margin: 0 15px;
  display: flex;
  align-items: center;
  gap: 20px;

  & > svg {
    background-color: white;
  }
`;

export const SearchBoxInput = styled.input`
  width: 58vw;
  height: 40px;
  border: none;
  outline: none;
  background-color: white;
`;
