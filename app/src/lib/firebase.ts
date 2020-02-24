import { AuthSession } from 'expo'
import firebase from 'firebase'
import firebaseConfig from '../../firebase.json'
import { Platform } from 'react-native'

firebase.initializeApp(firebaseConfig)

const githubProvider = new firebase.auth.GithubAuthProvider()

export const auth = firebase.auth()
export type FirebaseUser = firebase.User | null
export const signIn = {
  asAnonymous: async () => auth.signInAnonymously(),
  withGithub: async () => {
    if (Platform.OS === 'web') {
      return auth.signInWithRedirect(githubProvider)
    } else {
      const returnUrl = AuthSession.getRedirectUrl()
      const authUrl = `https://${firebaseConfig.authDomain}/__/auth/handler` +
        '?authType=signInViaRedirect&providerId=github.com' +
        `&apiKey=${firebaseConfig.apiKey}&v=${firebase.SDK_VERSION}` +
        `&redirectUrl=${encodeURIComponent(returnUrl)}`
      // await AuthSession.startAsync({ authUrl })
      // const result = await auth.getRedirectResult()
      const result = await AuthSession.startAsync({ authUrl })
      console.log(JSON.stringify(result, null, 4))
    }
  }
}
export const signOut = async () => auth.signOut()
