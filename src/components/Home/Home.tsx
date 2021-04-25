import React from 'react';
import { BookList } from '../BookList';
import { InternalBookSearch } from '../InternalBookSearch';
import { SortSelectBox } from '../SortSelectBox';
import styles from './index.module.scss';

export const Home: React.VFC = () => (
  <section className={styles.root}>
    <h2 className={styles.title}>みんなが読んだ/読みたい本</h2>
    <InternalBookSearch />
    <SortSelectBox />
    <BookList />
  </section>
);
