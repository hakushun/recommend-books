import React from 'react';
import { Type } from '../../../redux/modules/book';
import { SearchResult } from '../../../redux/modules/searchResult';
import { BookRegisterModal as Presentational } from './BookRegisterModal';

type Props = {
  searchResult: SearchResult;
  isLoading: boolean;
  haveRegistered: boolean;
  handleCreate: (_item: SearchResult, _type: Type) => void;
};
export const BookRegisterModal: React.VFC<Props> = ({
  searchResult,
  isLoading,
  haveRegistered,
  handleCreate,
}) => (
  <Presentational
    searchResult={searchResult}
    isLoading={isLoading}
    haveRegistered={haveRegistered}
    handleCreate={handleCreate}
  />
);
