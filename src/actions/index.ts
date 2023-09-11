import axios from 'axios';
import {
  SET_TITLE,
  TOGGLE_FREE,
  TOGGLE_PAID,
  SET_COURSES,
  SET_COURSES_COUNT,
  SET_CURRENT_PAGE,
} from './types';
import { getAPIURL } from '../utils/utils';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { getQueryParams } from '../utils/utils';

export type MyThunkResult<R> = ThunkAction<R, any, undefined, AnyAction>;
export type MyThunkDispatch = ThunkDispatch<any, undefined, AnyAction>;

export const setCurrentPage = (page: number) => (dispatch: MyThunkDispatch) => {
  dispatch({
    type: SET_CURRENT_PAGE,
    payload: page,
  });

  const currentParams = getQueryParams();
  const prices = [];

  if (currentParams.isFreeSelected) prices.push('free');
  if (currentParams.isPaidSelected) prices.push('paid');

  const newUrl = `/?keyword=${currentParams.title}&price=${prices.join(
    ',',
  )}&page=${page}`;
  window.history.pushState(null, '', newUrl);
};

export const setTitle = (title: string) => (dispatch: MyThunkDispatch) => {
  dispatch({
    type: SET_TITLE,
    payload: title,
  });

  const currentParams = getQueryParams();
  const prices = [];

  if (currentParams.isFreeSelected) prices.push('free');
  if (currentParams.isPaidSelected) prices.push('paid');

  const newUrl = `/?keyword=${title}&price=${prices.join(',')}&page=${
    currentParams.currentPage
  }`;
  window.history.pushState(null, '', newUrl);
};

// 나중에 받아오고 타입 바꾸기
export const setCourses = (courses: any) => ({
  type: SET_COURSES,
  payload: courses,
});

export const setCoursesCount = (count: number) => ({
  type: SET_COURSES_COUNT,
  payload: count,
});
export const toggleFree = () => (dispatch: MyThunkDispatch) => {
  dispatch({ type: TOGGLE_FREE });

  const currentParams = getQueryParams();
  const prices = [];

  if (!currentParams.isFreeSelected) prices.push('free');
  if (currentParams.isPaidSelected) prices.push('paid');

  const newUrl = `/?keyword=${currentParams.title}&price=${prices.join(
    ',',
  )}&page=${currentParams.currentPage}`;
  window.history.pushState(null, '', newUrl);
};

export const togglePaid = () => (dispatch: MyThunkDispatch) => {
  dispatch({ type: TOGGLE_PAID });

  const currentParams = getQueryParams();
  const prices = [];

  if (currentParams.isFreeSelected) prices.push('free');
  if (!currentParams.isPaidSelected) prices.push('paid');

  const newUrl = `/?keyword=${currentParams.title}&price=${prices.join(
    ',',
  )}&page=${currentParams.currentPage}`;
  window.history.pushState(null, '', newUrl);
};

// 나중에 받아오고 타입 바꾸기
export const fetchCourses = (url: string) => async (dispatch: any) => {
  try {
    const res = await axios({
      method: 'GET',
      url,
    });
    dispatch(setCourses(res.data.courses));
    dispatch(setCoursesCount(res.data.course_count));
  } catch (error) {
    console.error(error);
  }
};

// 나중에 받아오고 타입 바꾸기
export const fetchCoursesWithFilters =
  (title: string, page: number): MyThunkResult<void> =>
  (dispatch, getState) => {
    const { isFreeSelected, isPaidSelected } = getState();
    const url = getAPIURL(title, page, isFreeSelected, isPaidSelected);
    dispatch(fetchCourses(url));
  };
