import { mapUpdateBook } from '../mapUpdateBook';

describe('mapUpdateBook', () => {
  const mockMapUpdateBook = jest.fn(({ item, tags }) => ({
    ...mapUpdateBook({ item, tags }),
    createdAt: 0,
    updatedAt: 0,
  }));
  const user = {
    id: '1',
    email: 'sample@sample.com',
    name: 'test user',
  };
  const item = {
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
  const tags = [
    {
      value: 'Takepepe',
      id: 'takepepe',
    },
    {
      id: 'typescript',
      value: 'TypeScript',
    },
  ];
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
      tags: [
        {
          value: 'Takepepe',
          id: 'takepepe',
        },
        {
          id: 'typescript',
          value: 'TypeScript',
        },
      ],
      createdAt: 0,
      updatedAt: 0,
    };
    expect(result).toEqual(mockMapUpdateBook({ item, tags }));
  });
});
