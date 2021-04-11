import React from 'react';
import { SearchResultItem } from '../SearchResultItem';
import styles from './index.module.scss';

export const SearchResultList: React.VFC = () => (
  <ul className={styles.root}>
    <SearchResultItem />
    <SearchResultItem />
    <SearchResultItem />
    <SearchResultItem />
  </ul>
);
