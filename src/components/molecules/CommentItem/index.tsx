import React from 'react';
import { parseDate } from '../../../libs/dayjs';
import {
  CommentItem as typeComment,
  RemovePayload,
} from '../../../redux/modules/comment';
import { DeleteCommentButton } from '../../atoms/CommentButton/DeleteCommentButton';
import { EditCommentButton } from '../../atoms/CommentButton/EditCommentButton';
import styles from './index.module.scss';

type Props = {
  bookId: string;
  comment: typeComment;
  handleEdit: (_item: typeComment) => void;
  handleDelete: (_: RemovePayload) => void;
};
export const CommentItem: React.VFC<Props> = ({
  bookId,
  comment,
  handleEdit,
  handleDelete,
}) => (
  <li className={styles.item}>
    <div className={styles.header}>
      <div>
        <div className={styles.name}>{comment.author?.name}</div>
        <div className={styles.date}>{parseDate(comment.createdAt)}</div>
      </div>
      <div className={styles.action}>
        <EditCommentButton comment={comment} handleEdit={handleEdit} />
        <DeleteCommentButton
          id={comment.id}
          bookId={bookId}
          handleDelete={handleDelete}
        />
      </div>
    </div>
    <div className={styles.comment}>{comment.content}</div>
  </li>
);
