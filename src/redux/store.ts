import {
  applyMiddleware,
  createStore,
  Middleware,
  Reducer,
  Store,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { RootState } from './modules/reducers';

// eslint-disable-next-line arrow-body-style
const bindMiddleware = (middleware: Middleware[]) =>
  composeWithDevTools(applyMiddleware(...middleware));

const reducer: Reducer<RootState> = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export const initStore = (): Store =>
  createStore(reducer, bindMiddleware([thunkMiddleware]));

export const wrapper = createWrapper(initStore);
