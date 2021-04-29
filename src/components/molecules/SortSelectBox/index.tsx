import React from 'react';
import { useSort } from '../../../hooks/useSort';
import { SortSelectBox as Presentational } from './SortSelectBox';

export const SortSelectBox: React.VFC = () => {
  const { sortKey, handleSort } = useSort();

  return <Presentational sortKey={sortKey} handleSort={handleSort} />;
};
