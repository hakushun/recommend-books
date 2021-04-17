import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Userdata } from './user';

export type Comment = {
  id: string;
  content: string;
  author: Userdata;
  createdAt: number;
  updatedAt: number;
};

const INITIAL_STATE = {};

const reducer = reducerWithInitialState(INITIAL_STATE);
export default reducer;
