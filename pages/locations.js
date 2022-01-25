import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from '../styles/locations.module.scss'

function Locations() {

  const [screenW, setScreenW] = useState(0)

  useEffect(()=>{
    function handle_resize(){
        setScreenW(window.innerWidth)
        console.log(window.innerWidth)
        
    }

    window.addEventListener('resize', handle_resize)

    return () => {
        window.removeEventListener('resize', handle_resize)
    }
  }, [])

  useEffect(()=>{
    setScreenW(window.innerWidth)
  }, [])

  const Map = dynamic(
    () => import('../components/map.js'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  )
  return (
  <>
  <Head>
    <title>Designo</title>
  </Head>
  <main className={`container ${styles.util}`}>
      <section className={styles.section}>
        <div className={styles.side}>
          <div className="">
            <h2>Canada</h2>
            <div className="">
              <div className="">
                  <p>Designo Central Office</p>
                  <p>3886 Wellington Street</p>
                  <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div className="">
                  <p>Contact</p>
                  <p>P : +1 253-863-8967</p>
                  <p>M : contact@designo.co</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.circle}>
            <Map  width={43.7064900263615} height={-79.2501713030825} screenW={screenW < 1112 ? screenW < 600 ? screenW : screenW*0.9 : 350} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.circle}>
            <Map  width={-33.08675180316975} height={151.63540826962486} screenW={screenW < 1112 ? screenW < 600 ? screenW : screenW*0.9 : 350}/>
        </div>
        <div className={styles.side}>
          <div className="">
              <h2>Australia</h2>
              <div className="">
                <div className="">
                    <p>Designo AU Office</p>
                    <p>19 Balonne Street</p>
                    <p>New South Wales 2443</p>
                </div>
                <div className="">
                    <p>Contact</p>
                    <p>P : (02) 6720 9092</p>
                    <p>M : contact@designo.au</p>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.side}>
          <div className="">
              <h2>United Kingdom</h2>
              <div className="">
                <div className={styles.text}>
                    <p>Designo UK Office</p>
                    <p>13  Colorado Way</p>
                    <p>Rhyd-y-fro SA8 9GA</p>
                </div>
                <div className={styles.text}>
                    <p>Contact </p>
                    <p>P : 078 3115 1400</p>
                    <p>M : contact@designo.uk</p>
                </div>
              </div>
            </div>
        </div>
        <div className={styles.circle}>
            <Map  width={53.733233771250134} height={-1.315243446828281} screenW={screenW < 1112 ? screenW < 600 ? screenW : screenW*0.9 : 350}/>
        </div>
      </section>
  </main>
  </>
  )
}

export default Locations