import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search, selectSearch } from '../redux/modules/search';

export const useInternalSearch = () => {
  const dispatch = useDispatch();
  const searchword = useSelector(selectSearch);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(search({ searchword: e.target.value }));
    },
    [dispatch],
  );

  return { searchword, handleSearch };
};
