import React from 'react';
import { SearchResultList } from '../SearchResultList';
import styles from './index.module.scss';

export const SearchResult: React.VFC = () => (
  <div className={styles.root}>
    <h3 className={styles.title}>検索結果</h3>
    <SearchResultList />
  </div>
);
