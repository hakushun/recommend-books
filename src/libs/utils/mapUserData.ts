export const mapUserData = (
  user: firebase.default.User,
): { id: string; email: string; name: string } => {
  const { uid, email, displayName } = user;
  return {
    id: uid,
    email: email || '',
    name: displayName || '',
  };
};
