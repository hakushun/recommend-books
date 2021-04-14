import { reducerWithInitialState } from 'typescript-fsa-reducers';
import actionCreatorFactory from 'typescript-fsa';
import { createSelector } from 'reselect';
import { RootState } from './reducers';
import { select } from './searchResult';

// types
export type TogglePayload = {
  [s: string]: boolean;
};
// actions
const actionCreator = actionCreatorFactory();

export const toggle = actionCreator<TogglePayload>('TOGGLE_MODAL');

// initial state
const INITIAL_STATE: {
  registerDialog: boolean;
} = {
  registerDialog: false,
};

// reducer
const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(toggle, (state, payload) => ({
    ...state,
    ...payload,
  }))
  .case(select, (state) => ({
    ...state,
    registerDialog: true,
  }));
export default reducer;

// selectors
export const selectRegisterDialog = createSelector(
  [(state: RootState) => state.ui.modal],
  (modal) => modal.registerDialog,
);
