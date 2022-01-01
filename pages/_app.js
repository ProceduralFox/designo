import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
    </>
    )
}

export default MyApp
