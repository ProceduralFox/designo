import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/footer.module.scss'


const Footer = () => {
    const router = useRouter()
    const isContact = router.pathname === "/contact"
    return ( 
    <footer>
        <div className={!isContact ? styles.conditional : styles.none} onClick={()=>console.log(router.pathname)}>
            <div className="">
                <h3>Let&apos;s talk about your project</h3>
                <p>Ready to take it to the next Level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>

            <button className="btn_light">GET IN TOUCH</button>

        </div>
        <div className={styles.visible_background}>
            <section>
                <div className={styles.top}>
                    <img src="./FooterLogoD.svg" alt="" onClick={(e)=>{e.preventDefault(); router.push("/")}}  />
                    <div>
                        <ul>
                            <li><Link href="/about"><a className="link_footer" >Our Company</a></Link></li>
                            <li><Link href="/locations"><a className="link_footer" >Locations</a></Link></li>
                            <li><Link href="/contact"><a className="link_footer" >Contact</a></Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.address}>
                        <p>Designo Central Office</p>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div className={styles.address}>
                        <p>Contact Us (Central Office)</p>
                        <p>P : +1 253-863-8967</p>
                        <p>M : contact@designo.co</p>
                    </div>
                    <img src="./SOCIALSGROUP.svg" alt="" />
                    <div className=""></div>
                </div>
            </section>
        </div>
    </footer> );
}
 
export default Footer;