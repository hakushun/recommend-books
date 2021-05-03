import React from 'react';
import { useBook } from '../../../hooks/useBook';
import { useBooks } from '../../../hooks/useBooks';
import { Loading } from '../../atoms/Loading';
import { BookList as Presentational } from './BookList';

export const BookList: React.VFC = () => {
  const { isLoading, handleReact } = useBook();
  const { books, hasMore, isLoading: BooksIsLoading, handleLoad } = useBooks();

  if (BooksIsLoading) return <Loading />;

  return (
    <Presentational
      books={books}
      hasMore={hasMore}
      isLoading={isLoading}
      handleReact={handleReact}
      handleLoad={handleLoad}
    />
  );
};
