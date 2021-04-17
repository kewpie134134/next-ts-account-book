import firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSEGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
// firebase.appsをチェックし、ロードされているかどうかを確認。
// なければinitializeAppを実行
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
