import admin from 'firebase-admin';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('../../../recommend-books-1e328-firebase-adminsdk-phmxq-899894bf81');

function initFunctions() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
}
initFunctions();
// データベースの参照を作成
export const db = admin.firestore();
