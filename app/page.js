
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  
  return (
    <main>
     <h2 className={styles.titleHeader}>
          A Developer, Creater, Breaker and Maker....
      </h2>
      
      {/* HERO SECTION MOBILE */}
      <div className={styles.imageDolphinContainer}>
          <Image 
            src={"/home/dolphin.png"} 
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
  

      <div className={styles.containerBanner}>
        <div className={styles.banner}>Mentorship Academy</div>
        <Image src={'/images/idea.png'} className={styles.imageIdeaIcon} width={128} height={128} quality={100} alt="idea icon" />
      </div>
       
    </main>
  );
}
