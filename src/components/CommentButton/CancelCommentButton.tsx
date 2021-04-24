import React from 'react';
import styles from './index.module.scss';

type Props = {
  isLoading: boolean;
  handleCancel: () => void;
};
export const CancelCommentButton: React.VFC<Props> = ({
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
