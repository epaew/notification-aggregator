import firebase from 'firebase'
import firebaseConfig from '../../firebase.json'

firebase.initializeApp(firebaseConfig)

const githubProvider = new firebase.auth.GithubAuthProvider()

export type FirebaseUser = firebase.User | null
export type FirebaseUserCredential = firebase.auth.UserCredential
export interface SignInWithEmailProps {
  email: string
  password: string
}

export const auth = firebase.auth()
export const signUpWithEmail = async ({
  email,
  password
}: SignInWithEmailProps) =>
  await auth.createUserWithEmailAndPassword(email, password)
export const signIn = {
  asAnonymous: async () => await auth.signInAnonymously(),
  withEmail: async ({ email, password }: SignInWithEmailProps) =>
    await auth.signInWithEmailAndPassword(email, password),
  withGithub: async () => await auth.signInWithRedirect(githubProvider)
}
export const signOut = async () => await auth.signOut()
