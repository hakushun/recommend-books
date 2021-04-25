import React from 'react';
import { BookItem as typeBookItem, Type } from '../../redux/modules/book';
import { BookItem } from '../BookItem';
import { BookListPagenation } from '../BookListPagenation';
import styles from './index.module.scss';

type Props = {
  books: typeBookItem[];
  pageCount: number;
  isLoading: boolean;
  handleReact: (_item: typeBookItem, _type: Type) => void;
  handlePagenate: (_selected: { selected: number }) => void;
};
export const BookList: React.VFC<Props> = ({
  books,
  pageCount,
  isLoading,
  handleReact,
  handlePagenate,
}) => (
  <>
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
    <BookListPagenation pageCount={pageCount} handlePagenate={handlePagenate} />
  </>
);
