import React from 'react';
import { useExternalSearch } from '../../hooks/useExternalSearch';
import { ExternalBookSearch } from '../ExternalBookSearch';
import { SearchResult } from '../SearchResult';
import styles from './index.module.scss';

export const Books: React.VFC = () => {
  const {
    inputRef,
    searchResults,
    pageCount,
    handleSubmit,
    handlePagenation,
  } = useExternalSearch();

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>読んだ/読みたい本の登録</h2>
      <ExternalBookSearch inputRef={inputRef} onSubmit={handleSubmit} />
      <SearchResult
        pageCount={pageCount}
        results={searchResults}
        handlePagenation={handlePagenation}
      />
    </section>
  );
};
