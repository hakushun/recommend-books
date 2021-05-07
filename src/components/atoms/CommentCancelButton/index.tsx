import React from 'react';
import styles from './index.module.scss';

export type Props = {
  isLoading: boolean;
  handleCancel: () => void;
};
export const CommentCancelButton: React.VFC<Props> = ({
  isLoading,
  handleCancel,
}) => (
  <button
    type="button"
    disabled={isLoading}
    onClick={handleCancel}
    className={styles.cancel}>
    キャンセル
  </button>
);
