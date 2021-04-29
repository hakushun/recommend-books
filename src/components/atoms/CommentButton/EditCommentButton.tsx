import React from 'react';
import { useUser } from '../../../hooks/useUser';
import { CommentItem } from '../../../redux/modules/comment';
import styles from './index.module.scss';

type Props = {
  comment: CommentItem;
  handleEdit: (_item: CommentItem) => void;
};
export const EditCommentButton: React.VFC<Props> = ({
  comment,
  handleEdit,
}) => {
  const { user } = useUser();

  // 作成者以外には表示しない
  if (user?.id !== comment.author?.id) return null;

  return (
    <button
      type="button"
      aria-label="編集"
      onClick={() => handleEdit(comment)}
      className={styles.edit}></button>
  );
};
