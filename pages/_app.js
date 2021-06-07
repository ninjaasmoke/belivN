import AppWrapper from '../context/AppContext'
import PeerWrapper from '../context/PeerContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <PeerWrapper>
        <Component {...pageProps} />
      </PeerWrapper>
    </AppWrapper>
  )
}

export default MyApp