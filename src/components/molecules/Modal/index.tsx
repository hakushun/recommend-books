import React from 'react';
import { useModal } from '../../../hooks/useModal';
import { Modal as Presentational } from './Modal';

type Props = {
  context: string;
};
export const Modal: React.FC<Props> = ({ context, children }) => {
  const { isOpened, modalRef, handleToggle, handleKeydown } = useModal(context);

  return (
    <>
      {isOpened && (
        <Presentational
          context={context}
          modalRef={modalRef}
          handleToggle={handleToggle}
          handleKeydown={handleKeydown}>
          {children}
        </Presentational>
      )}
    </>
  );
};
