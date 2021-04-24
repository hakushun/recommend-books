import React from 'react';
import { BookItem } from '../../redux/modules/book';
import { DeleteBookButton } from '../BookButton/DeleteBookButton';
import { ReactionBookButton } from '../BookButton/ReactionBookButton';
import { Comments } from '../Comments';
import { PreviewLink } from '../PreviewLink';
import styles from './index.module.scss';

type Props = {
  book: BookItem;
};
export const BookDetail: React.VFC<Props> = ({ book }) => (
  <section className={styles.root}>
    <div className={styles.detail}>
      <div>
        <div className={styles.imgWrapper}>
          <img
            src={book.imageUrl || '/img/no-images.png'}
            alt="book cover"
            width="150"
            className={styles.img}
          />
        </div>
        <div className={styles.action}>
          <PreviewLink link={book.previewLink} />
          <ReactionBookButton type="read" item={book} />
          <ReactionBookButton type="want" item={book} />
          <DeleteBookButton item={book} />
        </div>
      </div>
      <dl className={styles.list}>
        <div className={styles.listItem}>
          <dt>Title</dt>
          <dd>{book.title}</dd>
        </div>
        <div className={styles.listItem}>
          <dt>Author</dt>
          <dd>{book.authors.join(', ')}</dd>
        </div>
        <div className={styles.listItem}>
          <dt>Description</dt>
          <dd>{book.description}</dd>
        </div>
        <div className={styles.listItem}>
          <dt>Registered By</dt>
          <dd>{book.registeredBy?.name}</dd>
        </div>
        <div className={styles.listItem}>
          <dt>読んだ人</dt>
          <dd>{book.usersHaveRead.map((user) => user?.name).join(', ')}</dd>
        </div>
        <div className={styles.listItem}>
          <dt>読みたい人</dt>
          <dd>{book.usersWantRead.map((user) => user?.name).join(', ')}</dd>
        </div>
      </dl>
    </div>
    <Comments />
  </section>
);
