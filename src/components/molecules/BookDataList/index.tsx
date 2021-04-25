import React from 'react';
import { BookItem } from '../../../redux/modules/book';
import styles from './index.module.scss';

type Props = {
  book: BookItem;
};
export const BookDataList: React.VFC<Props> = ({ book }) => (
  <dl className={styles.root}>
    <div className={styles.item}>
      <dt>Title</dt>
      <dd>{book.title}</dd>
    </div>
    <div className={styles.item}>
      <dt>Author</dt>
      <dd>{book.authors.join(', ')}</dd>
    </div>
    <div className={styles.item}>
      <dt>Description</dt>
      <dd>{book.description}</dd>
    </div>
    <div className={styles.item}>
      <dt>Registered By</dt>
      <dd>{book.registeredBy?.name}</dd>
    </div>
    <div className={styles.item}>
      <dt>読んだ人</dt>
      <dd>{book.usersHaveRead.map((user) => user?.name).join(', ')}</dd>
    </div>
    <div className={styles.item}>
      <dt>読みたい人</dt>
      <dd>{book.usersWantRead.map((user) => user?.name).join(', ')}</dd>
    </div>
  </dl>
);
