import { mapSearchResult } from '../mapSearchResult';

describe('mapSearchResult', () => {
  // テスト対象をmockしていいのだろうか・・・
  // timestampがテストタイミングによってずれてエラーになってしまうのでmockを作成した
  const mockMapSearchResult = jest.fn(({ item, user, type }) => ({
    ...mapSearchResult({ item, user, type }),
    createdAt: 0,
    updatedAt: 0,
  }));
  const item = {
    id: '123456',
    volumeInfo: {
      authors: ['author1', 'author2'],
      description: 'sample description',
      imageLinks: {
        thumbnail: 'http://suumo.jp/',
      },
      title: 'dummy title',
      previewLink: 'https://suumo.jp/',
    },
  };
  const item2 = {
    id: '123456',
    volumeInfo: {
      title: 'dummy title',
    },
  };
  const user = {
    id: '1',
    email: 'sample@sample.com',
    name: 'test user',
  };
  const type = 'read';
  it('正常値', () => {
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
      tags: [],
      createdAt: 0,
      updatedAt: 0,
    };

    expect(result).toEqual(mockMapSearchResult({ item, user, type }));
  });

  it('情報不足', () => {
    const result = {
      id: '123456',
      title: 'dummy title',
      authors: [],
      description: '',
      previewLink: '',
      imageUrl: '',
      usersHaveRead: [user],
      usersWantRead: [],
      registeredBy: user,
      tags: [],
      createdAt: 0,
      updatedAt: 0,
    };

    expect(result).toEqual(mockMapSearchResult({ item: item2, user, type }));
  });
});
