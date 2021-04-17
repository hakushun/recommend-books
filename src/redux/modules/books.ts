import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
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

export const subscribe = actionCreator<BookItem[]>('SUBSCRIBE_BOOKS');

// initial state
const INITIAL_STATE: Books = {
  books: [],
  isLoading: false,
};

// reducer
const reducer = reducerWithInitialState(INITIAL_STATE).case(
  subscribe,
  (state, payload) => ({
    ...state,
    books: [...payload],
  }),
);
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
