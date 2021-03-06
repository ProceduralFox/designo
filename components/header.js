import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import logo from '../public/HeaderLogoD.svg';

const Header = () => {
    const router = useRouter()

    const [screenW, setScreenW] = useState(0)
    const [selection, setSelection] = useState(false)

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

    return ( 
        <header className="container">
            <section>
                {
                selection ?
                <div className="conditional_links">
                    <ul>
                        <li><Link href="/about"><a className="link_header" >Our Company</a></Link></li>
                        <li><Link href="/locations"><a className="link_header" >Locations</a></Link></li>
                        <li><Link href="/contact"><a className="link_header" >Contact</a></Link></li>
                    </ul>
                </div>
                :
                <Image src={logo} onClick={(e)=>{e.preventDefault(); router.push("/")}}></Image>
                }
                {
                screenW < 600 ?
                <div onClick={()=>setSelection(!selection)}className="menu">
                    <div className="menu_visual"></div>
                </div>
                :
                <div>
                    <ul>
                        <li><Link href="/about"><a className="link_header" >Our Company</a></Link></li>
                        <li><Link href="/locations"><a className="link_header" >Locations</a></Link></li>
                        <li><Link href="/contact"><a className="link_header" >Contact</a></Link></li>
                    </ul>
                </div>
                }
            </section>
        </header>
     );
}
 
export default Header;


