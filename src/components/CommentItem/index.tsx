import React from 'react';
import { parseDate } from '../../libs/dayjs';
import { CommentItem as typeComment } from '../../redux/modules/comment';
import { DeleteCommentButton } from '../CommentButton/DeleteCommentButton';
import { EditCommentButton } from '../CommentButton/EditCommentButton';
import styles from './index.module.scss';

type Props = {
  bookId: string;
  comment: typeComment;
};
export const CommentItem: React.VFC<Props> = ({ bookId, comment }) => (
  <li className={styles.item}>
    <div className={styles.header}>
      <div>
        <div className={styles.name}>{comment.author?.name}</div>
        <div className={styles.date}>{parseDate(comment.createdAt)}</div>
      </div>
      <div className={styles.action}>
        <EditCommentButton comment={comment} />
        <DeleteCommentButton id={comment.id} bookId={bookId} />
      </div>
    </div>
    <div className={styles.comment}>{comment.content}</div>
  </li>
);
