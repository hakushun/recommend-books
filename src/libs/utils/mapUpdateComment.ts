import { CommentItem } from '../../redux/modules/comment';
import { getNow } from '../dayjs';

export const mapUpdateComment = (item: CommentItem): CommentItem => ({
  ...item,
  updatedAt: getNow(),
});
