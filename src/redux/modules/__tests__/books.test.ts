/* eslint-disable no-undefined */
import reducer, { pagenate, subscribe } from '../books';

describe('Reducer: books', () => {
  const user = {
    id: '1',
    email: 'sample@sample.com',
    name: 'test user',
  };
  const books = [
    {
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
    },
  ];
  it('Initial state', () => {
    const result = reducer(undefined, { type: '' });
    expect(result).toEqual({ books: [], startIndex: 0, maxResults: 30 });
  });

  it('Action: subscribe', () => {
    const action = subscribe(books);
    const result = reducer(undefined, action);
    expect(result).toEqual({
      books: [
        {
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
        },
      ],
      startIndex: 0,
      maxResults: 30,
    });
  });
  it('Action: pagenate', () => {
    const action = pagenate(3);
    const result = reducer(undefined, action);
    expect(result).toEqual({ books: [], startIndex: 90, maxResults: 30 });
  });
});

// describe('Selector: books', () => {
//   it('selectBooks', () => {});
//   it('selectMaxResults', () => {});
//   it('selectStartIndex', () => {});
// });
