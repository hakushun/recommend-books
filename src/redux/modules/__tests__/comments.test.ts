/* eslint-disable no-undefined */
import reducer, { subscribe } from '../comments';

describe('Reducer: comments', () => {
  const user = {
    id: '1',
    email: 'sample@sample.com',
    name: 'test user',
  };
  const comments = [
    {
      id: '123456',
      content: 'dummy comment',
      author: user,
      createdAt: 0,
      updatedAt: 0,
    },
  ];
  it('Initial state', () => {
    const result = reducer(undefined, { type: '' });
    expect(result).toEqual({ comments: [] });
  });

  it('Action: subscribe', () => {
    const action = subscribe(comments);
    const result = reducer(undefined, action);
    expect(result).toEqual({
      comments: [
        {
          id: '123456',
          content: 'dummy comment',
          author: user,
          createdAt: 0,
          updatedAt: 0,
        },
      ],
    });
  });
});

// describe('Selector: comments', () => {
//   it('selectComments', () => {});
// });
