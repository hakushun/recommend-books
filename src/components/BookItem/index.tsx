import Link from 'next/Link';
import React from 'react';
import styles from './index.module.scss';
import { ReactionButton } from '../ReactionButton';
import { BookItem as typeBookItem } from '../../redux/modules/book';
import { formatAuthors } from '../../libs/utils/formatAuthors';

type Props = {
  book: typeBookItem;
};
export const BookItem: React.VFC<Props> = ({ book }) => (
  <li className={styles.item}>
    <Link href={`/book/${book.id}`}>
      <a className={styles.link}>
        <div>
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
      <ReactionButton type="read" item={book} />
      <ReactionButton type="want" item={book} />
    </div>
  </li>
);
