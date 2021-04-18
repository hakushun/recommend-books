import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInstance } from '../libs/firestore/getInstance';
import { BookItem } from '../redux/modules/book';
import {
  selectBooks,
  selectIsLoading,
  subscribe,
} from '../redux/modules/books';
import { selectSearchResult } from '../redux/modules/searchResult';

type CustomHooks = () => {
  books: BookItem[];
  isLoading: boolean;
  haveRegistered: boolean;
};
export const useBooks: CustomHooks = () => {
  const db = getInstance();
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const isLoading = useSelector(selectIsLoading);
  const searchResult = useSelector(selectSearchResult);

  const haveRegistered = books.some((book) => book.id === searchResult.id);

  useEffect(() => {
    db.collection('books').onSnapshot((snapshot) => {
      const items: BookItem[] = [];
      snapshot.forEach((doc) => items.push(doc.data() as BookItem));
      dispatch(subscribe(items));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { books, isLoading, haveRegistered };
};
