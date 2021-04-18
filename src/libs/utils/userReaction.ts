import { ReactPayload, BookItem } from '../../redux/modules/book';

export const haveReacted = ({ item, user, type }: ReactPayload): boolean => {
  if (type === 'read') {
    return item.usersHaveRead.some((usr) => usr?.id === user?.id);
  }
  return item.usersWantRead.some((usr) => usr?.id === user?.id);
};
export const addReaction = ({ item, user, type }: ReactPayload): BookItem => {
  const book = {
    ...item,
    usersHaveRead:
      type === 'read' ? [...item.usersHaveRead, user] : [...item.usersHaveRead],
    usersWantRead:
      type === 'want' ? [...item.usersWantRead, user] : [...item.usersWantRead],
  };
  return book;
};
export const removeReaction = ({
  item,
  user,
  type,
}: ReactPayload): BookItem => {
  const book = {
    ...item,
    usersHaveRead:
      type === 'read'
        ? [...item.usersHaveRead.filter((usr) => usr?.id !== user?.id)]
        : [...item.usersHaveRead],
    usersWantRead:
      type === 'want'
        ? [...item.usersWantRead.filter((usr) => usr?.id !== user?.id)]
        : [...item.usersWantRead],
  };
  return book;
};
