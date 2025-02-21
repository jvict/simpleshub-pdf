import admin from 'firebase-admin';
import dotenv from 'dotenv';


dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), 
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const db = admin.database();

export function saveCPFs(cpfs) {
  const cpfsRef = db.ref('cpfs');
  return Promise.all(cpfs.map((cpf) => cpfsRef.push(cpf)));
}

export function getCPFs() {
  return new Promise((resolve, reject) => {
    const cpfsRef = db.ref('cpfs');
    cpfsRef.once(
      'value',
      (snapshot) => {
        const cpfs = [];
        snapshot.forEach((childSnapshot) => {
          cpfs.push(childSnapshot.val());
        });
        resolve(cpfs);
      },
      (error) => {
        reject(error);
      }
    );
  });
}