import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import {
  createComment,
  removeComment,
  updateComment,
} from '../../libs/firestore/crudComment';
import { RootState } from './reducers';
import { Userdata } from './user';

export type CommentItem = {
  id: string;
  content: string;
  author: Userdata;
  createdAt: number;
  updatedAt: number;
};
export type CreatePayload = {
  bookId: string;
  content: string;
  author: Userdata;
};
export type EditPayload = {
  item: CommentItem;
};
export type UpdatePayload = {
  bookId: string;
  item: CommentItem;
};
export type RemovePayload = {
  id: string;
  bookId: string;
};
interface CustomError extends Error {
  name: string;
  message: string;
}
export type Comment = {
  item: CommentItem;
  isLoading: boolean;
  error?: CustomError;
};
// actions
const actionCreator = actionCreatorFactory();
const asyncActionCreator = asyncFactory<CommentItem>(actionCreator);

export const create = asyncActionCreator<CreatePayload, void, CustomError>(
  'CREATE_COMMENT',
  async (params) => {
    await createComment(params);
  },
);
export const edit = actionCreator<EditPayload>('EDIT_COMMENT');
export const update = asyncActionCreator<UpdatePayload, void, CustomError>(
  'UPDATE_COMMENT',
  async (params) => {
    await updateComment(params);
  },
);
export const remove = asyncActionCreator<RemovePayload, void, CustomError>(
  'REMOVE_COMMENT',
  async (params) => {
    await removeComment(params);
  },
);
export const cancel = actionCreator('CANCEL_COMMENT');

const INITIAL_STATE: Comment = {
  item: {
    id: '',
    content: '',
    author: null,
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
  .case(create.async.failed, (_state, { error }) => ({
    ...INITIAL_STATE,
    error,
  }))
  .case(create.async.done, () => ({
    ...INITIAL_STATE,
  }))
  .case(edit, (state, payload) => ({
    ...state,
    ...payload,
  }))
  .case(update.async.started, (state) => ({
    ...state,
    isLoading: true,
  }))
  .case(update.async.failed, (_state, { error }) => ({
    ...INITIAL_STATE,
    error,
  }))
  .case(update.async.done, () => ({
    ...INITIAL_STATE,
    isLoading: false,
  }))
  .case(remove.async.started, (state) => ({
    ...state,
    isLoading: true,
  }))
  .case(remove.async.failed, (_state, { error }) => ({
    ...INITIAL_STATE,
    error,
  }))
  .case(remove.async.done, () => ({
    ...INITIAL_STATE,
    isLoading: false,
  }))
  .case(cancel, () => ({
    ...INITIAL_STATE,
  }));
export default reducer;

// selectors
export const selectComment = createSelector(
  [(state: RootState) => state.resources.comment.item],
  (comment) => comment,
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.resources.comment.isLoading],
  (isLoading) => isLoading,
);
