import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useBooks } from '../../hooks/useBooks';
import { useModal } from '../../hooks/useModal';
import { formatAuthors } from '../../libs/utils/formatAuthors';
import { Type } from '../../redux/modules/book';
import { SearchResult } from '../../redux/modules/searchResult';
import { CreateBookButton } from '../BookButton/CreateBookButton';
import { Modal } from '../Modal';
import styles from './index.module.scss';

type Props = {
  searchResult: SearchResult;
  isLoading: boolean;
  handleCreate: (_item: SearchResult, _type: Type) => void;
  handleReset: () => void;
};
export const BookRegisterDialog: React.VFC<Props> = ({
  searchResult,
  isLoading,
  handleCreate,
  handleReset,
}) => {
  const { registerDialog, handleToggle } = useModal();
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
              <CreateBookButton
                type="read"
                item={searchResult}
                isLoading={isLoading}
                handleCreate={handleCreate}
              />
              <CreateBookButton
                type="want"
                item={searchResult}
                isLoading={isLoading}
                handleCreate={handleCreate}
              />
            </div>
          )}
        </Modal>
      )}
    </>
  );
};
