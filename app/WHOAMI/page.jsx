import Image from 'next/image';
import styles from'./whoami.module.css';


export default function WHOAMI() {
  return (
    <main>
        <div className={styles.imagePerformanceContainer}>
    
            <Image src={'/performance_whoami.jpg'}  
            width={1528} 
            height={891} 
            style={{
                width: '100%',
                height: 'auto',
              }}
            alt='image of performance rating for website' 
            quality={100} />
        </div>
    </main>
  )
}
