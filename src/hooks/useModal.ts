import { useRouter } from 'next/router';
import { MutableRefObject, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAriaHidden } from '../libs/utils/toggleAriaHidden';
import { selectModal, toggle, TogglePayload } from '../redux/modules/modal';
import { useExternalSearch } from './useExternalSearch';

type CustomHooks = (
  _context: string,
) => {
  isOpened: boolean;
  modalRef: MutableRefObject<HTMLDivElement | null>;
  handleToggle: (_payload: TogglePayload) => void;
  handleKeydown: (_e: React.KeyboardEvent<HTMLElement>) => void;
};

export const useModal: CustomHooks = (context: string) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { handleReset } = useExternalSearch();

  const isOpened = modal[context];

  const handleToggle = (payload: TogglePayload) => {
    dispatch(toggle(payload));
  };

  const getFocusableElements = (
    ref: React.MutableRefObject<HTMLElement | null>,
  ) => {
    const focusableElementsString =
      'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"], [contenteditable]';
    return Array.prototype.slice.call(
      ref?.current?.querySelectorAll(focusableElementsString),
    ) as HTMLElement[];
  };

  const getNextFocusableElement = (
    ref: React.MutableRefObject<HTMLElement | null>,
    backward: boolean,
  ) => {
    const focusable = getFocusableElements(ref);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (backward && document.activeElement === first) return last;
    if (!backward && document.activeElement === last) return first;
    return null;
  };

  const handleTabDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const backward = e.shiftKey;
    const nextFocus = getNextFocusableElement(modalRef, backward);
    if (nextFocus) {
      e.preventDefault();
      nextFocus.focus();
    }
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLElement>) => {
    switch (e.key) {
      case 'Escape':
        handleToggle({ [context]: false });
        break;
      case 'Tab':
        handleTabDown(e);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (isOpened) {
      modalRef.current?.focus();
      toggleAriaHidden('app', true);
      return;
    }
    toggleAriaHidden('app', false);
    document.getElementById('main')?.focus();
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

  return { isOpened, modalRef, handleToggle, handleKeydown };
};
