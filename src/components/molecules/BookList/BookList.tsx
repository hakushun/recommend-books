import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { BookItem as typeBookItem, Type } from '../../../redux/modules/book';
import { Userdata } from '../../../redux/modules/user';
import { Loading } from '../../atoms/Loading';
import { BookRowList } from '../BookRowList';
import { BookCardList } from '../BookCardList';
import { Layout } from '../../../redux/modules/display';

export type Props = {
  user: Userdata;
  books: typeBookItem[];
  hasMore: boolean;
  isLoading: boolean;
  handleReact: (_item: typeBookItem, _type: Type) => void;
  handleLoad: () => void;
  layout: Layout;
};
export const BookList: React.VFC<Props> = ({
  user,
  books,
  hasMore,
  isLoading,
  handleReact,
  handleLoad,
  layout,
}) => (
  <InfiniteScroll
    loadMore={handleLoad}
    hasMore={hasMore}
    loader={<Loading key={0} />}>
    {layout === 'card' && (
      <BookCardList
        user={user}
        books={books}
        isLoading={isLoading}
        handleReact={handleReact}
      />
    )}
    {layout === 'list' && (
      <BookRowList
        user={user}
        books={books}
        isLoading={isLoading}
        handleReact={handleReact}
      />
    )}
  </InfiniteScroll>
);
