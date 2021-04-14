import { combineReducers } from 'redux';
import user from './user';
import book from './book';
import comment from './comment';
import searchResults from './searchResults';

const rootReducer = combineReducers({
  resources: combineReducers({ searchResults }),
  ui: combineReducers({ user, book, comment }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
