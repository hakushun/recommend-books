import React from 'react';
import styles from './index.module.scss';

export type Props = {
  checked: boolean;
  handleChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const SwitchLayout: React.VFC<Props> = ({ checked, handleChange }) => (
  <div className={styles.root}>
    <input
      type="checkbox"
      id="mycheck"
      className={styles.input}
      onChange={handleChange}
      checked={checked}
    />
    <label className={styles.check} htmlFor="mycheck">
      <div className={styles.switch}></div>
    </label>
  </div>
);
