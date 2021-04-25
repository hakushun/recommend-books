import React from 'react';
import { SortKey } from '../../../redux/modules/sort';
import styles from './index.module.scss';

type Props = {
  sorkKey: SortKey;
  handleSort: (_e: React.ChangeEvent<HTMLSelectElement>) => void;
};
export const SortSelectBox: React.VFC<Props> = ({ sorkKey, handleSort }) => (
  <div className={styles.root}>
    <select name="sord" defaultValue={sorkKey} onChange={handleSort}>
      <option value="new">新着順</option>
      <option value="read">読んだ人が多い順</option>
      <option value="want">読みたい人が多い順</option>
    </select>
  </div>
);
