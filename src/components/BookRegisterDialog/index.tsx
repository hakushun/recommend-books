import React from 'react';
import { useExternalSearch } from '../../hooks/useExternalSearch';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../Modal';
import { ReadButton } from '../ReadButton';
import { WantButton } from '../WantButton';
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
            <ReadButton shape="round" />
            <WantButton shape="round" />
          </div>
        </Modal>
      )}
    </>
  );
};
