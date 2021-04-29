import React from 'react';
import { useComments } from '../../../hooks/useComments';
import { CommentItem, RemovePayload } from '../../../redux/modules/comment';
import { CommentList as Presentaitonal } from './CommentList';

type Props = {
  bookId: string;
  handleEdit: (_item: CommentItem) => void;
  handleDelete: (_: RemovePayload) => void;
};
export const CommentList: React.VFC<Props> = ({
  bookId,
  handleEdit,
  handleDelete,
}) => {
  const { comments } = useComments(bookId);

  if (comments.length === 0) return <div>コメントはありません</div>;

  return (
    <Presentaitonal
      comments={comments}
      bookId={bookId}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};
