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

export type MyThunkResult<R> = ThunkAction<R, any, undefined, AnyAction>;
export type MyThunkDispatch = ThunkDispatch<any, undefined, AnyAction>;

export const setTitle = (title: string) => ({
  type: SET_TITLE,
  payload: title,
});

// 나중에 받아오고 타입 바꾸기
export const setCourses = (courses: any) => ({
  type: SET_COURSES,
  payload: courses,
});

export const setCoursesCount = (count: number) => ({
  type: SET_COURSES_COUNT,
  payload: count,
});
export const toggleFree = () => ({ type: TOGGLE_FREE });
export const togglePaid = () => ({ type: TOGGLE_PAID });

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

export const setCurrentPage = (page: number) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

// 나중에 받아오고 타입 바꾸기
export const fetchCoursesWithFilters =
  (title: string, page: number): MyThunkResult<void> =>
  (dispatch, getState) => {
    const { isFreeSelected, isPaidSelected } = getState();
    const url = getAPIURL(title, page, isFreeSelected, isPaidSelected);
    dispatch(fetchCourses(url));
  };
