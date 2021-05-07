import React from 'react';
import { BookItem, Type } from '../../../redux/modules/book';
import { BookDeleteButton } from '../../atoms/BookDeleteButton';
import { BookReactionButton } from '../../atoms/BookReactionButton';
import { Comments } from '../../molecules/Comments';
import { PreviewLink } from '../../atoms/PreviewLink';
import styles from './index.module.scss';
import { BookDataList } from '../../molecules/BookDataList';

export type Props = {
  book: BookItem;
  isLoading: boolean;
  handleReact: (_item: BookItem, _type: Type) => void;
  handleDelete: (_item: BookItem) => void;
};
export const BookDetail: React.VFC<Props> = ({
  book,
  isLoading,
  handleReact,
  handleDelete,
}) => (
  <section className={styles.root}>
    <div className={styles.detail}>
      <div>
        <div className={styles.imgWrapper}>
          <img
            src={book.imageUrl || '/img/no-images.png'}
            alt={book.title}
            width="150"
            className={styles.img}
          />
        </div>
        <div className={styles.action}>
          <PreviewLink link={book.previewLink} />
          <BookReactionButton
            type="read"
            item={book}
            isLoading={isLoading}
            handleReact={handleReact}
          />
          <BookReactionButton
            type="want"
            item={book}
            isLoading={isLoading}
            handleReact={handleReact}
          />
          <BookDeleteButton
            item={book}
            isLoading={isLoading}
            handleDelete={handleDelete}
          />
        </div>
      </div>
      <BookDataList book={book} />
    </div>
    <Comments bookId={book.id} />
  </section>
);
