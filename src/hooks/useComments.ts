import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInstance } from '../libs/firestore/getInstance';
import { CommentItem } from '../redux/modules/comment';
import {
  selectComments,
  selectIsLoading,
  subscribe,
} from '../redux/modules/comments';

type CustomHooks = (
  _bookId: string,
) => {
  comments: CommentItem[];
  isLoading: boolean;
};
export const useComments: CustomHooks = (bookId: string) => {
  const db = getInstance();
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!bookId) return;

    db.collection('books')
      .doc(bookId)
      .collection('comments')
      .onSnapshot((snapshot) => {
        const items: CommentItem[] = [];
        snapshot.forEach((doc) => items.push(doc.data() as CommentItem));
        dispatch(subscribe(items));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId]);

  return { comments, isLoading };
};
