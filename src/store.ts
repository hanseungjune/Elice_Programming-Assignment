import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { courseReducer } from './reducers/courseReducer';

const store = createStore(courseReducer, applyMiddleware(thunk));

export default store;
