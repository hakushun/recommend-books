import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInstance } from '../libs/firestore/getInstance';
import { BookItem } from '../redux/modules/book';
import {
  selectBooks,
  selectIsLoading,
  subscribe,
} from '../redux/modules/books';

type CustomHooks = () => {
  books: BookItem[];
  isLoading: boolean;
};
export const useBooks: CustomHooks = () => {
  const db = getInstance();
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    db.collection('books').onSnapshot((snapshot) => {
      const items: BookItem[] = [];
      snapshot.forEach((doc) => items.push(doc.data() as BookItem));
      dispatch(subscribe(items));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { books, isLoading };
};
