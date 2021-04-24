import React from 'react';
import { SearchResult as typeSearchResult } from '../../redux/modules/searchResult';
import { SearchResultList } from '../SearchResultList';
import styles from './index.module.scss';
import { BookRegisterDialog } from '../BookRegisterDialog';

type Props = {
  titleRef: React.MutableRefObject<HTMLHeadingElement | null>;
  isLoading: boolean;
  searchResults: typeSearchResult[];
  pageCount: number;
  searchResult: typeSearchResult;
  handleReset: () => void;
  handlePagenation: (_selected: { selected: number }) => void;
  handleSelect: (_result: typeSearchResult) => void;
};
export const SearchResult: React.VFC<Props> = ({
  titleRef,
  isLoading,
  searchResults,
  pageCount,
  searchResult,
  handleReset,
  handlePagenation,
  handleSelect,
}) => (
  <div className={styles.root}>
    <h3 className={styles.title} ref={titleRef} tabIndex={-1}>
      検索結果
    </h3>
    <SearchResultList
      isLoading={isLoading}
      searchResults={searchResults}
      pageCount={pageCount}
      handlePagenation={handlePagenation}
      handleSelect={handleSelect}
    />
    <BookRegisterDialog searchResult={searchResult} handleReset={handleReset} />
  </div>
);
