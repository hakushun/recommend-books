/* eslint-disable no-undefined */
import reducer, { search } from '../search';

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

// describe('Selector: search', () => {
//   it('selectSearch', () => {});
// });
