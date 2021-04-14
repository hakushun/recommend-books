import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';

type Props = {
  shape?: string;
};
export const WantButton: React.VFC<Props> = ({ shape }) => (
  <button
    type="button"
    className={clsx(styles.root, shape === 'round' && styles.round)}>
    読みたい
  </button>
);
