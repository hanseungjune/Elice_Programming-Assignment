import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PaginationComponent from '../components/PaginationComponent';
import { setCurrentPageAction } from '../actions';

const mockStore = configureMockStore([thunk]);

describe('PaginationComponent', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      count: 336,
      title: 'test title',
      currentPage: 3,
    });
  });

  test('renders correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <PaginationComponent />
      </Provider>,
    );

    const activePage = getByText('3');
    expect(activePage).toHaveAttribute('data-isactive', 'true');
  });

  test('dispatches correct action when a page number is clicked', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <PaginationComponent />
      </Provider>,
    );

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();

    fireEvent.click(getByText('4'));
    const actions = store.getActions();
    expect(actions[0]).toEqual(setCurrentPageAction(4));
  });
});
