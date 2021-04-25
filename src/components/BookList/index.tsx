import React from 'react';
import { useBook } from '../../hooks/useBook';
import { useBooks } from '../../hooks/useBooks';
import { Loading } from '../Loading';
import { BookList as Presentational } from './BookList';

export const BookList: React.VFC = () => {
  const { isLoading, handleReact } = useBook();
  const { books, isLoading: BooksIsLoading } = useBooks();

  if (BooksIsLoading) return <Loading />;

  return (
    <Presentational
      books={books}
      isLoading={isLoading}
      handleReact={handleReact}
    />
  );
};
