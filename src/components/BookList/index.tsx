import React from 'react';
import { useBook } from '../../hooks/useBook';
import { useBooks } from '../../hooks/useBooks';
import { BookItem } from '../BookItem';
import { Loading } from '../Loading';
import styles from './index.module.scss';

export const BookList: React.VFC = () => {
  const { isLoading, handleReact } = useBook();
  const { books, isLoading: BooksIsLoading } = useBooks();

  if (BooksIsLoading) return <Loading />;

  return (
    <ul className={styles.root}>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          isLoading={isLoading}
          handleReact={handleReact}
        />
      ))}
    </ul>
  );
};
