import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { CommentItem } from './comment';
import { RootState } from './reducers';

// types
export type Comments = {
  comments: CommentItem[];
  isLoading: boolean;
  error?: CustomError;
};
interface CustomError extends Error {
  name: string;
  message: string;
}

// actions
const actionCreator = actionCreatorFactory();

export const subscribe = actionCreator<CommentItem[]>('SUBSCRIBE_COMMENTS');

// initial state
const INITIAL_STATE: Comments = {
  comments: [],
  isLoading: false,
};

// reducer
const reducer = reducerWithInitialState(INITIAL_STATE).case(
  subscribe,
  (state, payload) => ({
    ...state,
    comments: [...payload],
  }),
);
export default reducer;

// selectors
export const selectComments = createSelector(
  [(state: RootState) => state.resources.comments.comments],
  (comments) => comments,
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.resources.comments.isLoading],
  (isLoading) => isLoading,
);
