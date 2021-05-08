/* eslint-disable no-undefined */
import reducer, { search, selectSearch } from '../search';
import { initialState } from './_initialState';

describe('Reducer: search', () => {
  it('Initial state', () => {
    const result = reducer(undefined, { type: '' });
    expect(result).toEqual({ searchword: '' });
  });

  it('Action: search', () => {
    const action = search({ searchword: 'sample word' });
    const result = reducer(undefined, action);
    expect(result).toEqual({ searchword: 'sample word' });
  });
});

describe('Selector: search', () => {
  const state = {
    ...initialState,
    ui: {
      ...initialState.ui,
      search: {
        searchword: 'test word',
      },
    },
  };
  it('selectSearch', () => {
    const result = 'test word';
    expect(result).toEqual(selectSearch(state));
  });
});
