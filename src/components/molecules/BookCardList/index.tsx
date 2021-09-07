import React from 'react';
import styles from './index.module.scss';
import { BookItem, Type } from '../../../redux/modules/book';
import { Userdata } from '../../../redux/modules/user';
import { BookCardItem } from '../BookCardItem';

export type Props = {
  user: Userdata;
  isLoading: boolean;
  books: BookItem[];
  handleReact: (_item: BookItem, _type: Type) => void;
};
export const BookCardList: React.VFC<Props> = ({
  books,
  user,
  isLoading,
  handleReact,
}) => (
  <ul className={styles.root}>
    {books.map((book) => (
      <BookCardItem
        key={book.id}
        user={user}
        book={book}
        isLoading={isLoading}
        handleReact={handleReact}
      />
    ))}
  </ul>
);
