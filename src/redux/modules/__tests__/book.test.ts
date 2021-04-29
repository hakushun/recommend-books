/* eslint-disable no-undefined */
import { AnyAction, Middleware } from 'redux';
import configureMockStore, { MockStore } from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import * as module from '../../../libs/firestore/crudBook';
import reducer, {
  Book,
  BookItem,
  create,
  CreatePayload,
  fetch,
  react,
  ReactPayload,
  remove,
  // selectBook,
  // selectIsLoading,
} from '../book';

describe('Async actions: book', () => {
  interface Ext {
    dispatch: ThunkDispatch<BookItem, BookItem, AnyAction>;
  }
  type StoreType = MockStore<Book> & Ext;
  let middleware: Middleware[] = [];
  let createMockStore: (_: Book) => StoreType;
  let mockStore: StoreType;

  beforeEach(() => {
    middleware = [thunk];
    createMockStore = configureMockStore(middleware);
    mockStore = createMockStore({
      item: {
        id: '',
        title: '',
        authors: [],
        description: '',
        previewLink: '',
        imageUrl: '',
        usersHaveRead: [],
        usersWantRead: [],
        registeredBy: null,
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
  const searchResult = {
    id: '123456',
    volumeInfo: {
      authors: ['author1', 'author2'],
      description: 'sample description',
      imageLinks: {
        thumbnail: 'https://suumo.jp/',
      },
      title: 'dummy title',
      previewLink: 'https://suumo.jp/',
    },
  };
  const book = {
    id: '123456',
    title: 'dummy title',
    authors: ['author1', 'author2'],
    description: 'sample description',
    previewLink: 'https://suumo.jp/',
    imageUrl: 'https://suumo.jp/',
    usersHaveRead: [user],
    usersWantRead: [],
    registeredBy: user,
    createdAt: 0,
    updatedAt: 0,
  };
  it('fetch: success', async () => {
    jest
      .spyOn(module, 'fetchBook')
      .mockImplementationOnce(async () => Promise.resolve(book));
    const params = '123456';
    const result = {
      id: '123456',
      title: 'dummy title',
      authors: ['author1', 'author2'],
      description: 'sample description',
      previewLink: 'https://suumo.jp/',
      imageUrl: 'https://suumo.jp/',
      usersHaveRead: [user],
      usersWantRead: [],
      registeredBy: user,
      createdAt: 0,
      updatedAt: 0,
    };
    const expectedActions = [
      fetch.async.started(params),
      fetch.async.done({ params, result }),
    ];
    await mockStore.dispatch(fetch(params));
    expect(mockStore.getActions()).toEqual(expectedActions);
  });

  it('create: success', async () => {
    jest
      .spyOn(module, 'createBook')
      .mockImplementationOnce(async () => Promise.resolve());
    const params: CreatePayload = { item: searchResult, user, type: 'read' };
    const expectedActions = [
      create.async.started(params),
      create.async.done({ params, result: undefined }),
    ];
    await mockStore.dispatch(create(params));
    expect(mockStore.getActions()).toEqual(expectedActions);
  });

  it('react: success', async () => {
    const result = {
      id: '123456',
      title: 'dummy title',
      authors: ['author1', 'author2'],
      description: 'sample description',
      previewLink: 'https://suumo.jp/',
      imageUrl: 'https://suumo.jp/',
      usersHaveRead: [user],
      usersWantRead: [user],
      registeredBy: user,
      createdAt: 0,
      updatedAt: 0,
    };
    jest
      .spyOn(module, 'reactBook')
      .mockImplementationOnce(async () => Promise.resolve(result));
    const params: ReactPayload = { item: book, user, type: 'want' };
    const expectedActions = [
      react.async.started(params),
      react.async.done({ params, result }),
    ];
    await mockStore.dispatch(react(params));
    expect(mockStore.getActions()).toEqual(expectedActions);
  });

  it('remove: success', async () => {
    jest
      .spyOn(module, 'removeBook')
      .mockImplementationOnce(async () => Promise.resolve());
    const params = book;
    const expectedActions = [
      remove.async.started(params),
      remove.async.done({ params, result: undefined }),
    ];
    await mockStore.dispatch(remove(params));
    expect(mockStore.getActions()).toEqual(expectedActions);
  });
});

describe('Reducer: book', () => {
  const initialItem = {
    id: '',
    title: '',
    authors: [],
    description: '',
    previewLink: '',
    imageUrl: '',
    usersHaveRead: [],
    usersWantRead: [],
    registeredBy: null,
    createdAt: 0,
    updatedAt: 0,
  };
  const searchResult = {
    id: '123456',
    volumeInfo: {
      authors: ['author1', 'author2'],
      description: 'sample description',
      imageLinks: {
        thumbnail: 'https://suumo.jp/',
      },
      title: 'dummy title',
      previewLink: 'https://suumo.jp/',
    },
  };

  const user = {
    id: '1',
    email: 'sample@sample.com',
    name: 'test user',
  };
  const book = {
    id: '123456',
    title: 'dummy title',
    authors: ['author1', 'author2'],
    description: 'sample description',
    previewLink: 'https://suumo.jp/',
    imageUrl: 'https://suumo.jp/',
    usersHaveRead: [user],
    usersWantRead: [],
    registeredBy: user,
    createdAt: 0,
    updatedAt: 0,
  };
  const fetchPayload = '123456';
  const createPayload: CreatePayload = {
    item: searchResult,
    user,
    type: 'read',
  };
  const reactPayload: ReactPayload = {
    item: book,
    user,
    type: 'want',
  };
  const removePayload = book;
  const error = { name: 'error', message: 'something is wrong' };
  it('Initial state', () => {
    const result = reducer(undefined, { type: '' });
    expect(result).toEqual({
      item: {
        id: '',
        title: '',
        authors: [],
        description: '',
        previewLink: '',
        imageUrl: '',
        usersHaveRead: [],
        usersWantRead: [],
        registeredBy: null,
        createdAt: 0,
        updatedAt: 0,
      },
      isLoading: false,
    });
  });

  it('Action: fetch.async.started', () => {
    const action = fetch.async.started(fetchPayload);
    const result = reducer(undefined, action);
    expect(result).toEqual({ item: initialItem, isLoading: true });
  });
  it('Action: fetch.async.done', () => {
    const action = fetch.async.done({
      params: fetchPayload,
      result: book,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({ item: book, isLoading: false });
  });
  it('Action: fetch.async.failed', () => {
    const action = fetch.async.failed({ params: fetchPayload, error });
    const result = reducer(undefined, action);
    expect(result).toEqual({ item: initialItem, isLoading: false, error });
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

  it('Action: react.async.started', () => {
    const action = react.async.started(reactPayload);
    const result = reducer(undefined, action);
    expect(result).toEqual({ item: initialItem, isLoading: true });
  });
  it('Action: react.async.done', () => {
    const action = react.async.done({
      params: reactPayload,
      result: { ...book, usersWantRead: [user] },
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      item: { ...book, usersWantRead: [user] },
      isLoading: false,
    });
  });
  it('Action: react.async.failed', () => {
    const action = react.async.failed({ params: reactPayload, error });
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

// describe('Seletctor: book', () => {
//   const user = {
//     id: '1',
//     email: 'sample@sample.com',
//     name: 'test user',
//   };
//   const state = {
//     resources: {
//       book: {
//         item: {
//           id: '123456',
//           title: 'dummy title',
//           authors: ['author1', 'author2'],
//           description: 'sample description',
//           previewLink: 'https://suumo.jp/',
//           imageUrl: 'https://suumo.jp/',
//           usersHaveRead: [user],
//           usersWantRead: [],
//           registeredBy: user,
//           createdAt: 0,
//           updatedAt: 0,
//         },
//         isLoading: false,
//       },
//     },
//     ui: {},
//   };
//   it('selectBook', () => {
//     const result = {
//       id: '123456',
//       title: 'dummy title',
//       authors: ['author1', 'author2'],
//       description: 'sample description',
//       previewLink: 'https://suumo.jp/',
//       imageUrl: 'https://suumo.jp/',
//       usersHaveRead: [user],
//       usersWantRead: [],
//       registeredBy: user,
//       createdAt: 0,
//       updatedAt: 0,
//     };
//     // エラー出るけど直し方わからない
//     expect(result).toEqual(selectBook(state));
//   });
//   it('selectIsLoading', () => {
//     const result = false;
//     // エラー出るけど直し方わからない
//     expect(result).toEqual(selectIsLoading(state));
//   });
// });
