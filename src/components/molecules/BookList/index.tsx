import React from 'react';
import { useBook } from '../../../hooks/useBook';
import { useBooks } from '../../../hooks/useBooks';
import { Loading } from '../../atoms/Loading';
import { BookList as Presentational } from './BookList';

export const BookList: React.VFC = () => {
  const { isLoading, handleReact } = useBook();
  const {
    books,
    pageCount,
    isLoading: BooksIsLoading,
    handlePagenate,
  } = useBooks();

  if (BooksIsLoading) return <Loading />;

  return (
    <Presentational
      books={books}
      pageCount={pageCount}
      isLoading={isLoading}
      handleReact={handleReact}
      handlePagenate={handlePagenate}
    />
  );
};
