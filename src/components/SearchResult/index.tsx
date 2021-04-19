import React, { MutableRefObject } from 'react';
import ReactPaginate from 'react-paginate';
import { SearchResultList } from '../SearchResultList';
import { SearchResult as typeSearchResult } from '../../redux/modules/searchResult';
import styles from './index.module.scss';
import { BookRegisterDialog } from '../BookRegisterDialog';

type Props = {
  titleRef: MutableRefObject<HTMLHeadingElement | null>;
  pageCount: number;
  results: typeSearchResult[];
  isLoading: boolean;
  handlePagenation: (_selected: { selected: number }) => void;
};
export const SearchResult: React.VFC<Props> = ({
  titleRef,
  pageCount,
  results,
  isLoading,
  handlePagenation,
}) => (
  <div className={styles.root}>
    <h3 className={styles.title} ref={titleRef} tabIndex={-1}>
      検索結果
    </h3>
    <SearchResultList results={results} isLoading={isLoading} />
    {results?.length > 0 && (
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        containerClassName="pagenation"
        pageLinkClassName="pageLink"
        activeLinkClassName="activeLink"
        previousLinkClassName="previousLink"
        nextLinkClassName="nextLink"
        breakLinkClassName="breakLink"
        onPageChange={handlePagenation}
      />
    )}
    <BookRegisterDialog />
  </div>
);
