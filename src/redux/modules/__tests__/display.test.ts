/* eslint-disable no-undefined */
import reducer, { switchLayout, selectLayout, Layout } from '../display';
import { initialState } from './_initialState';

describe('Reducer: display', () => {
  it('Initial state', () => {
    const result = reducer(undefined, { type: '' });
    expect(result).toEqual({ layout: 'card' });
  });

  it('Action: switchLayout_list', () => {
    const action = switchLayout(false);
    const result = reducer(undefined, action);
    expect(result).toEqual({ layout: 'list' });
  });

  it('Action: switchLayout_card', () => {
    const action = switchLayout(true);
    const result = reducer(undefined, action);
    expect(result).toEqual({ layout: 'card' });
  });
});

describe('Selector: display', () => {
  const state = {
    ...initialState,
    ui: {
      ...initialState.ui,
      display: {
        layout: 'card' as Layout,
      },
    },
  };
  it('selectLayout', () => {
    const result = 'card';
    expect(result).toEqual(selectLayout(state));
  });
});
