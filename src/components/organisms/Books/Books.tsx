import React from 'react';
import { Type } from '../../../redux/modules/book';
import { SearchResult as typeSearchResult } from '../../../redux/modules/searchResult';
import { ExternalBookSearch } from '../../molecules/ExternalBookSearch';
import { SearchResult } from '../../molecules/SearchResult';
import styles from './index.module.scss';

type Props = {
  titleRef: React.MutableRefObject<HTMLHeadingElement | null>;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  isLoading: boolean;
  searchResult: typeSearchResult;
  searchResults: typeSearchResult[];
  pageCount: number;
  handleCreate: (_item: typeSearchResult, _type: Type) => void;
  handleSubmit: (_e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handlePagenation: (_selected: { selected: number }) => void;
  handleSelect: (_result: typeSearchResult) => void;
};
export const Books: React.VFC<Props> = ({
  titleRef,
  inputRef,
  isLoading,
  searchResult,
  searchResults,
  pageCount,
  handleCreate,
  handleSubmit,
  handlePagenation,
  handleSelect,
}) => (
  <section className={styles.root}>
    <h2 className={styles.title}>読んだ/読みたい本の登録</h2>
    <ExternalBookSearch inputRef={inputRef} handleSubmit={handleSubmit} />
    <SearchResult
      titleRef={titleRef}
      isLoading={isLoading}
      searchResults={searchResults}
      pageCount={pageCount}
      searchResult={searchResult}
      handleCreate={handleCreate}
      handlePagenation={handlePagenation}
      handleSelect={handleSelect}
    />
  </section>
);
