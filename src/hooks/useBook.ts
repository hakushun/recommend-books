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
  const book = useSelector(selectBook);
  const isLoading = useSelector(selectIsLoading);

  const handleCreate = (item: SearchResult, type: Type) => {
    const user = { id: '', name: '', email: '' };
    dispatch(create({ item, user, type }));
  };

  const handleReact = (item: BookItem, type: Type) => {
    const user = { id: '', name: '', email: '' };
    dispatch(react({ item, user, type }));
  };

  const handleDelete = (item: BookItem) => {
    dispatch(remove(item));
    router.push('/');
  };

  useEffect(() => {
    id && dispatch(fetch(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { book, isLoading, handleCreate, handleReact, handleDelete };
};
