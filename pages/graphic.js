import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import change from '../public/GraphicDesignGrid/Change-D.jpg';
import boxed from '../public/GraphicDesignGrid/Boxed-D.jpg';
import science from '../public/GraphicDesignGrid/Science-D.jpg';

const GraphicDesign = () => {
    return ( 
    <>
            <Head>
                <title>Designo</title>
            </Head>
            <main className="container">
                <section>
                    <div className="banner">
                        <div className="">
                            <h2>Graphic Design</h2>
                            <p>We deliver eye-catching branding materials that are <br /> tailored to meet your business objectives.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="content_grid">
                        <div>
                            <Image src={change}></Image>
                            <div>
                                <h3>Tim Brown</h3>
                                <p>A book cover designed for Tim Brown’s new release, ‘Change’</p>
                            </div>
                        </div>
                        <div>
                            <Image src={boxed}></Image>
                            <div>
                                <h3>Boxed Water</h3>
                                <p>A simple packaging concept made for Boxed Water</p>
                            </div>
                        </div>
                        <div>
                            <Image src={science}></Image>
                            <div>
                                <h3>Science!</h3>
                                <p>A poster made in collaboration with the Federal Art Project</p>
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
                        <div className="app_horizontal">
                            <div className="link_container">
                                <h2>APP DESIGN</h2>
                                <Link href="/apps" ><a className="link">View Projects</a></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    </> );
}
 
export default GraphicDesign;