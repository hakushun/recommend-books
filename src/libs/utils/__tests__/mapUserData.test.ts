import { mapUserData } from '../mapUserData';

describe('mapUserData', () => {
  // こういう時どうすれば良い？
  const firebaseUser: firebase.default.User = {
    displayName: 'test user',
    email: 'sample@sample.com',
    uid: '12345',
  };
  it('正常値', () => {
    const result = {
      id: '12345',
      email: 'sample@sample.com',
      name: 'test user',
    };

    expect(result).toEqual(mapUserData(firebaseUser));
  });
});
