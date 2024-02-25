
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <main>
        
          <div className={styles.footerBG}>
          <div className={styles.footerCotentContainer}>
              <div className={styles.footerContent}>
                Check out my Linkedin for Further Details
              </div>         
              <div className={styles.iconSocial}>
                <Link href={'https://www.linkedin.com/in/mycalldev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}>
                  <Image src={'/linkedin_white.svg'} width={75} height={75} className={styles.linkedin} alt='linkedin social' quality={100} />
                </Link>
              </div>
              <div className={styles.emailContact}>info@mycalldev.com</div>
          </div>
          </div>
      
        
    </main>
  )
}
