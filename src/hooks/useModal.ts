import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAriaHidden } from '../libs/utils/toggleAriaHidden';
import { selectModal, toggle, TogglePayload } from '../redux/modules/modal';
import { useExternalSearch } from './useExternalSearch';

type Hooks = (
  _context: string,
) => {
  isOpened: boolean;
  handleToggle: (_payload: TogglePayload) => void;
};

export const useModal: Hooks = (context: string) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);
  const { handleReset } = useExternalSearch();

  const isOpened = modal[context];

  const handleToggle = (payload: TogglePayload) => {
    dispatch(toggle(payload));
  };

  useEffect(() => {
    if (isOpened) {
      toggleAriaHidden('app', true);
      return;
    }
    toggleAriaHidden('app', false);
  }, [isOpened]);

  useEffect(() => {
    const handleRouteChange = () => {
      handleToggle({ registerDialog: false });
      handleReset();
      toggleAriaHidden('app', false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isOpened, handleToggle };
};
