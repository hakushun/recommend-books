import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useBooks } from '../../hooks/useBooks';
import { useExternalSearch } from '../../hooks/useExternalSearch';
import { useModal } from '../../hooks/useModal';
import { formatAuthors } from '../../libs/utils/formatAuthors';
import { Modal } from '../Modal';
import { RegisterButton } from '../RegisterButton';
import styles from './index.module.scss';

export const BookRegisterDialog: React.VFC = () => {
  const { registerDialog, handleToggle } = useModal();
  const { searchResult, handleReset } = useExternalSearch();
  const { haveRegistered } = useBooks();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      handleToggle({ registerDialog: false });
      handleReset();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <div className={styles.announce}>
              <div className={styles.content}>すでに登録済みです</div>
              <Link href={`/book/${searchResult.id}`}>
                <a className={styles.link}>
                  {searchResult.volumeInfo.title}のページへ
                </a>
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
