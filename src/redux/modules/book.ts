import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { RootState } from './reducers';
import { Userdata } from './user';
import { Comment } from './comment';
import {
  createBook,
  removeBook,
  fetchBook,
  reactBook,
} from '../../libs/firestore/crudBook';
import { SearchResult } from './searchResult';

export type BookItem = {
  id: string;
  title: string;
  authors: string[];
  description: string;
  previewLink: string;
  imageUrl: string;
  usersHaveRead: Userdata[];
  usersWantRead: Userdata[];
  comments: Comment[];
  registeredBy: Userdata | null;
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
  user: Userdata;
  type: Type;
};
export type ReactPayload = {
  item: BookItem;
  user: Userdata;
  type: Type;
};
// actions
const actionCreator = actionCreatorFactory();
const asyncActionCreator = asyncFactory<BookItem>(actionCreator);

export const fetch = asyncActionCreator<string, BookItem, CustomError>(
  'FETCH_BOOK',
  async (params) => {
    const result = await fetchBook(params);
    return result;
  },
);
export const create = asyncActionCreator<CreatePayload, void, CustomError>(
  'CREATE_BOOK',
  async (params) => {
    await createBook(params);
  },
);
export const react = asyncActionCreator<ReactPayload, BookItem, CustomError>(
  'REACT_BOOK',
  async (params) => {
    const result = await reactBook(params);
    return result;
  },
);
export const remove = asyncActionCreator<BookItem, void, CustomError>(
  'REMOVE_BOOK',
  async (params) => {
    await removeBook(params);
  },
);

const INITIAL_STATE: Book = {
  item: {
    id: '',
    title: '',
    authors: [],
    description: '',
    previewLink: '',
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
    isLoading: false,
    item: result,
  }))
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
  .case(react.async.done, (state, { result }) => ({
    ...state,
    isLoading: false,
    item: result,
  }))
  .case(remove.async.started, (state) => ({
    ...state,
    isLoading: true,
  }))
  .case(remove.async.failed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
  .case(remove.async.done, (state) => ({
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
