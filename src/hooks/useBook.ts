import { useDispatch, useSelector } from 'react-redux';
import {
  BookItem,
  create,
  react,
  selectBook,
  selectIsLoading,
  Type,
} from '../redux/modules/book';
import { SearchResult } from '../redux/modules/searchResult';

type CustomHooks = () => {
  book: BookItem;
  isLoading: boolean;
  handleCreate: (_item: SearchResult, _type: Type) => void;
  handleReact: (_item: BookItem, _type: Type) => void;
};
export const useBook: CustomHooks = () => {
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

  return { book, isLoading, handleCreate, handleReact };
};
