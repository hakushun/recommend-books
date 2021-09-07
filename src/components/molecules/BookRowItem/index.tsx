import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';
import { BookItem, Type } from '../../../redux/modules/book';
import { formatAuthors } from '../../../libs/utils/formatAuthors';
import { BookReactionButton } from '../../atoms/BookReactionButton';
import { Userdata } from '../../../redux/modules/user';

export type Props = {
  user: Userdata;
  isLoading: boolean;
  book: BookItem;
  handleReact: (_item: BookItem, _type: Type) => void;
};
export const BookRowItem: React.VFC<Props> = ({
  book,
  user,
  isLoading,
  handleReact,
}) => (
  <li className={styles.root}>
    <div className={styles.container}>
      <div className={styles.contents}>
        <Link href={`/book/${book.id}`}>
          <a className={styles.link}>
            <div className={styles.linkInner}>
              <div className={styles.header}>
                <h3 className={styles.title}>{book.title}</h3>
                <span className={styles.author}>
                  {formatAuthors(book.authors)}
                </span>
              </div>
              <div className={styles.info}>
                <span>
                  <strong>{book.usersHaveRead?.length ?? 0}</strong>
                  人に読まれてます
                </span>
                <span>
                  <strong>{book.usersWantRead?.length ?? 0}</strong>
                  人が気になってます
                </span>
                <span>
                  <strong>{book.usersStocked?.length ?? 0}</strong>
                  人が積んでます
                </span>
              </div>
            </div>
            <div className={styles.linkInner}>
              <img
                className={styles.img}
                src={book.imageUrl || '/img/no-images.png'}
                width="80"
                height="120"
                alt=""
              />
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.buttons}>
        <div className={styles.usersHaveRead}>
          <BookReactionButton
            user={user}
            type="read"
            item={book}
            isLoading={isLoading}
            handleReact={handleReact}
          />
          <span className={styles.people}>
            <strong>{book.usersHaveRead?.length ?? 0}</strong>人
          </span>
        </div>
        <div className={styles.usersWantRead}>
          <BookReactionButton
            user={user}
            type="want"
            item={book}
            isLoading={isLoading}
            handleReact={handleReact}
          />
          <span className={styles.people}>
            <strong>{book.usersWantRead?.length ?? 0}</strong>人
          </span>
        </div>
        <div className={styles.usersStocked}>
          <BookReactionButton
            user={user}
            type="stock"
            item={book}
            isLoading={isLoading}
            handleReact={handleReact}
          />
          <span className={styles.people}>
            <strong>{book.usersStocked?.length ?? 0}</strong>人
          </span>
        </div>
      </div>
    </div>
  </li>
);
