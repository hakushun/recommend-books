import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import initFirebase from '../libs/firebase/initFirebase';
import { mapUserData } from '../libs/utils/mapUserData';
import {
  auth,
  login,
  logout as logoutUser,
  selectIsLoading,
  selectUser,
  Userdata,
} from '../redux/modules/user';

initFirebase();

type CustomHooks = () => {
  user: Userdata;
  isLoading: boolean;
  signinWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};
export const useUser: CustomHooks = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  const signinWithGoogle = async () => {
    await dispatch(login());
    router.push('/');
  };

  const logout = async (): Promise<void> => {
    await dispatch(logoutUser());
    router.push('/login');
  };

  useEffect(() => {
    const cancelAuthListener = firebase.auth().onIdTokenChanged(async (usr) => {
      if (usr) {
        dispatch(auth(mapUserData(usr)));
      } else {
        router.push('/login');
      }
    });
    return () => {
      cancelAuthListener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user, isLoading, signinWithGoogle, logout };
};
