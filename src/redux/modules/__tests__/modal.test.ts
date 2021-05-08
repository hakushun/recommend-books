/* eslint-disable no-undefined */
import { create, CreatePayload } from '../book';
import reducer, { selectModal, toggle } from '../modal';
import { select } from '../searchResult';
import { initialState } from './_initialState';

describe('Reducer: modal', () => {
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
  const user = {
    id: '1',
    email: 'sample@sample.com',
    name: 'test user',
  };
  const createPayload: CreatePayload = {
    item: searchResult,
    user,
    type: 'read',
  };
  it('Initial state', () => {
    const result = reducer(undefined, { type: '' });
    expect(result).toEqual({ registerDialog: false });
  });

  it('Action: toggle', () => {
    const action = toggle({ registerDialog: true });
    const result = reducer(undefined, action);
    expect(result).toEqual({ registerDialog: true });
  });
  it('Action: select', () => {
    const action = select(searchResult);
    const result = reducer(undefined, action);
    expect(result).toEqual({ registerDialog: true });
  });
  it('Action: create.async.done', () => {
    const action = create.async.done({
      params: createPayload,
      result: undefined,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({ registerDialog: false });
  });
});

describe('Selector: modal', () => {
  const state = {
    ...initialState,
    ui: {
      ...initialState.ui,
      modal: {
        registerDialog: false,
      },
    },
  };
  it('selectModal', () => {
    const result = { registerDialog: false };
    expect(result).toEqual(selectModal(state));
  });
});
