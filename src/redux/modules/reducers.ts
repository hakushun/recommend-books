import { combineReducers } from 'redux';
import user from './user';
import book from './book';
import comment from './comment';

const rootReducer = combineReducers({
  // resources: combineReducers({}),
  ui: combineReducers({ user, book, comment }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
