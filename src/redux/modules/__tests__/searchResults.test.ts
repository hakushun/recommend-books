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
  selectSearchResults,
  selectIsLoading,
  selectMaxResults,
  selectTotalItems,
} from '../searchResults';
import { initialState } from './_initialState';

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
      currentPage: 0,
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
      currentPage: 0,
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
    currentPage: 0,
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
      currentPage: 0,
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
      currentPage: 0,
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
      currentPage: 0,
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
      currentPage: 0,
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
      currentPage: 0,
      isLoading: false,
      error,
    });
  });
});

describe('Selector: searchResults', () => {
  const state = {
    ...initialState,
    resources: {
      ...initialState.resources,
      searchResults: {
        searchResults: [
          {
            id: 'U4O3DwAAQBAJ',
            selfLink:
              'https://www.googleapis.com/books/v1/volumes/U4O3DwAAQBAJ',
            volumeInfo: {
              title: '実践TypeScript',
              authors: ['吉井健文'],
              description:
                '※この商品はタブレットなど大きいディスプレイを備えた端末で読むことに適しています。また、文字だけを拡大することや、文字列のハイライト、検索、辞書の参照、引用などの機能が使用できません。 本書は、TypeScriptの「型システム」に関する知識を体系的に学ぶための一冊です。TypeScriptやJavaScriptで、ある程度のアプリケーションを作った経験がある人を対象としているため、アプリケーション構築に必要なノウハウなどは提供していません。TypeScriptの型システムにフォーカスし、その基礎からフレームワークと連携した活用方法まで、より深く解説しています。 本書を読めば「TypeScriptは、スピーディーに品質の高いサービスを開発する上では欠かせない最高のパートナー」だということがわかるはずです。よいライブラリを使えば自動的によいアプリケーションが作れるわけではないように、型定義も個人の力量とアイディアが重要です。本書は、そういった「型定義」のスキルアップを目指すには最適の一冊です。',
              imageLinks: {
                thumbnail:
                  'http://books.google.com/books/content?id=U4O3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
              },
              previewLink:
                'http://books.google.co.jp/books?id=U4O3DwAAQBAJ&pg=PA7&dq=%E5%AE%9F%E8%B7%B5TypeScript&hl=&cd=1&source=gbs_api',
            },
          },
          {
            id: 'U4O3DwAAQBAJ',
            selfLink:
              'https://www.googleapis.com/books/v1/volumes/U4O3DwAAQBAJ',
            volumeInfo: {
              title: '実践TypeScript',
              authors: ['吉井健文'],
              description:
                '※この商品はタブレットなど大きいディスプレイを備えた端末で読むことに適しています。また、文字だけを拡大することや、文字列のハイライト、検索、辞書の参照、引用などの機能が使用できません。 本書は、TypeScriptの「型システム」に関する知識を体系的に学ぶための一冊です。TypeScriptやJavaScriptで、ある程度のアプリケーションを作った経験がある人を対象としているため、アプリケーション構築に必要なノウハウなどは提供していません。TypeScriptの型システムにフォーカスし、その基礎からフレームワークと連携した活用方法まで、より深く解説しています。 本書を読めば「TypeScriptは、スピーディーに品質の高いサービスを開発する上では欠かせない最高のパートナー」だということがわかるはずです。よいライブラリを使えば自動的によいアプリケーションが作れるわけではないように、型定義も個人の力量とアイディアが重要です。本書は、そういった「型定義」のスキルアップを目指すには最適の一冊です。',
              imageLinks: {
                thumbnail:
                  'http://books.google.com/books/content?id=U4O3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
              },
              previewLink:
                'http://books.google.co.jp/books?id=U4O3DwAAQBAJ&pg=PA7&dq=%E5%AE%9F%E8%B7%B5TypeScript&hl=&cd=1&source=gbs_api',
            },
          },
          {
            id: 'U4O3DwAAQBAJ',
            selfLink:
              'https://www.googleapis.com/books/v1/volumes/U4O3DwAAQBAJ',
            volumeInfo: {
              title: '実践TypeScript',
              authors: ['吉井健文'],
              description:
                '※この商品はタブレットなど大きいディスプレイを備えた端末で読むことに適しています。また、文字だけを拡大することや、文字列のハイライト、検索、辞書の参照、引用などの機能が使用できません。 本書は、TypeScriptの「型システム」に関する知識を体系的に学ぶための一冊です。TypeScriptやJavaScriptで、ある程度のアプリケーションを作った経験がある人を対象としているため、アプリケーション構築に必要なノウハウなどは提供していません。TypeScriptの型システムにフォーカスし、その基礎からフレームワークと連携した活用方法まで、より深く解説しています。 本書を読めば「TypeScriptは、スピーディーに品質の高いサービスを開発する上では欠かせない最高のパートナー」だということがわかるはずです。よいライブラリを使えば自動的によいアプリケーションが作れるわけではないように、型定義も個人の力量とアイディアが重要です。本書は、そういった「型定義」のスキルアップを目指すには最適の一冊です。',
              imageLinks: {
                thumbnail:
                  'http://books.google.com/books/content?id=U4O3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
              },
              previewLink:
                'http://books.google.co.jp/books?id=U4O3DwAAQBAJ&pg=PA7&dq=%E5%AE%9F%E8%B7%B5TypeScript&hl=&cd=1&source=gbs_api',
            },
          },
        ],
        totalItems: 100,
        maxResults: 20,
        currentPage: 0,
        isLoading: false,
      },
    },
  };
  it('selectSearchResults', () => {
    const result = [
      {
        id: 'U4O3DwAAQBAJ',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/U4O3DwAAQBAJ',
        volumeInfo: {
          title: '実践TypeScript',
          authors: ['吉井健文'],
          description:
            '※この商品はタブレットなど大きいディスプレイを備えた端末で読むことに適しています。また、文字だけを拡大することや、文字列のハイライト、検索、辞書の参照、引用などの機能が使用できません。 本書は、TypeScriptの「型システム」に関する知識を体系的に学ぶための一冊です。TypeScriptやJavaScriptで、ある程度のアプリケーションを作った経験がある人を対象としているため、アプリケーション構築に必要なノウハウなどは提供していません。TypeScriptの型システムにフォーカスし、その基礎からフレームワークと連携した活用方法まで、より深く解説しています。 本書を読めば「TypeScriptは、スピーディーに品質の高いサービスを開発する上では欠かせない最高のパートナー」だということがわかるはずです。よいライブラリを使えば自動的によいアプリケーションが作れるわけではないように、型定義も個人の力量とアイディアが重要です。本書は、そういった「型定義」のスキルアップを目指すには最適の一冊です。',
          imageLinks: {
            thumbnail:
              'http://books.google.com/books/content?id=U4O3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          },
          previewLink:
            'http://books.google.co.jp/books?id=U4O3DwAAQBAJ&pg=PA7&dq=%E5%AE%9F%E8%B7%B5TypeScript&hl=&cd=1&source=gbs_api',
        },
      },
      {
        id: 'U4O3DwAAQBAJ',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/U4O3DwAAQBAJ',
        volumeInfo: {
          title: '実践TypeScript',
          authors: ['吉井健文'],
          description:
            '※この商品はタブレットなど大きいディスプレイを備えた端末で読むことに適しています。また、文字だけを拡大することや、文字列のハイライト、検索、辞書の参照、引用などの機能が使用できません。 本書は、TypeScriptの「型システム」に関する知識を体系的に学ぶための一冊です。TypeScriptやJavaScriptで、ある程度のアプリケーションを作った経験がある人を対象としているため、アプリケーション構築に必要なノウハウなどは提供していません。TypeScriptの型システムにフォーカスし、その基礎からフレームワークと連携した活用方法まで、より深く解説しています。 本書を読めば「TypeScriptは、スピーディーに品質の高いサービスを開発する上では欠かせない最高のパートナー」だということがわかるはずです。よいライブラリを使えば自動的によいアプリケーションが作れるわけではないように、型定義も個人の力量とアイディアが重要です。本書は、そういった「型定義」のスキルアップを目指すには最適の一冊です。',
          imageLinks: {
            thumbnail:
              'http://books.google.com/books/content?id=U4O3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          },
          previewLink:
            'http://books.google.co.jp/books?id=U4O3DwAAQBAJ&pg=PA7&dq=%E5%AE%9F%E8%B7%B5TypeScript&hl=&cd=1&source=gbs_api',
        },
      },
      {
        id: 'U4O3DwAAQBAJ',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/U4O3DwAAQBAJ',
        volumeInfo: {
          title: '実践TypeScript',
          authors: ['吉井健文'],
          description:
            '※この商品はタブレットなど大きいディスプレイを備えた端末で読むことに適しています。また、文字だけを拡大することや、文字列のハイライト、検索、辞書の参照、引用などの機能が使用できません。 本書は、TypeScriptの「型システム」に関する知識を体系的に学ぶための一冊です。TypeScriptやJavaScriptで、ある程度のアプリケーションを作った経験がある人を対象としているため、アプリケーション構築に必要なノウハウなどは提供していません。TypeScriptの型システムにフォーカスし、その基礎からフレームワークと連携した活用方法まで、より深く解説しています。 本書を読めば「TypeScriptは、スピーディーに品質の高いサービスを開発する上では欠かせない最高のパートナー」だということがわかるはずです。よいライブラリを使えば自動的によいアプリケーションが作れるわけではないように、型定義も個人の力量とアイディアが重要です。本書は、そういった「型定義」のスキルアップを目指すには最適の一冊です。',
          imageLinks: {
            thumbnail:
              'http://books.google.com/books/content?id=U4O3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          },
          previewLink:
            'http://books.google.co.jp/books?id=U4O3DwAAQBAJ&pg=PA7&dq=%E5%AE%9F%E8%B7%B5TypeScript&hl=&cd=1&source=gbs_api',
        },
      },
    ];
    expect(result).toEqual(selectSearchResults(state));
  });
  it('selectTotalItems', () => {
    const result = 100;
    expect(result).toEqual(selectTotalItems(state));
  });
  it('selectMaxResults', () => {
    const result = 20;
    expect(result).toEqual(selectMaxResults(state));
  });
  it('selectIsLoading', () => {
    const result = false;
    expect(result).toEqual(selectIsLoading(state));
  });
});
