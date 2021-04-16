import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { RootState } from './reducers';

// types
type Search = {
  searchword: string;
};
// actions
const actionCreator = actionCreatorFactory();

export const search = actionCreator<Search>('INTERNAL_SEARCH');

// ititial state
const INITIAL_STATE: Search = {
  searchword: '',
};

// reducer
const reducer = reducerWithInitialState(INITIAL_STATE).case(
  search,
  (state, payload) => ({
    ...state,
    ...payload,
  }),
);
export default reducer;

// selectors
export const selectSearch = createSelector(
  [(state: RootState) => state.ui.search.searchword],
  (searchword) => searchword,
);
