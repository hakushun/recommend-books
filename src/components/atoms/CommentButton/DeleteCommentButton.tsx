import React from 'react';
import { useUser } from '../../../hooks/useUser';
import { CommentItem, RemovePayload } from '../../../redux/modules/comment';
import styles from './index.module.scss';

type Props = {
  bookId: string;
  comment: CommentItem;
  handleDelete: (_: RemovePayload) => void;
};
export const DeleteCommentButton: React.VFC<Props> = ({
  bookId,
  comment,
  handleDelete,
}) => {
  const { user } = useUser();

  // 作成者以外には表示しない
  if (user?.id !== comment.author?.id) return null;

  return (
    <button
      type="button"
      aria-label="削除"
      onClick={() => handleDelete({ id: comment.id, bookId })}
      className={styles.delete}></button>
  );
};
