/* eslint-disable no-undefined */
import { AnyAction, Middleware } from 'redux';
import configureMockStore, { MockStore } from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import * as module from '../../../libs/firestore/crudComment';
import reducer, {
  cancel,
  Comment,
  CommentItem,
  create,
  CreatePayload,
  edit,
  EditPayload,
  remove,
  RemovePayload,
  selectComment,
  selectIsLoading,
  update,
  UpdatePayload,
} from '../comment';
import { initialState } from './_initialState';

describe('Async actions: comment', () => {
  interface Ext {
    dispatch: ThunkDispatch<CommentItem, CommentItem, AnyAction>;
  }
  type StoreType = MockStore<Comment> & Ext;
  let middleware: Middleware[] = [];
  let createMockStore: (_: Comment) => StoreType;
  let mockStore: StoreType;

  beforeEach(() => {
    middleware = [thunk];
    createMockStore = configureMockStore(middleware);
    mockStore = createMockStore({
      item: {
        id: '',
        content: '',
        author: null,
        createdAt: 0,
        updatedAt: 0,
      },
      isLoading: false,
    });
  });

  const user = {
    id: '1',
    email: 'sample@sample.com',
    name: 'test user',
  };

  it('create: success', async () => {
    jest
      .spyOn(module, 'createComment')
      .mockImplementationOnce(async () => Promise.resolve());
    const params: CreatePayload = {
      bookId: '123456',
      content: 'test content',
      author: user,
    };
    const expectedActions = [
      create.async.started(params),
      create.async.done({ params, result: undefined }),
    ];
    await mockStore.dispatch(create(params));
    expect(mockStore.getActions()).toEqual(expectedActions);
  });

  it('update: success', async () => {
    jest
      .spyOn(module, 'updateComment')
      .mockImplementationOnce(async () => Promise.resolve());
    const item = {
      id: '67890',
      content: 'test content',
      author: user,
      createdAt: 0,
      updatedAt: 0,
    };
    const params: UpdatePayload = { bookId: '123456', item };
    const expectedActions = [
      update.async.started(params),
      update.async.done({ params, result: undefined }),
    ];
    await mockStore.dispatch(update(params));
    expect(mockStore.getActions()).toEqual(expectedActions);
  });

  it('remove: success', async () => {
    jest
      .spyOn(module, 'removeComment')
      .mockImplementationOnce(async () => Promise.resolve());
    const params: RemovePayload = { bookId: '123456', id: '67890' };
    const expectedActions = [
      remove.async.started(params),
      remove.async.done({ params, result: undefined }),
    ];
    await mockStore.dispatch(remove(params));
    expect(mockStore.getActions()).toEqual(expectedActions);
  });
});

describe('Reducer: comment', () => {
  const user = {
    id: '1',
    email: 'sample@sample.com',
    name: 'test user',
  };
  const initialItem = {
    id: '',
    content: '',
    author: null,
    createdAt: 0,
    updatedAt: 0,
  };
  const item: CommentItem = {
    id: '123456',
    content: 'test content',
    author: user,
    createdAt: 0,
    updatedAt: 0,
  };
  const editPayload: EditPayload = { item };
  const createPayload: CreatePayload = {
    bookId: '123456',
    content: 'test content',
    author: user,
  };
  const updatePayload: UpdatePayload = {
    bookId: '123456',
    item,
  };
  const removePayload: RemovePayload = {
    bookId: '123456',
    id: '67890',
  };
  const error = { name: 'error', message: 'something is wrong' };

  it('Initial state', () => {
    const result = reducer(undefined, { type: '' });
    expect(result).toEqual({
      item: {
        id: '',
        content: '',
        author: null,
        createdAt: 0,
        updatedAt: 0,
      },
      isLoading: false,
    });
  });

  it('edit', () => {
    const action = edit(editPayload);
    const result = reducer(undefined, action);
    expect(result).toEqual({
      item: {
        id: '123456',
        content: 'test content',
        author: user,
        createdAt: 0,
        updatedAt: 0,
      },
      isLoading: false,
    });
  });
  it('cancel', () => {
    const action = cancel();
    const result = reducer(undefined, action);
    expect(result).toEqual({
      item: {
        id: '',
        content: '',
        author: null,
        createdAt: 0,
        updatedAt: 0,
      },
      isLoading: false,
    });
  });

  it('Action: create.async.started', () => {
    const action = create.async.started(createPayload);
    const result = reducer(undefined, action);
    expect(result).toEqual({ item: initialItem, isLoading: true });
  });
  it('Action: create.async.done', () => {
    const action = create.async.done({
      params: createPayload,
      result: undefined,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({ item: initialItem, isLoading: false });
  });
  it('Action: create.async.failed', () => {
    const action = create.async.failed({ params: createPayload, error });
    const result = reducer(undefined, action);
    expect(result).toEqual({ item: initialItem, isLoading: false, error });
  });

  it('Action: update.async.started', () => {
    const action = update.async.started(updatePayload);
    const result = reducer(undefined, action);
    expect(result).toEqual({ item: initialItem, isLoading: true });
  });
  it('Action: update.async.done', () => {
    const action = update.async.done({
      params: updatePayload,
      result: undefined,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({ item: initialItem, isLoading: false });
  });
  it('Action: update.async.failed', () => {
    const action = update.async.failed({ params: updatePayload, error });
    const result = reducer(undefined, action);
    expect(result).toEqual({ item: initialItem, isLoading: false, error });
  });

  it('Action: remove.async.started', () => {
    const action = remove.async.started(removePayload);
    const result = reducer(undefined, action);
    expect(result).toEqual({ item: initialItem, isLoading: true });
  });
  it('Action: remove.async.done', () => {
    const action = remove.async.done({
      params: removePayload,
      result: undefined,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({ item: initialItem, isLoading: false });
  });
  it('Action: remove.async.failed', () => {
    const action = remove.async.failed({ params: removePayload, error });
    const result = reducer(undefined, action);
    expect(result).toEqual({ item: initialItem, isLoading: false, error });
  });
});

describe('Selector: comment', () => {
  const state = {
    ...initialState,
    resources: {
      ...initialState.resources,
      comment: {
        item: {
          id: '123456',
          content: 'サンプルコメント',
          author: null,
          createdAt: 0,
          updatedAt: 0,
        },
        isLoading: false,
      },
    },
  };
  it('selectComment', () => {
    const result = {
      id: '123456',
      content: 'サンプルコメント',
      author: null,
      createdAt: 0,
      updatedAt: 0,
    };
    expect(result).toEqual(selectComment(state));
  });

  it('selectIsLoading', () => {
    const result = false;
    expect(result).toEqual(selectIsLoading(state));
  });
});
