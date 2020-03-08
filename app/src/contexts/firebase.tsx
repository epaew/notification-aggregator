import React from 'react'
import { auth, FirebaseUser, FirebaseUserCredential, SignInWithEmailProps, signUpWithEmail, signIn, signOut } from '../lib/firebase'

type FirebaseContextType = {
  loading: boolean
  currentAuth: FirebaseUser
  signUpWithEmail: (props: SignInWithEmailProps) => Promise<FirebaseUserCredential>
  signIn: {
    asAnonymous: () => Promise<FirebaseUserCredential>
    withEmail: (props: SignInWithEmailProps) => Promise<FirebaseUserCredential>
    withGithub: () => Promise<void>
  }
  signOut: () => Promise<void>
}
const initialFirebaseContext = {
  loading: true,
  currentAuth: null,
  signUpWithEmail,
  signIn,
  signOut
}
const FirebaseContext = React.createContext<FirebaseContextType>(initialFirebaseContext)

export const FirebaseConsumer = FirebaseContext.Consumer
export const FirebaseProvider: React.FC = ({ children }) => {
  const [context, setContext] = React.useState<FirebaseContextType>(initialFirebaseContext)

  React.useEffect(() => {
    auth.onAuthStateChanged(result => setContext({
      ...context,
      loading: false,
      currentAuth: result
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
