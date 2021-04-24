import React from 'react';
import { useExternalSearch } from '../../hooks/useExternalSearch';
import { ExternalBookSearch } from '../ExternalBookSearch';
import { SearchResult } from '../SearchResult';
import styles from './index.module.scss';

export const Books: React.VFC = () => {
  const {
    titleRef,
    inputRef,
    isLoading,
    searchResult,
    searchResults,
    pageCount,
    handleSubmit,
    handlePagenation,
    handleReset,
  } = useExternalSearch();

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>読んだ/読みたい本の登録</h2>
      <ExternalBookSearch inputRef={inputRef} handleSubmit={handleSubmit} />
      <SearchResult
        titleRef={titleRef}
        isLoading={isLoading}
        searchResults={searchResults}
        pageCount={pageCount}
        searchResult={searchResult}
        handlePagenation={handlePagenation}
        handleReset={handleReset}
      />
    </section>
  );
};
