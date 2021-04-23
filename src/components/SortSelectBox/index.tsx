import React from 'react';
import { useSort } from '../../hooks/useSort';
import styles from './index.module.scss';

export const SortSelectBox: React.VFC = () => {
  const { sorkKey, handleSort } = useSort();

  return (
    <div className={styles.root}>
      <select name="sord" defaultValue={sorkKey} onChange={handleSort}>
        <option value="new">新着順</option>
        <option value="read">読んだ人が多い順</option>
        <option value="want">読みたい人が多い順</option>
      </select>
    </div>
  );
};
