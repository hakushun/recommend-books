import React from 'react';
import { RemovePayload } from '../../../redux/modules/comment';
import styles from './index.module.scss';

type Props = {
  bookId: string;
  id: string;
  handleDelete: (_: RemovePayload) => void;
};
export const DeleteCommentButton: React.VFC<Props> = ({
  bookId,
  id,
  handleDelete,
}) => (
  <button
    type="button"
    aria-label="削除"
    onClick={() => handleDelete({ id, bookId })}
    className={styles.delete}></button>
);
