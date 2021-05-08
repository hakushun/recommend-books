/* eslint-disable no-undefined */
import { AnyAction, Middleware } from 'redux';
import configureMockStore, { MockStore } from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import * as module from '../../../libs/firebase/firebaseAuth';
import reducer, {
  auth,
  login,
  logout,
  selectIsLoading,
  selectUser,
  User,
} from '../user';
import { initialState } from './_initialState';

describe('Async actions: user', () => {
  interface Ext {
    dispatch: ThunkDispatch<User, User, AnyAction>;
  }
  type StoreType = MockStore<User> & Ext;
  let middleware: Middleware[] = [];
  let createMockStore: (_: User) => StoreType;
  let mockStore: StoreType;

  beforeEach(() => {
    middleware = [thunk];
    createMockStore = configureMockStore(middleware);
    mockStore = createMockStore({
      user: null,
      isLoading: false,
    });
  });

  it('login: success', async () => {
    const userdata = {
      id: '123456',
      email: 'sample@sample.com',
      name: 'test user',
    };
    jest
      .spyOn(module, 'signinWithGoogle')
      .mockImplementationOnce(async () => Promise.resolve(userdata));
    const expectedActions = [
      login.async.started(),
      login.async.done({ params: undefined, result: userdata }),
    ];
    await mockStore.dispatch(login());
    expect(mockStore.getActions()).toEqual(expectedActions);
  });

  it('logout: success', async () => {
    jest
      .spyOn(module, 'signOut')
      .mockImplementationOnce(async () => Promise.resolve());
    const expectedActions = [
      logout.async.started(),
      logout.async.done({ params: undefined, result: undefined }),
    ];
    await mockStore.dispatch(logout());
    expect(mockStore.getActions()).toEqual(expectedActions);
  });
});

describe('Reducer: user', () => {
  const userdata = {
    id: '123456',
    email: 'sample@sample.com',
    name: 'test user',
  };
  const error = { name: 'error', message: 'something is wrong' };

  it('Initial state', () => {
    const result = reducer(undefined, { type: '' });
    expect(result).toEqual({
      user: null,
      isLoading: false,
    });
  });

  it('Action: auth', () => {
    const actoion = auth(userdata);
    const result = reducer(undefined, actoion);
    expect(result).toEqual({
      user: {
        id: '123456',
        email: 'sample@sample.com',
        name: 'test user',
      },
      isLoading: false,
    });
  });

  it('Action: login.async.started', () => {
    const action = login.async.started();
    const result = reducer(undefined, action);
    expect(result).toEqual({
      user: null,
      isLoading: true,
    });
  });
  it('Action: login.async.done', () => {
    const action = login.async.done({
      params: undefined,
      result: userdata,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      user: {
        id: '123456',
        email: 'sample@sample.com',
        name: 'test user',
      },
      isLoading: false,
    });
  });
  it('Action: login.async.failed', () => {
    const action = login.async.failed({ params: undefined, error });
    const result = reducer(undefined, action);
    expect(result).toEqual({ user: null, isLoading: false, error });
  });

  it('Action: logout.async.started', () => {
    const action = logout.async.started();
    const result = reducer(undefined, action);
    expect(result).toEqual({
      user: null,
      isLoading: true,
    });
  });
  it('Action: logout.async.done', () => {
    const action = logout.async.done({
      params: undefined,
      result: undefined,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      user: null,
      isLoading: false,
    });
  });
  it('Action: logout.async.failed', () => {
    const action = logout.async.failed({ params: undefined, error });
    const result = reducer(undefined, action);
    expect(result).toEqual({ user: null, isLoading: false, error });
  });
});

describe('Selector: user', () => {
  const state = {
    ...initialState,
    resources: {
      ...initialState.resources,
      user: {
        user: {
          id: '123456',
          name: 'sample user',
          email: 'sample@sample.com',
        },
        isLoading: false,
      },
    },
  };
  it('selectUser', () => {
    const result = {
      id: '123456',
      name: 'sample user',
      email: 'sample@sample.com',
    };
    expect(result).toEqual(selectUser(state));
  });
  it('selectIsLoading', () => {
    const result = false;
    expect(result).toEqual(selectIsLoading(state));
  });
});
