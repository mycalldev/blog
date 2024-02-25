
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
                <Link href={'/https://uk.linkedin.com/in/mycall-dev-69aa08271'}>
                  <Image src={'/linkedin_white.svg'} width={75} height={75} className={styles.linkedin} alt='linkedin social' quality={100} />
                </Link>
              </div>
              <div className={styles.emailContact}>info@mycalldev.com</div>
          </div>
          </div>
      
        
    </main>
  )
}
