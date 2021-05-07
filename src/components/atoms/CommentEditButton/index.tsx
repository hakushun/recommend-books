import React from 'react';
import { useUser } from '../../../hooks/useUser';
import { CommentItem } from '../../../redux/modules/comment';
import { CommentEditButton as Presentaional } from './CommentEditButton';

type Props = {
  comment: CommentItem;
  handleEdit: (_item: CommentItem) => void;
};
export const CommentEditButton: React.VFC<Props> = ({
  comment,
  handleEdit,
}) => {
  const { user } = useUser();

  // 作成者以外には表示しない
  if (user?.id !== comment.author?.id) return null;

  return <Presentaional comment={comment} handleEdit={handleEdit} />;
};
