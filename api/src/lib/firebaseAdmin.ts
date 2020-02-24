import firebaseAdmin from 'firebase-admin'

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.applicationDefault()
})

export default firebaseAdmin
export const auth = firebaseAdmin.auth()
