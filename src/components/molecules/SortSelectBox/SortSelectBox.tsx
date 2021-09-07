import React from 'react';
import { SortKey } from '../../../redux/modules/sort';
import styles from './index.module.scss';

export type Props = {
  sortKey: SortKey;
  handleSort: (_e: React.ChangeEvent<HTMLSelectElement>) => void;
};
export const SortSelectBox: React.VFC<Props> = ({ sortKey, handleSort }) => (
  <div className={styles.root}>
    <select
      defaultValue={sortKey}
      onChange={handleSort}
      className={styles.select}>
      <option value="new">新着順</option>
      <option value="read">読んだ人が多い順</option>
      <option value="want">読みたい人が多い順</option>
      <option value="stock">積んでる人が多い順</option>
    </select>
  </div>
);
