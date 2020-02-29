import firebase from 'firebase'
import firebaseConfig from '../../firebase.json'

firebase.initializeApp(firebaseConfig)

const githubProvider = new firebase.auth.GithubAuthProvider()

export const auth = firebase.auth()
export type FirebaseUser = firebase.User | null
export const signIn = {
  asAnonymous: async () => auth.signInAnonymously(),
  withGithub: async () => auth.signInWithRedirect(githubProvider)
}
export const signOut = async () => auth.signOut()
