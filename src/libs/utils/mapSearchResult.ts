import { CreatePayload, BookItem } from '../../redux/modules/book';
import { getNow } from '../dayjs';
import { replaceToHttps } from './replaceToHttps';

export const mapSearchResult = ({
  item,
  user,
  type,
}: CreatePayload): BookItem => ({
  id: item.id,
  title: item.volumeInfo.title,
  authors: item.volumeInfo.authors || [],
  description: item.volumeInfo.description || '',
  previewLink: item.volumeInfo.previewLink || '',
  imageUrl: replaceToHttps(item.volumeInfo.imageLinks?.thumbnail),
  usersHaveRead: type === 'read' ? [user] : [],
  usersWantRead: type === 'want' ? [user] : [],
  registeredBy: user,
  tags: [],
  createdAt: getNow(),
  updatedAt: getNow(),
});
