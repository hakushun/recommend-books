import { BookItem, UpdatePayload } from '../../redux/modules/book';
import { getNow } from '../dayjs';

export const mapUpdateBook = ({ item, tags }: UpdatePayload): BookItem => ({
  ...item,
  tags,
  updatedAt: getNow(),
});
