import firebase from 'firebase/app';
import { Userdata } from '../../redux/modules/user';
import { mapUserData } from '../utils/mapUserData';

export const signinWithGoogle = async (): Promise<Userdata> => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const { user } = await firebase.auth().signInWithPopup(googleProvider);
  if (!user) return null;
  return mapUserData(user);
};

export const signOut = async (): Promise<void> => {
  await firebase.auth().signOut();
};
