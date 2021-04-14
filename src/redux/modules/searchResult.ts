import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { RootState } from './reducers';

// types
export type SearchResult = {
  id: string;
  selfLink: string;
  volumeInfo: {
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    title: string;
  };
};

// actions
const actionCreator = actionCreatorFactory();

export const select = actionCreator<SearchResult>('SELECT_SEARCH_RESULT');

// initial state
const INITIAL_STATE: SearchResult = {
  id: '',
  selfLink: '',
  volumeInfo: {
    authors: [],
    description: '',
    imageLinks: {
      thumbnail: '',
    },
    title: '',
  },
};

// reducer
const reducer = reducerWithInitialState(INITIAL_STATE).case(
  select,
  (_state, payload) => ({
    ...payload,
  }),
);

export default reducer;

// selectors
export const selectSearchResult = createSelector(
  [(state: RootState) => state.ui.searchResult],
  (searchResult) => searchResult,
);
