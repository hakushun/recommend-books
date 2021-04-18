import React, { MutableRefObject, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SearchResult,
  select,
  selectSearchResult,
} from '../redux/modules/searchResult';
import {
  search,
  selectMaxResults,
  selectSearchResults,
  selectTotalItems,
} from '../redux/modules/searchResults';

type CustomHooks = () => {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  searchResult: SearchResult;
  searchResults: SearchResult[];
  pageCount: number;
  handleSubmit: (_e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleSelect: (_result: SearchResult) => void;
  handlePagenation: (_selected: { selected: number }) => void;
};

export const useExternalSearch: CustomHooks = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector(selectSearchResult);
  const searchResults = useSelector(selectSearchResults);
  const totalItems = useSelector(selectTotalItems);
  const maxResults = useSelector(selectMaxResults);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const pageCount = Math.ceil(totalItems / maxResults);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!inputRef.current || inputRef.current.value.trim() === '') {
        inputRef.current?.focus();
        return;
      }
      dispatch(
        search({
          keyword: inputRef.current.value,
          maxResults,
          startIndex: 0,
        }),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const handlePagenation = ({ selected }: { selected: number }) => {
    if (!inputRef.current || inputRef.current.value.trim() === '') {
      inputRef.current?.focus();
      return;
    }
    dispatch(
      search({
        keyword: inputRef.current.value,
        maxResults,
        startIndex: selected * maxResults,
      }),
    );
  };

  const handleSelect = (result: SearchResult) => {
    dispatch(select(result));
  };

  return {
    inputRef,
    searchResult,
    searchResults,
    pageCount,
    handleSubmit,
    handleSelect,
    handlePagenation,
  };
};
