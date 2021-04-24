import React from 'react';
import { useComments } from '../../hooks/useComments';
import { CommentItem } from '../CommentItem';
import { Loading } from '../Loading';

type Props = {
  bookId: string;
};
export const CommentList: React.VFC<Props> = ({ bookId }) => {
  const { comments, isLoading } = useComments(bookId);

  if (isLoading) return <Loading />;

  if (comments.length === 0) return <div>コメントはありません</div>;

  return (
    <ul>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} bookId={bookId} />
      ))}
    </ul>
  );
};
