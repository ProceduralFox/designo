import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import airfilter from '../public/AppDesignGrid/Airfilter-D.jpg';
import eyecam from '../public/AppDesignGrid/Eyecam-D.jpg';
import faceit from '../public/AppDesignGrid/Faceit-D.jpg';
import todo from '../public/AppDesignGrid/Todo-D.jpg';
import loopstudios from '../public/AppDesignGrid/Loopstudios-D.jpg';



const Apps = () => {
    return ( 
    <>
            <Head>
                <title>Designo</title>
            </Head>
            <main className="container">
                <section>
                    <div className="banner">
                        <div className="">
                            <h2>App Design</h2>
                            <p>Our mobile designs bring intuitive digital solutions <br /> to your customers right at their fingertips.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="content_grid">
                        <div>
                            <Image src={airfilter}></Image>
                            <div>
                                <h3>Airfilter</h3>
                                <p>Solving the problem of poor indoor air quality by filtering the air</p>
                            </div>
                        </div>
                        <div>
                            <Image src={eyecam}></Image>
                            <div>
                                <h3>Eyecam</h3>
                                <p>Product that lets you edit your favorite photos and videos at any time</p>
                            </div>
                        </div>
                        <div>
                            <Image src={faceit}></Image>
                            <div>
                                <h3>Faceit</h3>
                                <p>Get to meet your favorite internet superstar with the faceit app</p>
                            </div>
                        </div>
                        <div>
                            <Image src={todo}></Image>
                            <div>
                                <h3>Todo</h3>
                                <p>A todo app that features cloud sync with light and dark mode</p>
                            </div>
                        </div>
                        <div>
                            <Image src={loopstudios}></Image>
                            <div>
                                <h3>Loopstudios</h3>
                                <p>A VR experience app made for Loopstudios</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="links_duo">
                        <div className="web_horizontal">
                            <div className="link_container">
                                <h2>WEB DESIGN</h2>
                                <Link href="/web" ><a className="link">View Projects</a></Link>
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
    </> );
}
 
export default Apps;