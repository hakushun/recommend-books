import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { CommentItem } from './comment';
import { RootState } from './reducers';

// types
export type Comments = {
  comments: CommentItem[];
};

// actions
const actionCreator = actionCreatorFactory();

export const subscribe = actionCreator<CommentItem[]>('SUBSCRIBE_COMMENTS');

// initial state
const INITIAL_STATE: Comments = {
  comments: [],
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
  (comments) => comments.sort((a, b) => a.createdAt - b.createdAt),
);
