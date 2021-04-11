import React from 'react';
import { BookItem } from '../BookItem';
import styles from './index.module.scss';

export const BookList: React.VFC = () => (
  <ul className={styles.root}>
    <BookItem />
    <BookItem />
    <BookItem />
    <BookItem />
    <BookItem />
    <BookItem />
    <BookItem />
    <BookItem />
    <BookItem />
    <BookItem />
  </ul>
);
