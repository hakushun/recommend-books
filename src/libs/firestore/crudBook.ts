import {
  BookItem,
  CreatePayload,
  ReactPayload,
} from '../../redux/modules/book';
import { getNow } from '../dayjs';

const mapToBook = ({ item, user, type }: CreatePayload): BookItem => ({
  id: item.id,
  title: item.volumeInfo.title,
  authors: item.volumeInfo.authors,
  describe: item.volumeInfo.description,
  selfLink: item.selfLink,
  imageUrl: item.volumeInfo.imageLinks.thumbnail,
  usersHaveRead: type === 'read' ? [user] : [],
  usersWantRead: type === 'want' ? [user] : [],
  comments: [],
  registeredBy: user,
  createdAt: getNow(),
  updatedAt: getNow(),
});

export const createBook = async ({
  item,
  user,
  type,
}: CreatePayload): Promise<void> => {
  const book = mapToBook({ item, user, type });
  console.log('createBook', book);
};

export const reactBook = async ({
  item,
  user,
  type,
}: ReactPayload): Promise<void> => {
  // TODO: すでにreactしてた時の処理追加
  const book = {
    ...item,
    usersHaveRead:
      type === 'read' ? [...item.usersHaveRead, user] : [...item.usersHaveRead],
    usersWantRead:
      type === 'want' ? [...item.usersWantRead, user] : [...item.usersWantRead],
  };
  console.log('reactBook', book);
};
