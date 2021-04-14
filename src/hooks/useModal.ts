import { useDispatch, useSelector } from 'react-redux';
import {
  selectRegisterDialog,
  toggle,
  TogglePayload,
} from '../redux/modules/modal';

type Hooks = () => {
  registerDialog: boolean;
  handleToggle: (_payload: TogglePayload) => void;
};

export const useModal: Hooks = () => {
  const dispatch = useDispatch();
  const registerDialog = useSelector(selectRegisterDialog);

  const handleToggle = (payload: TogglePayload) => {
    dispatch(toggle(payload));
  };
  return { registerDialog, handleToggle };
};
