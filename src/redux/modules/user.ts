import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { signinWithGoogle, signOut } from '../../libs/firebase/firebaseAuth';
import { RootState } from './reducers';

export type Userdata = {
  id: string;
  name: string;
  email: string;
} | null;
export type User = {
  user: Userdata;
  isLoading: boolean;
  error?: CustomError;
};
interface CustomError extends Error {
  name: string;
  message: string;
}
// actions
const actionCreator = actionCreatorFactory();
const asyncActionCreator = asyncFactory<User>(actionCreator);

export const auth = actionCreator<Userdata>('AUTH_USER');
export const login = asyncActionCreator<void, Userdata, CustomError>(
  'LOGIN_USER',
  async () => {
    const user = await signinWithGoogle();
    return user;
  },
);
export const logout = asyncActionCreator<void, void, CustomError>(
  'LOGOUT_USER',
  async () => {
    await signOut();
  },
);

// initial state
const INITIAL_STATE: User = {
  user: null,
  isLoading: false,
};

// reducer
const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(auth, (state, payload) => ({
    ...state,
    user: payload,
  }))
  .case(login.async.started, (state) => ({
    ...state,
    isLoading: true,
  }))
  .case(login.async.failed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
  .case(login.async.done, (state, { result }) => ({
    ...state,
    isLoading: false,
    user: result,
  }))
  .case(logout.async.started, (state) => ({
    ...state,
    isLoading: true,
  }))
  .case(logout.async.failed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
  .case(logout.async.done, (state) => ({
    ...state,
    isLoading: false,
    user: null,
  }));
export default reducer;

// selectors
export const selectUser = createSelector(
  [(state: RootState) => state.resources.user.user],
  (user) => user,
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.resources.user.isLoading],
  (isLoading) => isLoading,
);
