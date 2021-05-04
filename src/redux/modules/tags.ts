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
  selected: string | null;
};

// actions
const actionCreator = actionCreatorFactory();

export const toggle = actionCreator<boolean>('TOGGLE_EDITABLE');
export const add = actionCreator<string>('ADD_TAG');
export const remove = actionCreator<string | void>('REMOVE_TAG');
export const select = actionCreator<string>('SELECT_TAG');

// initial state
const INITIAL_STATE: Tags = {
  tags: [],
  isEditable: false,
  selected: null,
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
  }))
  .case(select, (state, payload) => {
    if (state.selected === payload) {
      return {
        ...state,
        selected: null,
      };
    }
    return {
      ...state,
      selected: payload,
    };
  });
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
export const selectSelectedTags = createSelector(
  [(state: RootState) => state.ui.tags.selected],
  (selected) => selected,
);
export const selectPopularTags = createSelector(
  [(state: RootState) => state.resources.books.books],
  (books) => {
    const tags = books.reduce<Tag[]>((acc, book) => [...acc, ...book.tags], []);
    const counts = tags.reduce<{ [s: string]: number }>((acc, tag) => {
      if (!acc[tag.value]) {
        acc[tag.value] = 0;
      }
      acc[tag.value] += 1;
      return acc;
    }, {});
    const tagRank = Object.entries(counts)
      .map(([key, value]) => ({ [key]: value }))
      .sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);
    const top5 = tagRank.map((tag) => Object.keys(tag)[0]).slice(0, 5);
    return top5;
  },
);
