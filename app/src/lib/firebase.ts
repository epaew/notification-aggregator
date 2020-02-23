import firebase from 'firebase'
import firebaseConfig from '../../firebase.json'

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export type FirebaseUser = firebase.User | null
export const githubProvider = new firebase.auth.GithubAuthProvider()
