import admin from 'firebase-admin';
import serviceAccount from '../../firebase-key.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cpf-finder-default-rtdb.firebaseio.com"
});

const db = admin.database();

export function saveCPFs(cpfs) {
  const cpfsRef = db.ref('cpfs');
  return Promise.all(cpfs.map(cpf => cpfsRef.push(cpf)));
}

export function getCPFs() {
  return new Promise((resolve, reject) => {
    const cpfsRef = db.ref('cpfs');
    cpfsRef.once('value', (snapshot) => {
      const cpfs = [];
      snapshot.forEach((childSnapshot) => {
        cpfs.push(childSnapshot.val());
      });
      resolve(cpfs);
    }, (error) => {
      reject(error);
    });
  });
}

