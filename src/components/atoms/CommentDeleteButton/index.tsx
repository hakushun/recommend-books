import React from 'react';
import { useUser } from '../../../hooks/useUser';
import { CommentItem, RemovePayload } from '../../../redux/modules/comment';
import { CommentDeleteButton as Presentational } from './CommentDeleteButton';

type Props = {
  bookId: string;
  comment: CommentItem;
  handleDelete: (_: RemovePayload) => void;
};
export const CommentDeleteButton: React.VFC<Props> = ({
  bookId,
  comment,
  handleDelete,
}) => {
  const { user } = useUser();

  // 作成者以外には表示しない
  if (user?.id !== comment.author?.id) return null;

  return (
    <Presentational
      bookId={bookId}
      comment={comment}
      handleDelete={handleDelete}
    />
  );
};
