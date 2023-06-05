import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import {  wrapper } from "../store/store"
import './styles.css'

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
function App({ Component, pageProps }: AppProps) {
  
  return (
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
  )
}

export default wrapper.withRedux(App)
