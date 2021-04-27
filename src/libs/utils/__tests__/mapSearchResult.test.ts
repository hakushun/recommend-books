import { getNow } from '../../dayjs';
import { mapSearchResult } from '../mapSearchResult';

describe('mapSearchResult', () => {
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
      createdAt: getNow(),
      updatedAt: getNow(),
    };

    expect(result).toEqual(mapSearchResult({ item, user, type }));
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
      createdAt: getNow(),
      updatedAt: getNow(),
    };

    expect(result).toEqual(mapSearchResult({ item: item2, user, type }));
  });
});
