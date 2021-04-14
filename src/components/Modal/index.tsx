import React from 'react';
import { CloseButton } from '../CloseButton';
import { Overlay } from '../Overlay';
import styles from './index.module.scss';

type Props = {
  context: string;
};
export const Modal: React.FC<Props> = ({ context, children }) => (
  <Overlay>
    <div role="dialog" aria-modal="true" className={styles.root}>
      {children}
      <CloseButton context={context} />
    </div>
  </Overlay>
);
