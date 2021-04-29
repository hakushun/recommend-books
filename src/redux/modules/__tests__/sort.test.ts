/* eslint-disable no-undefined */
import reducer, { sort } from '../sort';

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

// describe('Selector: sort', () => {
//   it('selectSortKey', () => {});
// });
