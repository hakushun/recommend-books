import React from 'react';
import { useModal } from '../../hooks/useModal';
import { Modal as Presentational } from './Modal';

type Props = {
  context: string;
};
export const Modal: React.FC<Props> = ({ context, children }) => {
  const { isOpened, handleToggle } = useModal(context);

  return (
    <>
      {isOpened && (
        <Presentational context={context} handleToggle={handleToggle}>
          {children}
        </Presentational>
      )}
    </>
  );
};
