import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BookItem,
  fetch,
  create,
  react,
  selectBook,
  selectIsLoading,
  Type,
  remove,
} from '../redux/modules/book';
import { SearchResult } from '../redux/modules/searchResult';
import { selectUser } from '../redux/modules/user';

type CustomHooks = (
  _id?: string,
) => {
  book: BookItem;
  isLoading: boolean;
  handleCreate: (_item: SearchResult, _type: Type) => void;
  handleReact: (_item: BookItem, _type: Type) => void;
  handleDelete: (_item: BookItem) => void;
};
export const useBook: CustomHooks = (id?: string) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const book = useSelector(selectBook);
  const isLoading = useSelector(selectIsLoading);

  const handleCreate = (item: SearchResult, type: Type) => {
    if (!user) return;
    dispatch(create({ item, user, type }));
  };

  const handleReact = (item: BookItem, type: Type) => {
    if (!user) return;
    dispatch(react({ item, user, type }));
  };

  const handleDelete = (item: BookItem) => {
    if (user?.id !== item.registeredBy?.id) return;
    dispatch(remove(item));
    router.push('/');
  };

  useEffect(() => {
    id && dispatch(fetch(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { book, isLoading, handleCreate, handleReact, handleDelete };
};
