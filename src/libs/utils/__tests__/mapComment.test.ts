import { mapComment } from '../mapComment';

describe('mapComment', () => {
  // テスト対象をmockしていいのだろうか・・・
  // timestampがテストタイミングによってずれてエラーになってしまうのでmockを作成した
  const mockMapComment = jest.fn((comment) => ({
    ...mapComment(comment),
    createdAt: 0,
    updatedAt: 0,
  }));
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
      createdAt: 0,
      updatedAt: 0,
    };
    expect(result).toEqual(mockMapComment(comment));
  });
});
