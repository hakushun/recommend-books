import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    document.getElementById('app')?.removeAttribute('aria-hidden');
    if (isOpened) {
      document.getElementById('app')?.setAttribute('aria-hidden', 'true');
    }
  }, [isOpened]);

  useEffect(() => {
    const handleRouteChange = () => {
      handleToggle({ registerDialog: false });
      handleReset();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      document.getElementById('app')?.removeAttribute('aria-hidden');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isOpened, handleToggle };
};
