import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { BookItem as typeBookItem, Type } from '../../../redux/modules/book';
import { Loading } from '../../atoms/Loading';
import { BookItem } from '../BookItem';
import styles from './index.module.scss';

export type Props = {
  books: typeBookItem[];
  hasMore: boolean;
  isLoading: boolean;
  handleReact: (_item: typeBookItem, _type: Type) => void;
  handleLoad: (_pageNum: number) => void;
};
export const BookList: React.VFC<Props> = ({
  books,
  hasMore,
  isLoading,
  handleReact,
  handleLoad,
}) => (
  <InfiniteScroll
    loadMore={handleLoad}
    hasMore={hasMore}
    loader={<Loading key={0} />}>
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
  </InfiniteScroll>
);
