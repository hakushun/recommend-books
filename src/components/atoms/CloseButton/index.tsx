import React from 'react';
import { TogglePayload } from '../../../redux/modules/modal';
import styles from './index.module.scss';

export type Props = {
  context: string;
  handleToggle: (_payload: TogglePayload) => void;
};
export const CloseButton: React.VFC<Props> = ({ context, handleToggle }) => (
  <button
    type="button"
    aria-label="閉じる"
    className={styles.root}
    onClick={() => handleToggle({ [context]: false })}></button>
);
