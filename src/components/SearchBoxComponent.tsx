import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { MyThunkDispatch, fetchCoursesWithFilters, setTitle } from '../actions';
import {
  SearchBoxContainer,
  SearchBoxInput,
  SearchBoxLabel,
} from '../styles/SearchBoxComponentStyle';

const SearchBoxComponent = () => {
  const dispatch = useDispatch<MyThunkDispatch>();
  const title = useSelector((state: { title: string }) => state.title);
  const [isClicked, setIsClicked] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      dispatch(fetchCoursesWithFilters(title, 1));
    }, 300);

    setTimer(newTimer);

    return () => {
      clearTimeout(newTimer);
    };
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
          onChange={(e) => dispatch(setTitle(e.target.value))}
          placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        />
      </SearchBoxLabel>
    </SearchBoxContainer>
  );
};

export default SearchBoxComponent;
