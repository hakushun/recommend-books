import React from 'react';
import styles from './index.module.scss';

export const ReadButton: React.VFC = () => (
  <button type="button" className={styles.root}>
    読んだ
  </button>
);
