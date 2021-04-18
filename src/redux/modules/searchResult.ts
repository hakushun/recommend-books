import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { RootState } from './reducers';

// types
export type SearchResult = {
  id: string;
  volumeInfo: {
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    title: string;
    previewLink: string;
  };
};

// actions
const actionCreator = actionCreatorFactory();

export const select = actionCreator<SearchResult>('SELECT_SEARCH_RESULT');

// initial state
const INITIAL_STATE: SearchResult = {
  id: '',
  volumeInfo: {
    authors: [],
    description: '',
    imageLinks: {
      thumbnail: '',
    },
    title: '',
    previewLink: '',
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
