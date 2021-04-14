import { MutableRefObject, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SearchResult,
  select,
  selectSearchResult,
} from '../redux/modules/searchResult';
import { search, selectSearchResults } from '../redux/modules/searchResults';

type CustomHooks = () => {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  searchResult: SearchResult;
  searchResults: SearchResult[];
  handleSubmit: (_e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleSelect: (_result: SearchResult) => void;
};

export const useExternalSearch: CustomHooks = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector(selectSearchResult);
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

  const handleSelect = (result: SearchResult) => {
    dispatch(select(result));
  };

  return { inputRef, searchResult, searchResults, handleSubmit, handleSelect };
};
