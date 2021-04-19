import React, { useEffect } from 'react';
import { CloseButton } from '../CloseButton';
import { Overlay } from '../Overlay';
import styles from './index.module.scss';

type Props = {
  context: string;
};
export const Modal: React.FC<Props> = ({ context, children }) => {
  useEffect(() => {
    document.getElementById('app')?.setAttribute('aria-hidden', 'true');

    return () => {
      document.getElementById('app')?.removeAttribute('aria-hidden');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Overlay>
      <div role="dialog" aria-modal="true" className={styles.root}>
        {children}
        <CloseButton context={context} />
      </div>
    </Overlay>
  );
};
