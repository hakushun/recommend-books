import React from 'react';
import { useBook } from '../../../hooks/useBook';
import { useBooks } from '../../../hooks/useBooks';
import { useDisplay } from '../../../hooks/useDisplay';
import { useUser } from '../../../hooks/useUser';
import { Loading } from '../../atoms/Loading';
import { BookList as Presentational } from './BookList';

export const BookList: React.VFC = () => {
  const { user } = useUser();
  const { isLoading, handleReact } = useBook();
  const { books, hasMore, isLoading: BooksIsLoading, handleLoad } = useBooks();
  const { layout } = useDisplay();
  if (BooksIsLoading) return <Loading />;

  return (
    <Presentational
      user={user}
      books={books}
      hasMore={hasMore}
      isLoading={isLoading}
      handleReact={handleReact}
      handleLoad={handleLoad}
      layout={layout}
    />
  );
};
