import admin from 'firebase-admin';

function initFunctions() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FUNCTIONS_PROJECT_ID,
        privateKey: process.env.NEXT_PUBLIC_FUNCTIONS_PRIVATE_KEY?.replace(
          /\\n/g,
          '\n',
        ),
        clientEmail: process.env.NEXT_PUBLIC_FUNCTIONS_CLIENT_EMAIL,
      }),
    });
  }
}
initFunctions();
// データベースの参照を作成
export const db = admin.firestore();
