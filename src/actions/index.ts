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
import { getInitialStateFromQuery } from '../utils/utils';
import { RootState } from '../components/CourseListComponent';

export type MyThunkResult<R> = ThunkAction<R, RootState, undefined, AnyAction>;
export type MyThunkDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

// 테스트용
export const setCurrentPageAction = (page: number) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setCurrentPage = (page: number) => (dispatch: MyThunkDispatch) => {
  dispatch(setCurrentPageAction(page));
  dispatch({
    type: SET_CURRENT_PAGE,
    payload: page,
  });

  const currentParams = getInitialStateFromQuery();
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

  const currentParams = getInitialStateFromQuery();
  const prices = [];

  if (currentParams.isFreeSelected) prices.push('free');
  if (currentParams.isPaidSelected) prices.push('paid');

  const newUrl = `/?keyword=${title}&price=${prices.join(',')}&page=${
    currentParams.currentPage
  }`;
  window.history.pushState(null, '', newUrl);
};

export const setCourses = (courses: RootState) => ({
  type: SET_COURSES,
  payload: courses,
});

export const setCoursesCount = (count: RootState) => ({
  type: SET_COURSES_COUNT,
  payload: count,
});
export const toggleFree = () => (dispatch: MyThunkDispatch) => {
  dispatch({ type: TOGGLE_FREE });

  const currentParams = getInitialStateFromQuery();
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

  const currentParams = getInitialStateFromQuery();
  const prices = [];

  if (currentParams.isFreeSelected) prices.push('free');
  if (!currentParams.isPaidSelected) prices.push('paid');

  const newUrl = `/?keyword=${currentParams.title}&price=${prices.join(
    ',',
  )}&page=${currentParams.currentPage}`;
  window.history.pushState(null, '', newUrl);
};

export const fetchCourses =
  (url: string) => async (dispatch: MyThunkDispatch) => {
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

export const fetchCoursesWithFilters =
  (title: string, page: number): MyThunkResult<void> =>
  (dispatch) => {
    const { title, isFreeSelected, isPaidSelected, currentPage } =
      getInitialStateFromQuery();
    const url = getAPIURL(title, currentPage, isFreeSelected, isPaidSelected);
    dispatch(fetchCourses(url));
  };
