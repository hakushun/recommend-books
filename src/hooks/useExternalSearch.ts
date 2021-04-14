import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search, selectSearchResults } from '../redux/modules/searchResults';

export const useExternalSearch = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(selectSearchResults);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!inputRef.current?.value) {
        inputRef.current?.focus();
        return;
      }
      dispatch(search(inputRef.current.value));
    },
    [dispatch],
  );

  return { inputRef, searchResults, handleSubmit };
};
