/* eslint-disable no-undefined */
import reducer, { select } from '../searchResult';

describe('Reducer: searchResult', () => {
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

  it('Initial state', () => {
    const result = reducer(undefined, { type: '' });
    expect(result).toEqual({
      id: '',
      volumeInfo: {
        authors: [],
        description: '',
        imageLinks: {
          thumbnail: '',
        },
        title: '',
        previewLink: '',
      },
    });
  });

  it('Action: select', () => {
    const action = select(searchResult);
    const result = reducer(undefined, action);
    expect(result).toEqual(searchResult);
  });
});

// describe('Selector: searchResult', () => {
//   it('selectSearchResult', () => {});
// });
