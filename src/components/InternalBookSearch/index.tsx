import React from 'react';
import { useInternalSearch } from '../../hooks/useInternalSearch';
import styles from './index.module.scss';

export const InternalBookSearch: React.VFC = () => {
  const { searchword, handleSearch } = useInternalSearch();

  return (
    <div className={styles.root}>
      <div role="search" className={styles.wrapper}>
        <input
          type="text"
          name="search_book"
          id="search_book"
          placeholder="みんなが読んだ/読みたい本を検索"
          autoComplete="off"
          value={searchword}
          onChange={handleSearch}
          className={styles.input}
        />
      </div>
    </div>
  );
};
