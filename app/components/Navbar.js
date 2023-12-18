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
    <main>
      <p className={styles.impactVerification}>Impact-Site-Verification: b0f511c0-2730-49eb-9fce-830f1e443a30</p>

      <div className={styles.navContainer}>
        <div className={styles.containerGrid}>
          {/* HAMBURGER */}
          <Link href={''} onClick={() => handleToggle()}>
            <div className={styles.imageBurgerContainer}>
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
          <div>
            <Link href="/#" className={styles.undreline} prefetch={true}>
              <div className={styles.titleMain}>MYCALL DEV</div>
            </Link>
          </div>
          {/* LOGO */}
          <div>
              <Image
                src={'/mycallDEV_logo.png'}
                width={50}
                height={50}
                alt={'contact button'}
                quality={100}
                className={styles.logo}
              />
          </div>
        </div>
      </div>
      {toggle ? 
            <nav className={styles.navOpen}>
              <ul className={styles.unorderedList}>
                <Link href={'/podcasts'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Podcasts</li>
                  </div>
                </Link>
                 <Link href={'/#'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Brain Teasers</li>
                  </div>
                </Link>
                <Link href={'/blogs'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Blogs</li>
                  </div>
                </Link>
                <Link href={'/whoami'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>WHOAMI</li>
                  </div>
                </Link>
                {/* <Link href={'/#'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Support</li>
                  </div>
                </Link> */}
                {/* <Link href={'/#'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Contact</li>
                  </div>
                </Link> */}
              </ul>
            <div className={styles.closeMenu} onClick={() => handleToggle()}>Close Menu</div>
          </nav> 
            : 
          <div></div>
          }


          {/* DESKTOP NAV */}
          <Link href="/#" className={styles.undreline}>
            <div className={styles.titleMainDesktop}>MYCALL DEV</div>
          </Link>
            <nav className={styles.navContainerGrid}>
              <ul className={styles.navDesktopGrid}>
                <Link href={'/podcasts'} className={styles.linkBTN} prefetch={true}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>Podcasts</li>
                    </div>
                </Link>
                <Link href={'/#'} className={styles.linkBTN}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>Guides</li>
                    </div>
                  </Link>
                  <Link href={'/blogs'} className={styles.linkBTN}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>Blogs</li>
                    </div>
                  </Link>
                  <Link href={'/Whoami'} className={styles.linkBTN}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>WHOAMI</li>
                    </div>
                  </Link>
                  <Link href={'/#'} className={styles.linkBTN}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>Support</li>
                    </div>
                  </Link>
                  {/* <Link href={'/#'} className={styles.linkBTN}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>Contact</li>
                    </div>
                  </Link> */}
              </ul>
            </nav>
      
    </main>
  )
}
