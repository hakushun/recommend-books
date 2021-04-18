import Link from 'next/Link';
import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import { useExternalSearch } from '../../hooks/useExternalSearch';
import { useModal } from '../../hooks/useModal';
import { formatAuthors } from '../../libs/utils/formatAuthors';
import { Modal } from '../Modal';
import { RegisterButton } from '../RegisterButton';
import styles from './index.module.scss';

export const BookRegisterDialog: React.VFC = () => {
  const { registerDialog } = useModal();
  const { searchResult } = useExternalSearch();
  const { haveRegistered } = useBooks();

  return (
    <>
      {registerDialog && (
        <Modal context="registerDialog">
          <div className={styles.header}>
            <span className={styles.title}>
              {searchResult.volumeInfo.title}
            </span>
            <span className={styles.author}>
              {formatAuthors(searchResult.volumeInfo.authors)}
            </span>
          </div>
          {haveRegistered ? (
            <div>
              <div>すでに登録済みです。</div>
              <Link href={`/book/${searchResult.id}`}>
                <a>{searchResult.volumeInfo.title}のページへ</a>
              </Link>
            </div>
          ) : (
            <div className={styles.action}>
              <RegisterButton type="read" item={searchResult} />
              <RegisterButton type="want" item={searchResult} />
            </div>
          )}
        </Modal>
      )}
    </>
  );
};
