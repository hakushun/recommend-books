import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { RootState } from './reducers';

// types
export type SortKey = 'new' | 'read' | 'want';
type Sort = {
  key: SortKey;
  // order: 'asc'|'dec';
};
// actions
const actionCreator = actionCreatorFactory();

export const sort = actionCreator<Sort>('SORT_BOOKS');

// ititial state
const INITIAL_STATE: Sort = {
  key: 'new',
};

// reducer
const reducer = reducerWithInitialState(INITIAL_STATE).case(
  sort,
  (state, payload) => ({
    ...state,
    ...payload,
  }),
);
export default reducer;

// selectors
export const selectSortKey = createSelector(
  [(state: RootState) => state.ui.sort.key],
  (key) => key,
);
