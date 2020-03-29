import firebaseAdmin from 'firebase-admin'

const { FIREBASE_CONFIG } = process.env

if (FIREBASE_CONFIG) {
  firebaseAdmin.initializeApp()
} else {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.applicationDefault(),
  })
}

export default firebaseAdmin
export const auth = firebaseAdmin.auth()
