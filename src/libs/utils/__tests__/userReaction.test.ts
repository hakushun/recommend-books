import { addReaction, haveReacted, removeReaction } from '../userReaction';

describe('userReaction', () => {
  const user = {
    id: '12345',
    email: 'sample@sample.com',
    name: 'test user',
  };
  const item = {
    id: '123456',
    title: 'dummy title',
    authors: ['author1', 'author2'],
    description: 'sample description',
    previewLink: 'https://suumo.jp/',
    imageUrl: 'https://suumo.jp/',
    usersHaveRead: [user],
    usersWantRead: [],
    usersStocked: [],
    tags: [],
    registeredBy: user,
    createdAt: 0,
    updatedAt: 0,
  };
  const read = 'read';
  const want = 'want';
  const stock = 'stock';

  describe('haveReacted', () => {
    it('TRUE', () => {
      expect(true).toEqual(haveReacted({ item, user, type: read }));
    });
    it('FALSE', () => {
      expect(false).toEqual(haveReacted({ item, user, type: stock }));
    });
  });
  describe('addReaction', () => {
    it('Add', () => {
      const result = {
        id: '123456',
        title: 'dummy title',
        authors: ['author1', 'author2'],
        description: 'sample description',
        previewLink: 'https://suumo.jp/',
        imageUrl: 'https://suumo.jp/',
        usersHaveRead: [user],
        usersWantRead: [user],
        usersStocked: [],
        tags: [],
        registeredBy: user,
        createdAt: 0,
        updatedAt: 0,
      };
      expect(result).toEqual(addReaction({ item, user, type: want }));
    });
  });
  describe('removeReaction', () => {
    it('Remove', () => {
      const result = {
        id: '123456',
        title: 'dummy title',
        authors: ['author1', 'author2'],
        description: 'sample description',
        previewLink: 'https://suumo.jp/',
        imageUrl: 'https://suumo.jp/',
        usersHaveRead: [],
        usersWantRead: [],
        usersStocked: [],
        tags: [],
        registeredBy: user,
        createdAt: 0,
        updatedAt: 0,
      };
      expect(result).toEqual(removeReaction({ item, user, type: read }));
    });
  });
});
