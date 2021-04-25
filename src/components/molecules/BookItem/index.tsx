import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';
import { BookItem as typeBookItem, Type } from '../../../redux/modules/book';
import { formatAuthors } from '../../../libs/utils/formatAuthors';
import { ReactionBookButton } from '../../atoms/BookButton/ReactionBookButton';

type Props = {
  book: typeBookItem;
  isLoading: boolean;
  handleReact: (_item: typeBookItem, _type: Type) => void;
};
export const BookItem: React.VFC<Props> = ({
  book,
  isLoading,
  handleReact,
}) => (
  <li className={styles.item}>
    <Link href={`/book/${book.id}`}>
      <a className={styles.link}>
        <div className={styles.header}>
          <h3 className={styles.title}>{book.title}</h3>
          <span className={styles.author}>{formatAuthors(book.authors)}</span>
        </div>
        <div className={styles.img}>
          <img
            src={book.imageUrl || '/img/no-image.png'}
            width="100"
            height="150"
            alt="book cover"
          />
        </div>
        <div className={styles.info}>
          <span>
            <strong>{book.usersHaveRead?.length ?? 0}</strong>人に読まれてます
          </span>
          <span>
            <strong>{book.usersWantRead?.length ?? 0}</strong>人が気になってます
          </span>
        </div>
      </a>
    </Link>
    <div className={styles.action}>
      <ReactionBookButton
        type="read"
        item={book}
        isLoading={isLoading}
        handleReact={handleReact}
      />
      <ReactionBookButton
        type="want"
        item={book}
        isLoading={isLoading}
        handleReact={handleReact}
      />
    </div>
  </li>
);
