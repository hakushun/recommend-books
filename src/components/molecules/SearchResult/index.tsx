import React from 'react';
import { SearchResult as typeSearchResult } from '../../../redux/modules/searchResult';
import { SearchResultList } from '../SearchResultList';
import styles from './index.module.scss';
import { BookRegisterModal } from '../BookRegisterModal';
import { Type } from '../../../redux/modules/book';
import { SearchResultPagenation } from '../SearchResultPagenation';

type Props = {
  titleRef: React.MutableRefObject<HTMLHeadingElement | null>;
  isLoading: boolean;
  searchResults: typeSearchResult[];
  pageCount: number;
  searchResult: typeSearchResult;
  haveRegistered: boolean;
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
  haveRegistered,
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
      handleSelect={handleSelect}
    />
    {searchResults?.length > 0 && (
      <SearchResultPagenation
        pageCount={pageCount}
        handlePagenation={handlePagenation}
      />
    )}
    <BookRegisterModal
      searchResult={searchResult}
      isLoading={isLoading}
      haveRegistered={haveRegistered}
      handleCreate={handleCreate}
    />
  </div>
);
