import styles from './Header.module.css';

import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Header() {
 

  return (
    <>
      <div className={styles.textmain}>
        <div className={styles.nav}>
            <div className={styles.logo}>
                LOGO
            </div>
            <div className={styles.links}>
                <a href="#">Home</a>
                <a href="#">Test</a>
            </div>
            <div className={styles.btns}>
                <a href="https://t.me/syetaaa0" target='_blanck'><FaTelegramPlane size={25}/></a> 
                <a href="https://github.com/syetaa" target='_blanck'><FaGithub size={25}/></a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
