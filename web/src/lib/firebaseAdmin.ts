import firebaseAdmin from 'firebase-admin'

const { FIREBASE_CONFIG } = process.env

if (firebaseAdmin.apps.length === 0) {
  if (typeof FIREBASE_CONFIG !== 'undefined') {
    firebaseAdmin.initializeApp()
  } else {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.applicationDefault(),
    })
  }
}

export default firebaseAdmin
export const auth = firebaseAdmin.auth()
