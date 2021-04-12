import React from 'react';
import { ExternalBookSearch } from '../ExternalBookSearch';
import { SearchResult } from '../SearchResult';
import styles from './index.module.scss';

export const Books: React.VFC = () => (
  <section className={styles.root}>
    <h2 className={styles.title}>読んだ/読みたい本の登録</h2>
    <ExternalBookSearch />
    <SearchResult />
  </section>
);
