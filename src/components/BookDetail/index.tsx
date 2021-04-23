import React from 'react';
import { BookItem } from '../../redux/modules/book';
import { Comments } from '../Comments';
import { DeleteButton } from '../DeleteButton';
import { PreviewLink } from '../PreviewLink';
import { ReactionButton } from '../ReactionButton';
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
          <ReactionButton type="read" item={book} />
          <ReactionButton type="want" item={book} />
          <DeleteButton item={book} />
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
