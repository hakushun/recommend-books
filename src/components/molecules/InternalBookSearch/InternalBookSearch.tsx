import React from 'react';
import styles from './index.module.scss';

type Props = {
  searchword: string;
  handleSearch: (_e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const InternalBookSearch: React.VFC<Props> = ({
  searchword,
  handleSearch,
}) => (
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
