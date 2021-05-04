/* eslint-disable no-undefined */
import reducer, { add, remove, select, toggle } from '../tags';
import { fetch, update } from '../book';

describe('Reducer: tags', () => {
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
  const fetchPayload = '123456';
  const updatePayload = { item: book, tags };
  it('Initial state', () => {
    const result = reducer(undefined, { type: '' });
    expect(result).toEqual({ tags: [], isEditable: false, selected: null });
  });

  it('Action: toggle', () => {
    const action = toggle(true);
    const result = reducer(undefined, action);
    expect(result).toEqual({ tags: [], isEditable: true, selected: null });
  });

  it('Action: add', () => {
    const action = add('dummyTag');
    const result = reducer(undefined, action);
    expect(result).toEqual({
      tags: [{ id: 'dummytag', value: 'dummyTag' }],
      isEditable: false,
      selected: null,
    });
  });

  it('Action: remove last one', () => {
    const action = remove();
    const result = reducer(
      {
        tags: [
          { id: 'dummytag', value: 'dummyTag' },
          { id: 'sampletag', value: 'sampleTag' },
        ],
        isEditable: false,
        selected: null,
      },
      action,
    );
    expect(result).toEqual({
      tags: [{ id: 'dummytag', value: 'dummyTag' }],
      isEditable: false,
      selected: null,
    });
  });

  it('Action: remove target one', () => {
    const action = remove('dummytag');
    const result = reducer(
      {
        tags: [
          { id: 'dummytag', value: 'dummyTag' },
          { id: 'sampletag', value: 'sampleTag' },
        ],
        isEditable: false,
        selected: null,
      },
      action,
    );
    expect(result).toEqual({
      tags: [{ id: 'sampletag', value: 'sampleTag' }],
      isEditable: false,
      selected: null,
    });
  });

  it('Action: fetch.async.done', () => {
    const action = fetch.async.done({
      params: fetchPayload,
      result: book,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
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
      isEditable: false,
      selected: null,
    });
  });

  it('Action: update.async.done', () => {
    const action = update.async.done({
      params: updatePayload,
      result: { ...book },
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      tags: [],
      isEditable: false,
      selected: null,
    });
  });

  it('Action: select', () => {
    const action = select('TypeScript');
    const result = reducer(undefined, action);
    expect(result).toEqual({
      tags: [],
      isEditable: false,
      selected: 'TypeScript',
    });
  });
});

// describe('Selector: sort', () => {
//   it('selectTags', () => {});
//   it('selectIsEditable', () => {});
//   it('selectSelectedTags', () => {});
//   it('selectPopularTags', () => {});
// });
