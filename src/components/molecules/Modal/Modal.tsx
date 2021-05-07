import React from 'react';
import { TogglePayload } from '../../../redux/modules/modal';
import { CloseButton } from '../../atoms/CloseButton';
import { Overlay } from '../../atoms/Overlay';
import styles from './index.module.scss';

export type Props = {
  context: string;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  handleToggle: (_payload: TogglePayload) => void;
  handleKeydown: (_e: React.KeyboardEvent<HTMLElement>) => void;
};
export const Modal: React.FC<Props> = ({
  context,
  modalRef,
  handleToggle,
  handleKeydown,
  children,
}) => (
  <Overlay>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
    <div
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      ref={modalRef}
      className={styles.root}
      onKeyDown={(e) => handleKeydown(e)}>
      {children}
      <CloseButton context={context} handleToggle={handleToggle} />
    </div>
  </Overlay>
);
