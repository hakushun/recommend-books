import {
  BookItem,
  CreatePayload,
  ReactPayload,
} from '../../redux/modules/book';
import { getInstance } from './getInstance';

const db = getInstance();

export const fetchBook = async (id: string): Promise<BookItem> => {
  const doc = await db.collection('books').doc(id).get();
  return doc.data() as BookItem;
};

export const createBook = async ({
  item,
  user,
  type,
}: CreatePayload): Promise<void> => {
  const book = mapSearchResult({ item, user, type });
  // すでに登録済みであれば、DBへの登録はしないでreturn
  const target = await db.collection('books').doc(book.id).get();
  if (target.exists) throw new Error('すでに登録済みです');

  await db.collection('books').doc(book.id).set(book);
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
  await db.collection('books').doc(book.id).set(book, { merge: true });
};

export const removeBook = async (item: BookItem): Promise<void> => {
  await db.collection('books').doc(item.id).delete();
};
