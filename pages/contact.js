import Head from "next/head";
import { useEffect, useState } from "react";
import styles from '../styles/Contact.module.scss'

const Contact = () => {
    return ( 
    <>
        <Head>
            <title>Designo</title>
        </Head>
        <main className="container">
            <section>
                <div className={styles.top}>
                    <div>
                        <h2>Contact Us</h2>
                        <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
                    </div>
                    <form action="" className={styles.form}>
                        <input autoComplete="none" type="text" className={styles.input} placeholder="Name" />
                        <input autoComplete="none" type="text" className={styles.input} placeholder="Email Address" />
                        <input autoComplete="none" type="text" className={styles.input} placeholder="Phone" />
                        <textarea name="" id="" className={`${styles.input}`} placeholder="Your Message"></textarea>
                        <button type="submit" className="btn_light">Submit</button>
                        <input autoComplete="on" style={{ display: 'none' }} id="fake-hidden-input-to-stop-google-address-lookup"></input>
                    </form>
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
        </main>
    </> );
}
 
export default Contact;