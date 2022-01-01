import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from '../styles/About.module.scss'



const About = () => {

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
      setScreenW(window.innerWidth*0.9)
    }, [])


    return ( 
    <>
        <main className="container">
            <section className={styles.top}>
                <div>
                    <h2>About us</h2>
                    <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
                </div>
                <img src={screenW < 1112 ? screenW < 600 ? "./AboutUs/Top-M.svg" : "./AboutUs/Top-T.svg" : "./AboutUs/Top-D.svg"} alt="" />
            </section>

            <section className={styles.mid}>
                <img src={screenW < 1112 ? screenW < 600 ? "./AboutUs/Mid-M.svg" : "./AboutUs/Mid-T.svg" : "./AboutUs/Mid-D.svg"} alt="" />
                <div className="">
                    <h2>World Class Talent</h2>
                    <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
                </div>
            </section>

            <section>
                <div className={styles.locations}>
                    <div>
                        <img src="./AboutUs/Canada-D.svg" alt="" />
                        <div>
                            <h3>Australia</h3>
                            <button className="btn_dark">See Location</button>
                        </div>
                    </div>
                    <div>
                        <img src="./AboutUs/Australia-D.svg" alt="" />
                        <div>
                            <h3>Canada</h3>
                            <button className="btn_dark">See Location</button>
                        </div>
                    </div>
                    <div>
                        <img src="./AboutUs/UK-D.svg" alt="" />
                        <div>
                            <h3>United Kingdom</h3>
                            <button className="btn_dark">See Location</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.bottom}>
                    <div>
                        <h2>The real deal</h2>
                        <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                    </div>
                    <img src={screenW < 1112 ? screenW < 600 ? "./AboutUs/Bottom-M.svg" : "./AboutUs/Bottom-T.svg" : "./AboutUs/Bottom-D.svg"} alt="" />
            </section>
        </main>
    </> );
}
 
export default About;