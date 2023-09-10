import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

interface SearchBoxContainerProps {
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

const SearchBox = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    console.log(title);
  }, [title]);

  return (
    <SearchBoxContainer $isClicked={isClicked}>
      <SearchBoxLabel
        htmlFor="search-box"
        onClick={() => setIsClicked(true)}
        onBlur={() => setIsClicked(false)}
      >
        <FaSearch
          style={{ width: '15px', height: '15px', color: 'rgb(114, 114, 114)' }}
        />
        <SearchBoxInput
          id="search-box"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        />
      </SearchBoxLabel>
    </SearchBoxContainer>
  );
};

export default SearchBox;
