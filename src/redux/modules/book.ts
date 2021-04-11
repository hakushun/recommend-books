import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { User } from './user';
import { Comment } from './comment';

export type Book = {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  usersHaveRead: User[];
  usersWantRead: User[];
  comments: Comment[];
  createdAt: number;
  updatedAt: number;
};

const INITIAL_STATE = {};

const reducer = reducerWithInitialState(INITIAL_STATE);
export default reducer;
