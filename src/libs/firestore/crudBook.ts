import {
  BookItem,
  CreatePayload,
  ReactPayload,
} from '../../redux/modules/book';
import { mapSearchResult } from '../utils/mapSearchResult';
import {
  haveReacted,
  removeReaction,
  addReaction,
} from '../utils/userReaction';
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
  if (target.exists) return;

  await db.collection('books').doc(book.id).set(book);
};

export const reactBook = async ({
  item,
  user,
  type,
}: ReactPayload): Promise<BookItem> => {
  let book: BookItem;

  if (haveReacted({ item, user, type })) {
    book = removeReaction({ item, user, type });
  } else {
    book = addReaction({ item, user, type });
  }
  await db.collection('books').doc(book.id).set(book, { merge: true });
  return fetchBook(book.id);
};

export const removeBook = async (item: BookItem): Promise<void> => {
  await db.collection('books').doc(item.id).delete();
};
