import '../styles/globals.css'
import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  return(
    <>
      <GoogleAnalytics measurementId='G-QQBSBVTYMR' />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
