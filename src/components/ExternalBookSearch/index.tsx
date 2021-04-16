import React from 'react';
import styles from './index.module.scss';

type Props = {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  onSubmit: (_e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};
export const ExternalBookSearch: React.VFC<Props> = ({
  inputRef,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className={styles.root}>
    <div role="search" className={styles.wrapper}>
      <input
        type="text"
        name="search_book"
        id="search_book"
        placeholder="読んだ/読みたい本を検索"
        autoComplete="off"
        ref={inputRef}
        className={styles.input}
      />
    </div>
    <button type="submit" className={styles.btn}>
      検索
    </button>
  </form>
);
