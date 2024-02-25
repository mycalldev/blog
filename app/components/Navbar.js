'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
      setToggle(!toggle)
  }

  return (
    <main className={styles.main}>
      
        <div className={styles.containerGrid}>
          
          {/* HAMBURGER */}
          <Link href={'#'}>
            <div className={styles.imageBurgerContainer} onClick={() => handleToggle()}>
              <Image
                src={'/hamburger.png'}
                width={32}
                height={32}
                className={styles.imageBurger}
                alt={'menu bar'}
                quality={100}
              />
            </div>
          </Link>

          {/* TITLE */}
          <Link href="/#" className={styles.link} prefetch={true}>
            <h1 className={styles.titleMain}>MYCALL DEV</h1>
          </Link>
          
          {/* LOGO */}
          <div className={styles.containerLogo}>
              <Image
                src={'/logo.png'}
                width={50}
                height={50}
                alt={'contact button'}
                quality={100}
                className={styles.logo}
              />
          </div>
        </div>
        
        {toggle ? 
          <nav className={styles.navOpen}>
            
              <Link href={'/guides'} className={styles.link} prefetch={true}>
                <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                  <li className={styles.listItem}>Please feel free to help and assist me along my Journey, insofar as adding to and correcting content, via the email below. I will be creating an updating blogs and guides alog the way. Wish me....</li>
                </div>
              </Link>
              
              <div className={styles.closeMenu}>
                <div onClick={() => handleToggle()}>Close Menu</div>
              </div>
          
          </nav> 
          :
          <div></div>
        }
          
    </main>
  )
}
