import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { RootState } from './reducers';
import { User } from './user';
import { Comment } from './comment';
import { createBook, reactBook } from '../../libs/firestore/crudBook';
import { SearchResult } from './searchResult';

export type BookItem = {
  id: string;
  title: string;
  authors: string[];
  describe: string;
  selfLink: string;
  imageUrl: string;
  usersHaveRead: User[];
  usersWantRead: User[];
  comments: Comment[];
  registeredBy: User | null;
  createdAt: number;
  updatedAt: number;
};
interface CustomError extends Error {
  name: string;
  message: string;
}
type Book = {
  item: BookItem;
  isLoading: boolean;
  error?: CustomError;
};
export type Type = 'read' | 'want';
export type CreatePayload = {
  item: SearchResult;
  user: User;
  type: Type;
};
export type ReactPayload = {
  item: BookItem;
  user: User;
  type: Type;
};
// actions
const actionCreator = actionCreatorFactory();
const asyncActionCreator = asyncFactory<BookItem>(actionCreator);

export const create = asyncActionCreator<CreatePayload, void, CustomError>(
  'CREATE_BOOK',
  async (params) => {
    await createBook(params);
  },
);
export const react = asyncActionCreator<ReactPayload, void, CustomError>(
  'REACT_BOOK',
  async (params) => {
    await reactBook(params);
  },
);
const INITIAL_STATE: Book = {
  item: {
    id: '',
    title: '',
    authors: [],
    describe: '',
    selfLink: '',
    imageUrl: '',
    usersHaveRead: [],
    usersWantRead: [],
    comments: [],
    registeredBy: null,
    createdAt: 0,
    updatedAt: 0,
  },
  isLoading: false,
};
// reducer
const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(create.async.started, (state) => ({
    ...state,
    isLoading: true,
  }))
  .case(create.async.failed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
  .case(create.async.done, (state) => ({
    ...state,
    isLoading: false,
  }))
  .case(react.async.started, (state) => ({
    ...state,
    isLoading: true,
  }))
  .case(react.async.failed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
  .case(react.async.done, (state) => ({
    ...state,
    isLoading: false,
  }));
export default reducer;

// selectors
export const selectBook = createSelector(
  [(state: RootState) => state.resources.book.item],
  (book) => book,
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.resources.book.isLoading],
  (isLoading) => isLoading,
);
