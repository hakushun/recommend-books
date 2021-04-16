import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { getBooks } from '../../libs/firestore/crudBooks';
import { BookItem } from './book';
import { RootState } from './reducers';

// types
export type Books = {
  books: BookItem[];
  isLoading: boolean;
  error?: CustomError;
};
interface CustomError extends Error {
  name: string;
  message: string;
}

// actions
const actionCreator = actionCreatorFactory();
const asyncActionCreator = asyncFactory<Books>(actionCreator);

export const fetch = asyncActionCreator<void, BookItem[], CustomError>(
  'FETCH_BOOKS',
  async () => {
    const results = await getBooks();
    return results;
  },
);
// initial state
const INITIAL_STATE: Books = {
  books: [],
  isLoading: false,
};

// reducer
const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(fetch.async.started, (state) => ({
    ...state,
    isLoading: true,
  }))
  .case(fetch.async.failed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
  .case(fetch.async.done, (state, { result }) => ({
    ...state,
    books: result,
    isLoading: false,
  }));
export default reducer;

// selectors
export const selectBooks = createSelector(
  [
    (state: RootState) => state.resources.books.books,
    (state: RootState) => state.ui.search.searchword,
  ],
  (books, searchword) =>
    books.filter(
      (book) =>
        book.title.includes(searchword) ||
        book.authors.join().includes(searchword) ||
        book.describe.includes(searchword),
    ),
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.resources.books.isLoading],
  (isLoading) => isLoading,
);
