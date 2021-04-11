import { reducerWithInitialState } from 'typescript-fsa-reducers';

export type User = {
  id: string;
  name: string;
  email: string;
};

const INITIAL_STATE = {};

const reducer = reducerWithInitialState(INITIAL_STATE);
export default reducer;
