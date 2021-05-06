import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BookItem,
  create,
  react,
  selectBook,
  selectIsLoading,
  Type,
  remove,
  set,
} from '../redux/modules/book';
import { SearchResult } from '../redux/modules/searchResult';
import { selectUser } from '../redux/modules/user';

type CustomHooks = (
  _initialBook?: BookItem,
) => {
  book: BookItem;
  isLoading: boolean;
  handleCreate: (_item: SearchResult, _type: Type) => void;
  handleReact: (_item: BookItem, _type: Type) => void;
  handleDelete: (_item: BookItem) => void;
};
export const useBook: CustomHooks = (initialBook?: BookItem) => {
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
    // 本を登録した本人と一致しない場合はreturn
    if (user?.id !== item.registeredBy?.id) return;
    dispatch(remove(item));
    router.push('/');
  };

  useEffect(() => {
    initialBook && dispatch(set(initialBook));

    if (router.pathname === '/book/[id]' && !initialBook) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialBook]);
  return { book, isLoading, handleCreate, handleReact, handleDelete };
};
