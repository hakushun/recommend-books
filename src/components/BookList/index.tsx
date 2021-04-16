import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import { BookItem } from '../BookItem';
import styles from './index.module.scss';

export const BookList: React.VFC = () => {
  const { books } = useBooks();
  return (
    <ul className={styles.root}>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
};
