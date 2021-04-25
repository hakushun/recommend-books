import React from 'react';
import { useSort } from '../../../hooks/useSort';
import { SortSelectBox as Presentational } from './SortSelectBox';

export const SortSelectBox: React.VFC = () => {
  const { sorkKey, handleSort } = useSort();

  return <Presentational sorkKey={sorkKey} handleSort={handleSort} />;
};
