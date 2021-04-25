import React from 'react';
import { useInternalSearch } from '../../../hooks/useInternalSearch';
import { InternalBookSearch as Presentational } from './InternalBookSearch';

export const InternalBookSearch: React.VFC = () => {
  const { searchword, handleSearch } = useInternalSearch();

  return <Presentational searchword={searchword} handleSearch={handleSearch} />;
};
