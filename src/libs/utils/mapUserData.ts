export interface FirebaseUser extends Partial<firebase.default.User> {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export const mapUserData = (
  user: FirebaseUser,
): { id: string; email: string; name: string } => {
  const { uid, email, displayName } = user;
  return {
    id: uid,
    email: email || '',
    name: displayName || '',
  };
};
