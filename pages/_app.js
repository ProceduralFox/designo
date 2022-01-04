import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/globals.scss'



function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const scrollUp = () => {
      // window.scroll({
      //   top: 0,
      //   left: 0,
      //   behavior: 'smooth'
      // });
      // window.focus();
      try {
        window.scroll(0, 0);
        console.log("tried") 
      } catch (error) {
        console.log(error)
      }
      // const root = document.getElementById('__next');
      // root.scrollTo({
      //   top: 0,
      //   left: 0,
      //   behavior: 'smooth',
      // });
      console.log("we loaded");
    }

    router.events.on('routeChangeStart', scrollUp)

    return () => {
      router.events.off('routeChangeStart', scrollUp)
    }
  }, [])


  return (
    <>
    <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
    </>
    )
}

export default MyApp
