import Head from "next/head";
import Link from "next/link";


const GraphicDesign = () => {
    return ( 
    <>
            <Head></Head>
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
                            <img src="./GraphicDesignGrid/Change-D.svg" alt="" />
                            <div>
                                <h3>Tim Brown</h3>
                                <p>A book cover designed for Tim Brown’s new release, ‘Change’</p>
                            </div>
                        </div>
                        <div>
                            <img src="./GraphicDesignGrid/Boxed-D.svg" alt="" />
                            <div>
                                <h3>Boxed Water</h3>
                                <p>A simple packaging concept made for Boxed Water</p>
                            </div>
                        </div>
                        <div>
                            <img src="./GraphicDesignGrid/Science-D.svg" alt="" />
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