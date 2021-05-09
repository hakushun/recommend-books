import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { RootState } from './reducers';
import { searchBooks } from '../../libs/api/searchBooks';
import { SearchResult } from './searchResult';

// types
export type SearchRowData = {
  items: SearchResult[];
  totalItems: number;
};
export type SearchResults = {
  searchResults: SearchResult[];
  totalItems: number;
  maxResults: number;
  currentPage: number;
  isLoading: boolean;
  error?: CustomError;
};
interface CustomError extends Error {
  name: string;
  message: string;
}
export type SearchPayload = {
  keyword: string;
  maxResults: number;
  startIndex: number;
  currentPage: number;
};
// actions
const actionCreator = actionCreatorFactory();
const asyncActionCreator = asyncFactory<SearchResults>(actionCreator);

export const reset = actionCreator('RESET_RESULTS');
export const search = asyncActionCreator<
  SearchPayload,
  SearchRowData,
  CustomError
>('EXTERNAL_SEARCH', async (params) => {
  const results = await searchBooks(params);
  return results;
});

// initial state
const INITIAL_STATE: SearchResults = {
  searchResults: [],
  totalItems: 0,
  maxResults: 20,
  currentPage: 0,
  isLoading: false,
};

// reducer
const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(reset, () => ({
    ...INITIAL_STATE,
  }))
  .case(search.async.started, (state) => ({
    ...state,
    isLoading: true,
  }))
  .case(search.async.failed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
  .case(search.async.done, (state, { params, result }) => ({
    ...state,
    searchResults: result.items || [],
    totalItems: result.totalItems,
    currentPage: params.currentPage,
    isLoading: false,
  }));

export default reducer;

// selectors
export const selectSearchResults = createSelector(
  [(state: RootState) => state.resources.searchResults.searchResults],
  (result) => result,
);

export const selectTotalItems = createSelector(
  [(state: RootState) => state.resources.searchResults.totalItems],
  (totalItems) => totalItems,
);

export const selectMaxResults = createSelector(
  [(state: RootState) => state.resources.searchResults.maxResults],
  (maxResults) => maxResults,
);

export const selectCurrentPage = createSelector(
  [(state: RootState) => state.resources.searchResults.currentPage],
  (currentPage) => currentPage,
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.resources.searchResults.isLoading],
  (isLoading) => isLoading,
);
