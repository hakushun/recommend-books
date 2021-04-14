import React from 'react';
import { useModal } from '../../hooks/useModal';
import styles from './index.module.scss';

type Props = {
  context: string;
};
export const CloseButton: React.VFC<Props> = ({ context }) => {
  const { handleToggle } = useModal();
  return (
    <button
      type="button"
      aria-label="閉じる"
      className={styles.root}
      onClick={() => handleToggle({ [context]: false })}></button>
  );
};
