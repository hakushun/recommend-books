import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import { BookItem } from '../BookItem';
import { Loading } from '../Loading';
import styles from './index.module.scss';

export const BookList: React.VFC = () => {
  const { books, isLoading } = useBooks();

  if (isLoading) return <Loading />;

  return (
    <ul className={styles.root}>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
};
