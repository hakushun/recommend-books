import React from 'react';
import { useComment } from '../../hooks/useComment';
import { CommentItem } from '../../redux/modules/comment';
import styles from './index.module.scss';

type Props = {
  comment: CommentItem;
};
export const EditCommentButton: React.VFC<Props> = ({ comment }) => {
  const { handleEdit } = useComment();

  return (
    <button
      type="button"
      aria-label="編集"
      onClick={() => handleEdit(comment)}
      className={styles.edit}></button>
  );
};
