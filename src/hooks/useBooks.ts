import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInstance } from '../libs/firestore/getInstance';
import { BookItem } from '../redux/modules/book';
import {
  pagenate,
  selectBooks,
  selectMaxResults,
  selectStartIndex,
  subscribe,
} from '../redux/modules/books';

type CustomHooks = () => {
  books: BookItem[];
  pageCount: number;
  isLoading: boolean;
  handlePagenate: (_selected: { selected: number }) => void;
};
export const useBooks: CustomHooks = () => {
  const db = getInstance();
  const dispatch = useDispatch();
  const allBooks = useSelector(selectBooks);
  const maxResults = useSelector(selectMaxResults);
  const startIndex = useSelector(selectStartIndex);
  const [isLoading, setIsLoading] = useState(true);

  const books = allBooks.slice(startIndex, startIndex + maxResults);
  const pageCount = Math.ceil(allBooks.length / maxResults);

  const handlePagenate = ({ selected }: { selected: number }) => {
    dispatch(pagenate(selected));
  };

  useEffect(() => {
    db.collection('books').onSnapshot((snapshot) => {
      const items: BookItem[] = [];
      snapshot.forEach((doc) => items.push(doc.data() as BookItem));
      dispatch(subscribe(items));
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { books, pageCount, isLoading, handlePagenate };
};
