import {
  SET_COURSES,
  SET_TITLE,
  TOGGLE_FREE,
  TOGGLE_PAID,
  SET_COURSES_COUNT,
  SET_CURRENT_PAGE,
} from '../actions/types';
import { getInitialStateFromQuery } from '../utils/utils';

const initialState = getInitialStateFromQuery();

export type SetTitleAction = {
  type: 'SET_TITLE';
  payload: string;
};

export type SetCoursesAction = {
  type: 'SET_COURSES';
  payload: never[];
};

export type SetCoursesCountAction = {
  type: 'SET_COURSES_COUNT';
  payload: number;
};

export type ToggleFreeAction = {
  type: 'TOGGLE_FREE';
};

export type TogglePaidAction = {
  type: 'TOGGLE_PAID';
};

export type SetCurrentPageAction = {
  type: 'SET_CURRENT_PAGE';
  payload: number;
};

export type actionType =
  | SetTitleAction
  | SetCoursesAction
  | SetCoursesCountAction
  | ToggleFreeAction
  | TogglePaidAction
  | SetCurrentPageAction;

export const courseReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };
    case SET_COURSES:
      return { ...state, courses: action.payload };
    case SET_COURSES_COUNT:
      return { ...state, count: action.payload };
    case TOGGLE_FREE:
      return { ...state, isFreeSelected: !state.isFreeSelected };
    case TOGGLE_PAID:
      return { ...state, isPaidSelected: !state.isPaidSelected };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return { ...state };
  }
};
