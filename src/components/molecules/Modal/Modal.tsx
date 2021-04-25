import React from 'react';
import { TogglePayload } from '../../../redux/modules/modal';
import { CloseButton } from '../../atoms/CloseButton';
import { Overlay } from '../../atoms/Overlay';
import styles from './index.module.scss';

type Props = {
  context: string;
  handleToggle: (_payload: TogglePayload) => void;
};
export const Modal: React.FC<Props> = ({ context, handleToggle, children }) => (
  <Overlay>
    <div role="dialog" aria-modal="true" className={styles.root}>
      {children}
      <CloseButton context={context} handleToggle={handleToggle} />
    </div>
  </Overlay>
);
