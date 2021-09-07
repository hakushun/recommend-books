import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInstance } from '../libs/firestore/getInstance';
import { BookItem } from '../redux/modules/book';
import {
  load,
  selectBooks,
  selectMaxResults,
  selectPage,
  subscribe,
} from '../redux/modules/books';

type CustomHooks = () => {
  books: BookItem[];
  hasMore: boolean;
  isLoading: boolean;
  handleLoad: () => void;
};
export const useBooks: CustomHooks = () => {
  const db = getInstance();
  const dispatch = useDispatch();
  const allBooks = useSelector(selectBooks);
  const maxResults = useSelector(selectMaxResults);
  const page = useSelector(selectPage);
  const [isLoading, setIsLoading] = useState(true);

  const books = [...allBooks].slice(0, page * maxResults);
  const hasMore = books.length < allBooks.length;

  const handleLoad = () => {
    dispatch(load(page + 1));
  };

  useEffect(() => {
    const unsubscribe = db.collection('books').onSnapshot((snapshot) => {
      const items: BookItem[] = [];
      snapshot.forEach((doc) => items.push(doc.data() as BookItem));
      dispatch(subscribe(items));
      setIsLoading(false);
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { books, hasMore, isLoading, handleLoad };
};
