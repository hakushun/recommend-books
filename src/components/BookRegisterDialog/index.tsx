import React from 'react';
import { useExternalSearch } from '../../hooks/useExternalSearch';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../Modal';
import { RegisterButton } from '../RegisterButton';
import styles from './index.module.scss';

export const BookRegisterDialog: React.VFC = () => {
  const { registerDialog } = useModal();
  const { searchResult } = useExternalSearch();

  return (
    <>
      {registerDialog && (
        <Modal context="registerDialog">
          <div className={styles.header}>
            <span className={styles.title}>
              {searchResult.volumeInfo.title}
            </span>
            <span className={styles.author}>
              {searchResult.volumeInfo.authors}
            </span>
          </div>
          <div className={styles.action}>
            <RegisterButton type="read" item={searchResult} />
            <RegisterButton type="want" item={searchResult} />
          </div>
        </Modal>
      )}
    </>
  );
};
