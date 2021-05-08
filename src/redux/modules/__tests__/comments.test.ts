/* eslint-disable no-undefined */
import reducer, { selectComments, subscribe } from '../comments';
import { initialState } from './_initialState';

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

describe('Selector: comments', () => {
  const state = {
    ...initialState,
    resources: {
      ...initialState.resources,
      comments: {
        comments: [
          {
            id: '00001',
            content: 'サンプルコメント1',
            author: {
              name: 'sample user1',
              id: '315X13qvz7N847FJPYpDg6KLUMz1',
              email: 'shun.nakano@nijibox.co.jp',
            },
            createdAt: 1620438954214 + 100,
            updatedAt: 1620438954214 + 100,
          },
          {
            id: '00002',
            content: 'サンプルコメント2',
            author: {
              name: 'sample user2',
              id: '315X13qvz7N847FJPYpDg6KLUMz1',
              email: 'shun.nakano@nijibox.co.jp',
            },
            createdAt: 1620438954214,
            updatedAt: 1620438954214,
          },
          {
            id: '00003',
            content: 'サンプルコメント3',
            author: {
              name: 'sample user3',
              id: '315X13qvz7N847FJPYpDg6KLUMz1',
              email: 'shun.nakano@nijibox.co.jp',
            },
            createdAt: 1620438954214 + 300,
            updatedAt: 1620438954214 + 300,
          },
        ],
      },
    },
  };
  it('selectComments', () => {
    const result = [
      {
        id: '00002',
        content: 'サンプルコメント2',
        author: {
          name: 'sample user2',
          id: '315X13qvz7N847FJPYpDg6KLUMz1',
          email: 'shun.nakano@nijibox.co.jp',
        },
        createdAt: 1620438954214,
        updatedAt: 1620438954214,
      },
      {
        id: '00001',
        content: 'サンプルコメント1',
        author: {
          name: 'sample user1',
          id: '315X13qvz7N847FJPYpDg6KLUMz1',
          email: 'shun.nakano@nijibox.co.jp',
        },
        createdAt: 1620438954214 + 100,
        updatedAt: 1620438954214 + 100,
      },
      {
        id: '00003',
        content: 'サンプルコメント3',
        author: {
          name: 'sample user3',
          id: '315X13qvz7N847FJPYpDg6KLUMz1',
          email: 'shun.nakano@nijibox.co.jp',
        },
        createdAt: 1620438954214 + 300,
        updatedAt: 1620438954214 + 300,
      },
    ];
    expect(result).toEqual(selectComments(state));
  });
});
