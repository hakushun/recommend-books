import { BookItem } from '../../redux/modules/book';
import { db } from './initFunctions';

export const getBooks = async (): Promise<BookItem[]> => {
  const results: BookItem[] = [];
  const snapshot = await db.collection('books').get();
  snapshot.forEach((doc) => {
    results.push(doc.data() as BookItem);
  });
  return results;
};
