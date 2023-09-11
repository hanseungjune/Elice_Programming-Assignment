import React from 'react';
import Nav from './components/Nav';
import { Provider } from 'react-redux';
import store from './store';
import CourseListMain from './components/CourseListMain';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './styles/AppStyle';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <GlobalStyles />
        <Nav />
        <CourseListMain />
      </Provider>
    </Router>
  );
}

export default App;
