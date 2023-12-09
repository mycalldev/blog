import Image from 'next/image';
import styles from'./whoami.module.css';


export default function WHOAMI() {
  return (
    <main>
        <div className={styles.imagePerformanceContainer}>
           <h1>Hello</h1>
            {/* <Image src={'/#'} width={1528} height={891} className={styles.imagePerformance} alt='image of performance rating for website' quality={100} /> */}
        </div>
    </main>
  )
}
