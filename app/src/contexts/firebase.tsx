import React from 'react'
import { auth, FirebaseUser, githubProvider } from '../lib/firebase'

type FirebaseContextType = {
  loading: boolean
  currentAuth: FirebaseUser
  signInWithGithub: any
  signOut: any
}
const initialFirebaseContext = {
  loading: true,
  currentAuth: null,
  signInWithGithub: null,
  signOut: null
}
const FirebaseContext = React.createContext<FirebaseContextType>(initialFirebaseContext)

export const FirebaseConsumer = FirebaseContext.Consumer
export const FirebaseProvider: React.FC = ({ children }) => {
  const [context, setContext] = React.useState<FirebaseContextType>(initialFirebaseContext)
  const signInWithGithub = React.useCallback(async () => auth.signInWithRedirect(githubProvider), [])
  const signOut = React.useCallback(async () => auth.signOut(), [])

  React.useEffect(() => {
    auth.onAuthStateChanged(result => setContext({
      loading: false,
      currentAuth: result,
      signInWithGithub,
      signOut
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
