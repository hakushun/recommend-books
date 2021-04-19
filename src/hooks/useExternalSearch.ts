import React, { MutableRefObject, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SearchResult,
  select,
  selectSearchResult,
} from '../redux/modules/searchResult';
import {
  reset,
  search,
  selectIsLoading,
  selectMaxResults,
  selectSearchResults,
  selectTotalItems,
} from '../redux/modules/searchResults';

type CustomHooks = () => {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  titleRef: MutableRefObject<HTMLHeadingElement | null>;
  searchResult: SearchResult;
  searchResults: SearchResult[];
  pageCount: number;
  isLoading: boolean;
  handleSubmit: (_e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleSelect: (_result: SearchResult) => void;
  handlePagenation: (_selected: { selected: number }) => void;
  handleReset: () => void;
};

export const useExternalSearch: CustomHooks = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector(selectSearchResult);
  const searchResults = useSelector(selectSearchResults);
  const totalItems = useSelector(selectTotalItems);
  const maxResults = useSelector(selectMaxResults);
  const isLoading = useSelector(selectIsLoading);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

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
  const handlePagenation = async ({ selected }: { selected: number }) => {
    if (!inputRef.current || inputRef.current.value.trim() === '') {
      inputRef.current?.focus();
      return;
    }
    await dispatch(
      search({
        keyword: inputRef.current.value,
        maxResults,
        startIndex: selected * maxResults,
      }),
    );
    titleRef?.current?.focus();
  };

  const handleSelect = (result: SearchResult) => {
    dispatch(select(result));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return {
    inputRef,
    titleRef,
    searchResult,
    searchResults,
    pageCount,
    isLoading,
    handleSubmit,
    handleSelect,
    handlePagenation,
    handleReset,
  };
};
