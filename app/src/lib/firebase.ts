import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../../firebase.json'

firebase.initializeApp(firebaseConfig)

const providers = {
  'github.com': new firebase.auth.GithubAuthProvider(),
  'google.com': new firebase.auth.GoogleAuthProvider()
}

export const auth = firebase.auth()
export type FirebaseUser = firebase.User | null
export const signIn = {
  asAnonymous: async () => auth.signInAnonymously(),
  withGithub: async () => auth.signInWithRedirect(providers['github.com']),
  withGoogle: async () => auth.signInWithRedirect(providers['google.com'])
}
export const signOut = async () => auth.signOut()
