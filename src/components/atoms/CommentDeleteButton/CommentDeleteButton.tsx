import React from 'react';
import { CommentItem, RemovePayload } from '../../../redux/modules/comment';
import styles from './index.module.scss';

export type Props = {
  bookId: string;
  comment: CommentItem;
  handleDelete: (_: RemovePayload) => void;
};
export const CommentDeleteButton: React.VFC<Props> = ({
  bookId,
  comment,
  handleDelete,
}) => (
  <button
    type="button"
    aria-label="削除"
    onClick={() => handleDelete({ id: comment.id, bookId })}
    className={styles.delete}></button>
);
