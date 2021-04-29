/* eslint-disable no-undefined */
import { AnyAction, Middleware } from 'redux';
import configureMockStore, { MockStore } from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import * as module from '../../../libs/api/searchBooks';
import reducer, {
  reset,
  search,
  SearchPayload,
  SearchResults,
} from '../searchResults';

describe('Async actions: searchResults', () => {
  interface Ext {
    dispatch: ThunkDispatch<SearchResults, SearchResults, AnyAction>;
  }
  type StoreType = MockStore<SearchResults> & Ext;
  let middleware: Middleware[] = [];
  let createMockStore: (_: SearchResults) => StoreType;
  let mockStore: StoreType;

  beforeEach(() => {
    middleware = [thunk];
    createMockStore = configureMockStore(middleware);
    mockStore = createMockStore({
      searchResults: [],
      totalItems: 0,
      maxResults: 20,
      isLoading: false,
    });
  });

  it('search: success', async () => {
    const rowData = {
      items: [
        {
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
        },
      ],
      totalItems: 1,
    };
    jest
      .spyOn(module, 'searchBooks')
      .mockImplementationOnce(async () => Promise.resolve(rowData));
    const params: SearchPayload = {
      keyword: 'search word',
      maxResults: 1,
      startIndex: 0,
    };
    const expectedActions = [
      search.async.started(params),
      search.async.done({ params, result: rowData }),
    ];
    await mockStore.dispatch(search(params));
    expect(mockStore.getActions()).toEqual(expectedActions);
  });
});

describe('Reducer: searchResults', () => {
  const searchPayload = {
    keyword: 'search word',
    maxResults: 20,
    startIndex: 0,
  };
  const rowData = {
    items: [
      {
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
      },
    ],
    totalItems: 1,
  };
  const error = { name: 'error', message: 'something is wrong' };
  it('Initial state', () => {
    const result = reducer(undefined, { type: '' });
    expect(result).toEqual({
      searchResults: [],
      totalItems: 0,
      maxResults: 20,
      isLoading: false,
    });
  });

  it('Action: reset', () => {
    const actoion = reset();
    const result = reducer(undefined, actoion);
    expect(result).toEqual({
      searchResults: [],
      totalItems: 0,
      maxResults: 20,
      isLoading: false,
    });
  });

  it('Action: search.async.started', () => {
    const action = search.async.started(searchPayload);
    const result = reducer(undefined, action);
    expect(result).toEqual({
      searchResults: [],
      totalItems: 0,
      maxResults: 20,
      isLoading: true,
    });
  });
  it('Action: search.async.done', () => {
    const action = search.async.done({
      params: searchPayload,
      result: rowData,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      searchResults: [
        {
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
        },
      ],
      totalItems: 1,
      maxResults: 20,
      isLoading: false,
    });
  });
  it('Action: search.async.failed', () => {
    const action = search.async.failed({ params: searchPayload, error });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      searchResults: [],
      totalItems: 0,
      maxResults: 20,
      isLoading: false,
      error,
    });
  });
});

// describe('Selector: searchResults', () => {
//   it('selectSearchResults', () => {});
//   it('selectTotalItems', () => {});
//   it('selectMaxResults', () => {});
//   it('selectIsLoading', () => {});
// });
