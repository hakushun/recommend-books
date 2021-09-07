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
const searchBooks = (
  books: BookItem[],
  searchword: string,
  selectedTag: string | null,
): BookItem[] => {
  const results = books.filter((book) => {
    const re = new RegExp(searchword, 'i');
    return (
      re.test(book.title) ||
      re.test(book.authors.join()) ||
      re.test(book.tags.map((tag) => tag.value).join()) ||
      re.test(book.description)
    );
  });
  if (!selectedTag) return results;
  return results.filter((book) =>
    book.tags.find((tag) => tag.id === selectedTag.toLowerCase()),
  );
};

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
    case 'stock':
      return books.sort(
        (a, b) => (b.usersStocked?.length ?? 0) - (a.usersStocked?.length ?? 0),
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
    (state: RootState) => state.ui.tags.selected,
  ],
  (books, searchword, key, tag) =>
    sortBooks(key, searchBooks(books, searchword, tag)),
);
export const selectMaxResults = createSelector(
  [(state: RootState) => state.resources.books.maxResults],
  (maxResults) => maxResults,
);
export const selectPage = createSelector(
  [(state: RootState) => state.resources.books.page],
  (page) => page,
);
