import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/WebDesign.module.scss'


const WebDesign = () => {
    return ( 
        <>
            <Head></Head>
            <main className={styles.container}>
                <section>
                    <div className="banner">
                        <div className="">
                            <h2>Web Design</h2>
                            <p>We build websites that serve as powerful marketing tools <br /> and bring memorable brand experiences.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.mid}>
                    <div className="content_grid">
                        <div>
                            <img src="./WebDesignGrid/Express-Desktop.svg" alt="" />
                            <div>
                                <h3>Express</h3>
                                <p>A multi-carrier shipping website for ecommerce businesses</p>
                            </div>
                        </div>
                        <div>
                            <img src="./WebDesignGrid/Transfer-Desktop.svg" alt="" />
                            <div>
                                <h3>Transfer</h3>
                                <p>Site for low-cost money transfers and sending money within seconds</p>
                            </div>
                        </div>
                        <div>
                            <img src="./WebDesignGrid/Photon-Desktop.svg" alt="" />
                            <div>
                                <h3>Photon</h3>
                                <p>A state-of-the-art music player with high-resolution audio and DSP effects</p>
                            </div>
                        </div>
                        <div>
                            <img src="./WebDesignGrid/Builder-Desktop.svg" alt="" />
                            <div>
                                <h3>Builder</h3>
                                <p>Connects users with local contracotrs based on their location</p>
                            </div>
                        </div>
                        <div>
                            <img src="./WebDesignGrid/BLOGR-Desktop.svg" alt="" />
                            <div>
                                <h3>Blogr</h3>
                                <p>Blogr is a platform for creating an online blog or publication</p>
                            </div>
                        </div>
                        <div>
                            <img src="./WebDesignGrid/Camp-Desktop.svg" alt="" />
                            <div>
                                <h3>Camp</h3>
                                <p>Get expert training in coding, data, design and digital marketing</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="links_duo">
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
            </main>
        </>
     );
}
 
export default WebDesign;