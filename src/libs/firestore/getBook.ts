import { BookItem } from '../../redux/modules/book';
import { db } from '../firebase/initFirebaseAdmin';

export const getBook = async (id: string): Promise<BookItem | null> => {
  const doc = await db.collection('books').doc(id).get();
  return doc.data() ? (doc.data() as BookItem) : null;
};
