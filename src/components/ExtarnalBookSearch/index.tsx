import React from 'react';
import styles from './index.module.scss';

export const ExtarnalBookSearch: React.VFC = () => (
  <form className={styles.root}>
    <div role="search" className={styles.wrapper}>
      <input
        type="text"
        name="search_book"
        id="search_book"
        placeholder="読んだ/読みたい本を検索"
        autoComplete="off"
        className={styles.input}
      />
    </div>
    <button type="submit" className={styles.btn}>
      検索
    </button>
  </form>
);
