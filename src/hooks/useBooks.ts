import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookItem } from '../redux/modules/book';
import { fetch, selectBooks, selectIsLoading } from '../redux/modules/books';

type CustomHooks = () => {
  books: BookItem[];
  isLoading: boolean;
};
export const useBooks: CustomHooks = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { books, isLoading };
};
