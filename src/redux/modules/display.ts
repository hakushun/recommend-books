import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { RootState } from './reducers';

// types
export type Layout = 'card' | 'list';
export type Display = {
  layout: Layout;
};

// actions
const actionCreator = actionCreatorFactory();

export const switchLayout = actionCreator<boolean>('SWITCH_LAYOUT');

// initial state
const INITIAL_STATE: Display = {
  layout: 'card',
};

// reducer
const reducer = reducerWithInitialState(INITIAL_STATE).case(
  switchLayout,
  (state, payload) => ({
    ...state,
    layout: payload ? 'card' : 'list',
  }),
);
export default reducer;

// selectors
export const selectLayout = createSelector(
  [(state: RootState) => state.ui.display.layout],
  (layout) => layout,
);
