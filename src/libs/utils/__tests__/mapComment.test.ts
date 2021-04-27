import { getNow } from '../../dayjs';
import { mapComment } from '../mapComment';

describe('mapComment', () => {
  const user = {
    id: '1',
    email: 'sample@sample.com',
    name: 'test user',
  };
  const comment = {
    id: '1',
    content: 'content',
    author: user,
  };
  it('正常値', () => {
    const result = {
      id: '1',
      content: 'content',
      author: user,
      createdAt: getNow(),
      updatedAt: getNow(),
    };
    expect(result).toEqual(mapComment(comment));
  });
});
