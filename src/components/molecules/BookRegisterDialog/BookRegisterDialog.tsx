import Link from 'next/link';
import React from 'react';
import { formatAuthors } from '../../../libs/utils/formatAuthors';
import { Type } from '../../../redux/modules/book';
import { SearchResult } from '../../../redux/modules/searchResult';
import { CreateBookButton } from '../../atoms/BookButton/CreateBookButton';
import { Modal } from '../Modal';
import styles from './index.module.scss';

type Props = {
  searchResult: SearchResult;
  isLoading: boolean;
  haveRegistered: boolean;
  handleCreate: (_item: SearchResult, _type: Type) => void;
};
export const BookRegisterDialog: React.VFC<Props> = ({
  searchResult,
  isLoading,
  haveRegistered,
  handleCreate,
}) => (
  <Modal context="registerDialog">
    <div className={styles.header}>
      <span className={styles.title}>{searchResult.volumeInfo.title}</span>
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
);
