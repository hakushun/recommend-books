import { CommentItem } from '../../redux/modules/comment';
import { Userdata } from '../../redux/modules/user';
import { getNow } from '../dayjs';

export const mapComment = ({
  id,
  content,
  author,
}: {
  id: string;
  content: string;
  author: Userdata;
}): CommentItem => ({
  id,
  content,
  author,
  createdAt: getNow(),
  updatedAt: getNow(),
});
