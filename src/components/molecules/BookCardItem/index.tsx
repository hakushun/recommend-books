import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';
import { BookItem, Type } from '../../../redux/modules/book';
import { formatAuthors } from '../../../libs/utils/formatAuthors';
import { BookReactionButton } from '../../atoms/BookReactionButton';
import { Userdata } from '../../../redux/modules/user';

export type Props = {
  user: Userdata;
  book: BookItem;
  isLoading: boolean;
  handleReact: (_item: BookItem, _type: Type) => void;
};
export const BookCardItem: React.VFC<Props> = ({
  user,
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
            src={book.imageUrl || '/img/no-images.png'}
            width="100"
            height="150"
            alt=""
          />
        </div>
        <div className={styles.info}>
          <span>
            <strong>{book.usersHaveRead?.length ?? 0}</strong>人に読まれてます
          </span>
          <span>
            <strong>{book.usersWantRead?.length ?? 0}</strong>人が気になってます
          </span>
          <span>
            <strong>{book.usersStocked?.length ?? 0}</strong>人が積んでます
          </span>
        </div>
      </a>
    </Link>
    <div className={styles.action}>
      <BookReactionButton
        user={user}
        type="read"
        item={book}
        isLoading={isLoading}
        handleReact={handleReact}
      />
      <BookReactionButton
        user={user}
        type="want"
        item={book}
        isLoading={isLoading}
        handleReact={handleReact}
      />
      <BookReactionButton
        user={user}
        type="stock"
        item={book}
        isLoading={isLoading}
        handleReact={handleReact}
      />
    </div>
  </li>
);
