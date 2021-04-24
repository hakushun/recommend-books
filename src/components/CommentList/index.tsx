import React from 'react';
import { useComments } from '../../hooks/useComments';
import {
  CommentItem as typeComment,
  RemovePayload,
} from '../../redux/modules/comment';
import { CommentItem } from '../CommentItem';
import { Loading } from '../Loading';

type Props = {
  bookId: string;
  handleEdit: (_item: typeComment) => void;
  handleDelete: (_: RemovePayload) => void;
};
export const CommentList: React.VFC<Props> = ({
  bookId,
  handleEdit,
  handleDelete,
}) => {
  const { comments, isLoading } = useComments(bookId);

  if (isLoading) return <Loading />;

  if (comments.length === 0) return <div>コメントはありません</div>;

  return (
    <ul>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          bookId={bookId}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
