import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { RootState } from './reducers';
import { searchBooks } from '../../libs/api/searchBooks';

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
type SearchResults = {
  searchResults: SearchResult[];
  isLoading: boolean;
  error?: CustomError;
};
interface CustomError extends Error {
  name: string;
  message: string;
}

// actions
const actionCreator = actionCreatorFactory();
const asyncActionCreator = asyncFactory<SearchResults>(actionCreator);

export const search = asyncActionCreator<string, SearchResult[], CustomError>(
  'EXTERNAL_SEARCH',
  async (params) => {
    const results = await searchBooks(params);
    return results;
  },
);

// initial state
const INITIAL_STATE: SearchResults = {
  searchResults: [],
  isLoading: false,
};

// reducer
const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(search.async.started, (state) => ({
    ...state,
    isLoading: true,
  }))
  .case(search.async.failed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
  .case(search.async.done, (state, { result }) => ({
    ...state,
    searchResults: result,
    isLoading: false,
  }));

export default reducer;

// selectors
export const selectSearchResults = createSelector(
  [(state: RootState) => state.resources.searchResults.searchResults],
  (result) => result,
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.resources.searchResults.isLoading],
  (isLoading) => isLoading,
);
