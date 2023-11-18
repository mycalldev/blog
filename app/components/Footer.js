
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer () {
  return (
    <main>
        <div className={styles.containerFooter}>
          <Image src={'/footer.jpg'} width={2043} height={936} className={styles.imageFooter} alt='footer image' quality={100} />
          
            <div className={styles.footerContent}>
              THE LATEST PODCAST ON ALL THINGS TECH
            </div>         
        
            {/* <div className={styles.linkedinIconContainer}>
              <Link href={'https://uk.linkedin.com/in/mycall-dev-69aa08271'}>
                <Image src={'/linkedin.png'} width={50} height={50} className={styles.linkedinIcon} alt='linked in image' quality={100} />
              </Link>
            </div> */}
            <div className={styles.emailContact}>info@mycalldev.com</div>
          </div>
        
    </main>
  )
}
