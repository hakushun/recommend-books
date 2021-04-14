import { combineReducers } from 'redux';
import user from './user';
import book from './book';
import comment from './comment';
import searchResult from './searchResult';
import searchResults from './searchResults';
import modal from './modal';

const rootReducer = combineReducers({
  resources: combineReducers({ user, book, comment, searchResults }),
  ui: combineReducers({ searchResult, modal }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
