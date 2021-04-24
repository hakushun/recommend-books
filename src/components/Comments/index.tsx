import React from 'react';
import { CommentList } from '../CommentList';
import styles from './index.module.scss';

type Props = {
  bookId: string;
};
export const Comments: React.VFC<Props> = ({ bookId }) => (
  <div className={styles.root}>
    <CommentList bookId={bookId} />
  </div>
);
