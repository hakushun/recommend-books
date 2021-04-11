import React from 'react';
import styles from './index.module.scss';

export const InternalBookSearch: React.VFC = () => (
  <div className={styles.root}>
    <div role="search" className={styles.wrapper}>
      <input
        type="text"
        name="search_book"
        id="search_book"
        placeholder="みんなが読んだ/読みたい本を検索"
        autoComplete="off"
        className={styles.input}
      />
    </div>
  </div>
);
