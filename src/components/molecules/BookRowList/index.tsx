import React from 'react';
import styles from './index.module.scss';
import { BookItem, Type } from '../../../redux/modules/book';
import { Userdata } from '../../../redux/modules/user';
import { BookRowItem } from '../BookRowItem';

export type Props = {
  user: Userdata;
  isLoading: boolean;
  books: BookItem[];
  handleReact: (_item: BookItem, _type: Type) => void;
};
export const BookRowList: React.VFC<Props> = ({
  books,
  user,
  isLoading,
  handleReact,
}) => (
  <ul className={styles.root}>
    {books.map((book) => (
      <BookRowItem
        key={book.id}
        book={book}
        user={user}
        isLoading={isLoading}
        handleReact={handleReact}
      />
    ))}
  </ul>
);
