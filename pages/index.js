import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../styles/Home.module.scss';


import phone from '../public/HomePhone.png';
import passionate from '../public/FigurePassionate.svg';
import resourceful from '../public/FigureResourceful.svg';
import friendly from '../public/FigureFriendly.svg';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Designo</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.top}>
          <div className={styles.text}>
            <h1>Award-winning custom <br /> designs and digital <br /> branding solutions</h1>
            <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <button className="btn_light">Learn More</button>
          </div>
          <div className={styles.image}>
            <Image src={phone} ></Image>
          </div>
        </section>

        <section className={styles.mid}>
          <div className={styles.web_vertical}>
            <div className="link_container">
              <h2>WEB DESIGN</h2>
              <Link href="/web" ><a className="link">View Projects</a></Link>
            </div>
          </div>
          <div className={styles.vertical}>
            <div className="app_horizontal">
              <div className="link_container">
                <h2>APP DESIGN</h2>
                <Link href="/apps" ><a className="link">View Projects</a></Link>
              </div>
            </div>
            <div className="graph_horizontal">
              <div className="link_container">
                <h2>GRAPHIC DESIGN</h2>
                <Link href="/graphic" ><a className="link">View Projects</a></Link>
              </div>
            </div>
          </div>
        </section>


        <section className={styles.bottom}>
          <div className="">
            <Image src={passionate} ></Image>
            <div className="">
              <h3>Passionate</h3>
              <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
            </div>
          </div>
          <div className="">
            <Image src={resourceful} ></Image>
            <div className="">
              <h3>Resourceful</h3>
              <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
            </div>
          </div>
          <div className="">
          <Image src={friendly} ></Image>
            <div className="">
              <h3>Friendly</h3>
              <p> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
            </div>
          </div>
        </section>


      </main>
    </div>
  )
}


