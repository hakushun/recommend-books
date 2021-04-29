import { mapUserData, FirebaseUser } from '../mapUserData';

describe('mapUserData', () => {
  const firebaseUser: FirebaseUser = {
    displayName: 'test user',
    email: 'sample@sample.com',
    uid: '12345',
  };
  const emptyUser: FirebaseUser = {
    displayName: '',
    email: '',
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
  it('情報不足', () => {
    const result = {
      id: '12345',
      email: '',
      name: '',
    };
    expect(result).toEqual(mapUserData(emptyUser));
  });
});
