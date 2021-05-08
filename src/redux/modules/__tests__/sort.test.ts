/* eslint-disable no-undefined */
import reducer, { selectSortKey, sort, SortKey } from '../sort';
import { initialState } from './_initialState';

describe('Reducer: sort', () => {
  it('Initial state', () => {
    const result = reducer(undefined, { type: '' });
    expect(result).toEqual({ key: 'new' });
  });

  it('Action: sort', () => {
    const action = sort({ key: 'new' });
    const result = reducer(undefined, action);
    expect(result).toEqual({ key: 'new' });
  });
});

describe('Selector: sort', () => {
  const state = {
    ...initialState,
    ui: {
      ...initialState.ui,
      sort: {
        key: 'read' as SortKey,
      },
    },
  };
  it('selectSortKey', () => {
    const result = 'read';
    expect(result).toEqual(selectSortKey(state));
  });
});
