import {
  SET_COURSES,
  SET_TITLE,
  TOGGLE_FREE,
  TOGGLE_PAID,
  SET_COURSES_COUNT,
} from '../actions/types';

const initialState = {
  title: '',
  courses: [],
  count: 0,
  isFreeSelected: false,
  isPaidSelected: false,
};

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

export type actionType =
  | SetTitleAction
  | SetCoursesAction
  | SetCoursesCountAction
  | ToggleFreeAction
  | TogglePaidAction;

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
    default:
      return { ...state };
  }
};
