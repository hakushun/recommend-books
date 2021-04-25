import React from 'react';
import { SearchResult as typeSearchResult } from '../../../redux/modules/searchResult';
import { SearchResultList } from '../SearchResultList';
import styles from './index.module.scss';
import { BookRegisterModal } from '../BookRegisterModal';
import { Type } from '../../../redux/modules/book';

type Props = {
  titleRef: React.MutableRefObject<HTMLHeadingElement | null>;
  isLoading: boolean;
  searchResults: typeSearchResult[];
  pageCount: number;
  searchResult: typeSearchResult;
  handleCreate: (_item: typeSearchResult, _type: Type) => void;
  handlePagenation: (_selected: { selected: number }) => void;
  handleSelect: (_result: typeSearchResult) => void;
};
export const SearchResult: React.VFC<Props> = ({
  titleRef,
  isLoading,
  searchResults,
  pageCount,
  searchResult,
  handleCreate,
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
    <BookRegisterModal
      searchResult={searchResult}
      isLoading={isLoading}
      handleCreate={handleCreate}
    />
  </div>
);
