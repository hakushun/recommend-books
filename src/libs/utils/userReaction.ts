import { ReactPayload, BookItem } from '../../redux/modules/book';

export const haveReacted = ({ item, user, type }: ReactPayload): boolean => {
  let result: boolean;
  switch (type) {
    case 'read':
      result = item.usersHaveRead.some((usr) => usr?.id === user?.id);
      break;
    case 'want':
      result = item.usersWantRead.some((usr) => usr?.id === user?.id);
      break;
    case 'stock':
      result = item.usersStocked?.some((usr) => usr?.id === user?.id);
      break;
    default:
      result = false;
      break;
  }
  return result;
};
export const addReaction = ({ item, user, type }: ReactPayload): BookItem => {
  const book = {
    ...item,
    usersHaveRead:
      type === 'read' ? [...item.usersHaveRead, user] : [...item.usersHaveRead],
    usersWantRead:
      type === 'want' ? [...item.usersWantRead, user] : [...item.usersWantRead],
    usersStocked:
      type === 'stock'
        ? [...(item.usersStocked || []), user]
        : [...(item.usersStocked || [])],
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
    usersStocked:
      type === 'stock'
        ? [...item.usersStocked?.filter((usr) => usr?.id !== user?.id)]
        : [...(item.usersStocked || [])],
  };
  return book;
};
