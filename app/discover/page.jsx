import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "./discover.module.css";
import Footer from "../components/Footer";

export default function Discover() {
  return (
    <div>
        <Head>
        <title>MYCALLDEV</title>
        <meta name="MYCALL DEV" content="Discover The Unknown" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mycall Dev" />
        <meta property="og:description" content="Discover The Unknown" />
        <meta property="og:url" content="https://www.mycalldev.com/" />
        <meta property="og:site_name" content="MYCALL DEV" />
        {/* <meta property="og:image" content="https://www.mycalldev.com/keyboard.jpg" /> */}
        {/* <meta property="og:image:width" content="728" />
        <meta property="og:image:height" content="408" /> */}
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0" />
      </Head>

      {/* HERO SECTION */}
      <h1 className={styles.titleMain}>Discover the Unknown</h1>

      <div className={styles.contentMain}>Is there an abundance of untapped knowledge that surrounds us? And if so, is there a structured way to seek out this knowledge?</div>
      <div className={styles.heroContainer}>
        <Image src={"/cropped_info_discovery.jpg"} className={styles.heroContainer} width={798} height={1329} alt='hero image' quality={100}/>
      </div>

      <h2 className={styles.subTitle}>The Flow of Knowledge</h2>

      <div className={styles.contentDescription}>
        <span>Number 1:</span> What you know.... is always being supplemented 
        and added to, when you learn subjects and topics of which 
        you don’t know although are aware of 
        i.e those that exist in Number 2's circle of knowledge.
      </div>
      <div className={styles.contentDescription}>
      <span>Number 2:</span> What you don’t know.... and are aware of is the precursor to discovery. Studying subject matter, constructs and concepts of material that you are aware of although do not understand will open up the gates of Number 3's circle of knowledge. 
      </div>

      <div className={styles.contentDescription}>
      <span>Number 3:</span> Keep working away at Number 2's circle and your inquisitive 
        nature will engage thought provocations to initiate the 
        discovery of the unaware and unknown into the aware. 
        Immediately thereafter, Number 2's circle of knowledge 
        is populated as a direct consequence.  Number 3's circle of 
        knowledge is empty in our minds for 99.99% recurring, 
        as the moment the unaware and unknown becomes aware, 
        it falls directly into Number 2's circle of knowledge.
      </div>



      <h2 className={styles.brainTeaser}>Brain Teaser:</h2>

      <div>
        <Image src={"/brain_teaser.png"} className={styles.heroContainer} width={1456} height={816} alt='image of brain teaser' quality={100}/>
      </div>

      <div className={styles.contentDescription}>
        From an early age I have been fascinated with discoveries and even spotting anomalies in our everyday lives that rest before us, hidden from our awareness.  
      </div>

      <div className={styles.contentDescription}>
        Take for example the numbers 13 and 15. All these numbers are spelled and spoken using the past tense as their prefix i.e third-teen and fifth-teen. We should, if by following the english convention of language, pronounce the prefix of the 
        numbers 13 and 15 in their respective present tense:
      </div> 

      <ul className={styles.unorderedList}>
        <li className={styles.listItem}>
           <span>Three</span>-teen
        </li>
        <li className={styles.listItem}>Four-teen</li>
        <li className={styles.listItem}><span>Five</span>-teen</li>
        <li className={styles.listItem}>Six-teen</li>
        <li className={styles.listItem}>Seven-teen</li>
        <li className={styles.listItem}>Eight-teen</li>
        <li className={styles.listItem}>Nine-teen</li>
      </ul>

      <div className={styles.contentDescription}>
        These numbers, for some reason, are utilising their past tense as the prefix. 
        What is the reason for this and why?
      </div> 
      
      <div className={styles.contentDescription}>
        Is this just an anomaly or is there a deeper meaning 
        inherited by the evolution of the English language insofar as 
        numbers are concerned?
      </div> 

      <div className={styles.contentDescription}>
        Further to this point, let’s look at the numbers 30 and 50….</div> 
      
      <div className={styles.contentDescription}>
        Now you can see where I am going with this. 
        They also use their past tense as the prefix i.e <span>thir</span>-ty and <span>fifth</span>-ty. Again, in alignment with the English language, 
        30 and 50 should use their present tense as the prefix: 
      </div>

      <ul className={styles.unorderedList}>
        <li className={styles.listItem}>
           <span>Three</span>-ty
        </li>
        <li className={styles.listItem}>Four-ty</li>
        <li className={styles.listItem}><span>Five</span>-ty</li>
        <li className={styles.listItem}>Six-ty</li>
        <li className={styles.listItem}>Seven-ty</li>
        <li className={styles.listItem}>Eight-ty</li>
        <li className={styles.listItem}>Nine-ty</li>
      </ul>

      <div className={styles.question}>
      This begs the question: </div>
     
      <div className={styles.contentDescription}>
        Is there a special mathematical, 
        metaphysical, linguistic or historical meaning attached to the 
        numbers 3 and 5? And possibly more accurately to the point, 
        the numbers 13, 15, 30 and 50.
      </div>

      <Footer />
   
    </div>
  )
}
