import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { BookItem } from './book';
import { RootState } from './reducers';
import { SortKey } from './sort';

// types
export type Books = {
  books: BookItem[];
  page: number;
  maxResults: number;
};

// actions
const actionCreator = actionCreatorFactory();

export const subscribe = actionCreator<BookItem[]>('SUBSCRIBE_BOOKS');
export const load = actionCreator<number>('LOAD_BOOKS');

// initial state
const INITIAL_STATE: Books = {
  books: [],
  page: 0,
  maxResults: 30,
};

// reducer
const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(subscribe, (state, payload) => ({
    ...state,
    books: [...payload],
  }))
  .case(load, (state, payload) => ({
    ...state,
    page: payload,
  }));
export default reducer;

// function
const searchBooks = (searchword: string, books: BookItem[]): BookItem[] =>
  books.filter((book) => {
    const re = new RegExp(searchword, 'i');
    return (
      re.test(book.title) ||
      re.test(book.authors.join()) ||
      re.test(book.tags.map((tag) => tag.value).join()) ||
      re.test(book.description)
    );
  });

const sortBooks = (key: SortKey, books: BookItem[]): BookItem[] => {
  switch (key) {
    case 'new':
      return books.sort((a, b) => b.createdAt - a.createdAt);
    case 'read':
      return books.sort(
        (a, b) => b.usersHaveRead.length - a.usersHaveRead.length,
      );
    case 'want':
      return books.sort(
        (a, b) => b.usersWantRead.length - a.usersWantRead.length,
      );
    default:
      return books;
  }
};

// selectors
export const selectBooks = createSelector(
  [
    (state: RootState) => state.resources.books.books,
    (state: RootState) => state.ui.search.searchword,
    (state: RootState) => state.ui.sort.key,
  ],
  (books, searchword, key) => sortBooks(key, searchBooks(searchword, books)),
);
export const selectMaxResults = createSelector(
  [(state: RootState) => state.resources.books.maxResults],
  (maxResults) => maxResults,
);
export const selectPage = createSelector(
  [(state: RootState) => state.resources.books.page],
  (page) => page,
);
