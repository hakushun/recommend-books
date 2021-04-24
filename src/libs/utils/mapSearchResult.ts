import { CreatePayload, BookItem } from '../../redux/modules/book';
import { getNow } from '../dayjs';

export const mapSearchResult = ({
  item,
  user,
  type,
}: CreatePayload): BookItem => ({
  id: item.id,
  title: item.volumeInfo.title,
  authors: item.volumeInfo.authors,
  description: item.volumeInfo.description,
  previewLink: item.volumeInfo.previewLink,
  imageUrl: item.volumeInfo.imageLinks.thumbnail,
  usersHaveRead: type === 'read' ? [user] : [],
  usersWantRead: type === 'want' ? [user] : [],
  // comments: [],
  registeredBy: user,
  createdAt: getNow(),
  updatedAt: getNow(),
});
