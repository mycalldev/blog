
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  
  return (
    <main>
     <h2 className={styles.titleHeader}>
          A Developer, Creator, Breaker and Maker....
      </h2>
      
      {/* HERO SECTION MOBILE */}
      <div className={styles.imageDolphinContainer}>
          <Image 
            src={"/images/dolphin.jpg"} 
            className={styles.imageDolphin} 
            width={400} 
            height={400} 
            alt="image of dolphin" 
            quality={100} 
            />
      </div>

      <ul className={styles.contentTag}>
        <p className={styles.title}>Cyber Security</p>
        <p className={styles.title}>Network Engineering</p>
        <p className={styles.title}>Software Development & Scripting</p>
      </ul>
  

     
       
    </main>
  );
}
