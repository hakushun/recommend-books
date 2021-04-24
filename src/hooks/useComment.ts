import { MutableRefObject, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cancel,
  CommentItem,
  create,
  edit,
  remove,
  RemovePayload,
  selectComment,
  selectIsLoading,
  update,
  UpdatePayload,
} from '../redux/modules/comment';
import { selectUser } from '../redux/modules/user';

type CustomHooks = () => {
  textAreaRef: MutableRefObject<HTMLTextAreaElement | null>;
  comment: CommentItem;
  isLoading: boolean;
  handleCreate: (_bookId: string) => void;
  handleEdit: (_item: CommentItem) => void;
  handleUpdate: (_: UpdatePayload) => void;
  handleDelete: (_: RemovePayload) => void;
  handleCancel: () => void;
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

  const handleEdit = (item: CommentItem) => {
    if (!textAreaRef || !textAreaRef.current) return;
    dispatch(edit({ item }));
    textAreaRef.current.value = item.content;
  };

  const handleUpdate = ({ bookId, item }: UpdatePayload) => {
    if (!user) return;
    if (!textAreaRef.current || textAreaRef.current.value.trim() === '') {
      textAreaRef.current?.focus();
      return;
    }
    const newComment = { ...item, content: textAreaRef.current.value };
    dispatch(update({ bookId, item: newComment }));
    textAreaRef.current.value = '';
  };

  const handleDelete = ({ id, bookId }: RemovePayload) => {
    if (!user) return;
    dispatch(remove({ id, bookId }));
  };

  const handleCancel = () => {
    dispatch(cancel());
    if (!textAreaRef || !textAreaRef.current) return;
    textAreaRef.current.value = '';
  };

  return {
    textAreaRef,
    comment,
    isLoading,
    handleCreate,
    handleEdit,
    handleUpdate,
    handleDelete,
    handleCancel,
  };
};
