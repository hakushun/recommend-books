import React from 'react';
import { CommentItem, UpdatePayload } from '../../../redux/modules/comment';
import styles from './index.module.scss';

export type Props = {
  bookId: string;
  item: CommentItem;
  isLoading: boolean;
  handleUpdate: (_: UpdatePayload) => void;
};
export const CommentUpdateButton: React.VFC<Props> = ({
  bookId,
  item,
  isLoading,
  handleUpdate,
}) => (
  <button
    type="button"
    disabled={isLoading}
    onClick={() => handleUpdate({ bookId, item })}
    className={styles.update}>
    更新
  </button>
);
