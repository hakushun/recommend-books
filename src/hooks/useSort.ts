import { useDispatch, useSelector } from 'react-redux';
import { sort, selectSortKey, SortKey } from '../redux/modules/sort';

type CustomHooks = () => {
  sortKey: SortKey;
  handleSort: (_e: React.ChangeEvent<HTMLSelectElement>) => void;
};
export const useSort: CustomHooks = () => {
  const dispatch = useDispatch();
  const sortKey = useSelector(selectSortKey);

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const key = e.target.value as SortKey;
    dispatch(sort({ key }));
  };

  return { sortKey, handleSort };
};
