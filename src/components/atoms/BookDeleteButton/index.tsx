import React from 'react';
import { useUser } from '../../../hooks/useUser';
import { BookItem } from '../../../redux/modules/book';
import { BookDeleteButton as Presentaional } from './BookDeleteButton';

type Props = {
  item: BookItem;
  isLoading: boolean;
  handleDelete: (_item: BookItem) => void;
};
export const BookDeleteButton: React.VFC<Props> = ({
  item,
  isLoading,
  handleDelete,
}) => {
  const { user } = useUser();

  // 作成者以外には表示しない
  if (user?.id !== item.registeredBy?.id) return null;

  return (
    <Presentaional
      item={item}
      isLoading={isLoading}
      handleDelete={handleDelete}
    />
  );
};
