
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer () {
  return (
    <main>
        
          <div className={styles.footerBG}>
          <div className={styles.footerCotentContainer}>
              <div className={styles.footerContent}>
                THE LATEST PODCAST ON ALL THINGS TECH
              </div>         
              <div className={styles.mycalldevLogoContainer}>
                  <Image src={'/mycallDEV_logo_white.png'} width={125} height={125} className={styles.mycalldevLogo} alt='mycalldev logo' quality={100} />
              </div>
              <div className={styles.emailContact}>info@mycalldev.com</div>
          </div>
          </div>
      
        
    </main>
  )
}

  {/* <div className={styles.linkedinIconContainer}>
              <Link href={'https://uk.linkedin.com/in/mycall-dev-69aa08271'}>
                <Image src={'/linkedin.png'} width={50} height={50} className={styles.linkedinIcon} alt='linked in image' quality={100} />
              </Link>
            </div> */}