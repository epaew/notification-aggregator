import React from 'react'
import { auth, FirebaseUser, signIn, signOut } from '../lib/firebase'

type FirebaseContextType = {
  loading: boolean
  currentAuth: FirebaseUser
  signInAsAnonymous: any
  signInWithGithub: any
  signInWithGoogle: any
  signOut: any
}
const initialFirebaseContext = {
  loading: true,
  currentAuth: null,
  signInAsAnonymous: null,
  signInWithGithub: null,
  signInWithGoogle: null,
  signOut: null
}
const FirebaseContext = React.createContext<FirebaseContextType>(initialFirebaseContext)

export const FirebaseConsumer = FirebaseContext.Consumer
export const FirebaseProvider: React.FC = ({ children }) => {
  const [context, setContext] = React.useState<FirebaseContextType>(initialFirebaseContext)
  const signInAsAnonymousCallback = React.useCallback(signIn.asAnonymous, [])
  const signInWithGithubCallback = React.useCallback(signIn.withGithub, [])
  const signInWithGoogleCallback = React.useCallback(signIn.withGoogle, [])
  const signOutCallback = React.useCallback(signOut, [])

  React.useEffect(() => {
    auth.onAuthStateChanged(result => setContext({
      loading: false,
      currentAuth: result,
      signInAsAnonymous: signInAsAnonymousCallback,
      signInWithGithub: signInWithGithubCallback,
      signInWithGoogle: signInWithGoogleCallback,
      signOut: signOutCallback
    }))
  }, [])

  return (
    <FirebaseContext.Provider value={context}>
      {children}
    </FirebaseContext.Provider>
  )
}

export const useFirebase = () => {
  return React.useContext(FirebaseContext)
}
