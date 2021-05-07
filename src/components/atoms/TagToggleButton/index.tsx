import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';

export type Props = {
  isEditable: boolean;
  handleToggle: (_boolean: boolean) => void;
};
export const TagToggleButton: React.VFC<Props> = ({
  isEditable,
  handleToggle,
}) => (
  <button
    type="button"
    aria-label={
      isEditable ? 'close the form editing tags ' : 'open the form editing tags'
    }
    onClick={() => handleToggle(!isEditable)}
    className={clsx(
      styles.toggle,
      isEditable ? styles.close : styles.open,
    )}></button>
);
