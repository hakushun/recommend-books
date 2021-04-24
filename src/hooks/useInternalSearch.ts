import { useDispatch, useSelector } from 'react-redux';
import { search, selectSearch } from '../redux/modules/search';

type CustomHooks = () => {
  searchword: string;
  handleSearch: (_e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const useInternalSearch: CustomHooks = () => {
  const dispatch = useDispatch();
  const searchword = useSelector(selectSearch);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(search({ searchword: e.target.value }));
  };

  return { searchword, handleSearch };
};
