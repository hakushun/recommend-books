import { combineReducers } from 'redux';
import user from './user';
import book from './book';
import books from './books';
import comment from './comment';
import comments from './comments';
import searchResult from './searchResult';
import searchResults from './searchResults';
import modal from './modal';
import search from './search';
import sort from './sort';
import tags from './tags';

const rootReducer = combineReducers({
  resources: combineReducers({
    user,
    book,
    books,
    comment,
    comments,
    searchResults,
  }),
  ui: combineReducers({ searchResult, modal, search, sort, tags }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
