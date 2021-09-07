import { useDispatch, useSelector } from 'react-redux';
import { selectLayout, switchLayout, Layout } from '../redux/modules/display';

type CustomHooks = () => {
  checked: boolean;
  layout: Layout;
  handleChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useDisplay: CustomHooks = () => {
  const dispatch = useDispatch();
  const layout = useSelector(selectLayout);
  const checked = layout === 'card';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(switchLayout(e.target.checked));
  };

  return { layout, checked, handleChange };
};
