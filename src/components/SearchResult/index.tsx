import React from 'react';
import ReactPaginate from 'react-paginate';
import { SearchResultList } from '../SearchResultList';
import { SearchResult as typeSearchResult } from '../../redux/modules/searchResult';
import styles from './index.module.scss';
import { BookRegisterDialog } from '../BookRegisterDialog';

type Props = {
  pageCount: number;
  results: typeSearchResult[];
  handlePagenation: (_selected: { selected: number }) => void;
};
export const SearchResult: React.VFC<Props> = ({
  pageCount,
  results,
  handlePagenation,
}) => (
  <div className={styles.root}>
    <h3 className={styles.title}>検索結果</h3>
    <SearchResultList results={results} />
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
