import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { fetch, update } from './book';
import { RootState } from './reducers';

// types
export type Tag = {
  id: string;
  value: string;
};
type Tags = {
  tags: Tag[];
  isEditable: boolean;
};

// actions
const actionCreator = actionCreatorFactory();

export const toggle = actionCreator<boolean>('TOGGLE_EDITABLE');
export const add = actionCreator<string>('ADD_TAG');
export const remove = actionCreator<string | void>('REMOVE_TAG');

// initial state
const INITIAL_STATE: Tags = {
  tags: [],
  isEditable: false,
};

// reducer
const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(toggle, (state, payload) => ({
    ...state,
    isEditable: payload,
  }))
  .case(add, (state, payload) => ({
    ...state,
    tags: [...state.tags, { id: payload.toLowerCase(), value: payload }],
  }))
  .case(remove, (state, payload) => {
    if (!payload) {
      const newTags = [...state.tags];
      newTags.pop();
      return {
        ...state,
        tags: newTags,
      };
    }
    return {
      ...state,
      tags: [...state.tags.filter((tag) => tag.id !== payload)],
    };
  })
  .case(fetch.async.done, (state, { result }) => ({
    ...state,
    tags: result.tags,
  }))
  .case(update.async.done, (state) => ({
    ...state,
    isEditable: false,
  }));
export default reducer;

// selectors
export const selectTags = createSelector(
  [(state: RootState) => state.ui.tags.tags],
  (tags) => tags,
);

export const selectIsEditable = createSelector(
  [(state: RootState) => state.ui.tags.isEditable],
  (isEditable) => isEditable,
);
