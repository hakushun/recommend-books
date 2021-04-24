import { MutableRefObject, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CommentItem,
  create,
  remove,
  RemovePayload,
  selectComment,
  selectIsLoading,
} from '../redux/modules/comment';
import { selectUser } from '../redux/modules/user';

type CustomHooks = () => {
  textAreaRef: MutableRefObject<HTMLTextAreaElement | null>;
  comment: CommentItem;
  isLoading: boolean;
  handleCreate: (_bookId: string) => void;
  handleEdit: (_item: CommentItem) => void;
  handleDelete: (_: RemovePayload) => void;
};
export const useComment: CustomHooks = () => {
  const dispatch = useDispatch();
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const user = useSelector(selectUser);
  const comment = useSelector(selectComment);
  const isLoading = useSelector(selectIsLoading);

  const handleCreate = (bookId: string) => {
    if (!user) return;
    if (!textAreaRef.current || textAreaRef.current.value.trim() === '') {
      textAreaRef.current?.focus();
      return;
    }
    dispatch(
      create({ bookId, content: textAreaRef.current.value, author: user }),
    );
    textAreaRef.current.value = '';
  };

  // TODO: refがうまく取れない
  const handleEdit = (item: CommentItem) => {
    if (!textAreaRef || !textAreaRef.current) return;
    textAreaRef.current.value = item.content;
  };

  const handleDelete = ({ id, bookId }: RemovePayload) => {
    if (!user) return;
    dispatch(remove({ id, bookId }));
  };

  return {
    textAreaRef,
    comment,
    isLoading,
    handleCreate,
    handleEdit,
    handleDelete,
  };
};
