import React from 'react';
import { BookItem as typeBookItem, Type } from '../../redux/modules/book';
import { BookItem } from '../BookItem';
import styles from './index.module.scss';

type Props = {
  books: typeBookItem[];
  isLoading: boolean;
  handleReact: (_item: typeBookItem, _type: Type) => void;
};
export const BookList: React.VFC<Props> = ({
  books,
  isLoading,
  handleReact,
}) => (
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
