import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import { Type } from '../../redux/modules/book';
import { SearchResult } from '../../redux/modules/searchResult';
import { BookRegisterDialog as Presentational } from './BookRegisterDialog';

type Props = {
  searchResult: SearchResult;
  isLoading: boolean;
  handleCreate: (_item: SearchResult, _type: Type) => void;
};
export const BookRegisterDialog: React.VFC<Props> = ({
  searchResult,
  isLoading,
  handleCreate,
}) => {
  const { haveRegistered } = useBooks();

  return (
    <Presentational
      searchResult={searchResult}
      isLoading={isLoading}
      haveRegistered={haveRegistered}
      handleCreate={handleCreate}
    />
  );
};
