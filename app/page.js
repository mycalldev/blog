import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";


export default function Home() {
  

  return (
    <main className={styles.container}>

      <div>
        {/* HERO SECTION */}
        <div>
            <Image src={"/image_hero.jpeg"} className={styles.imageHero} width={1456} height={816} alt="hero image" quality={100} />
        </div>
            
        {/* SECTION 2 */}
        <h2 className={styles.welcomeTitle}>WELCOME TO THE LATEST TECH PODCAST</h2>
        <div className={styles.imageMicrophoneContainer}>
            <Image src={"/home/microphone.jpg"} className={styles.imageMicrophone} width={1456} height={816} alt="hero image" quality={100} />
        </div>
        <h3 className={styles.enticeQuestion}>
          DO YOU HAVE AN <span>INTEREST</span> IN LEARNING?
        </h3>
        <p className={styles.subjectsMain}>
          Computer Programming, Networking,
          Cyber Security, Artificial Intelligence, 
          Electrical Engineering, Mathematics and Physics
        </p>

        <div>
          <Image src={'/headphones_flash.png'} className={styles.imageHeadphones} width={1024} height={1024} alt="headphones image" quality={100} />
        </div>
        
        <h4 className={styles.weCover}>WE COVER A WIDE RANGE OF TOPICS IN SHORT SOUND BYTES</h4>


        <div className={styles.imageLearningContainer}>
          <div className={styles.latestEpisodeContainer}>
            <Link href={'/blogs/learn-to-learn'} className={styles.linkBTN} prefetch={true}>
              <div className={styles.latestBTN}>
                OUR LATEST EPISODE
              </div>
            <Image src={"/home/learning_episode1.png"} className={styles.imageLearning} width={1024} height={677} alt="Episode 1 Learning Image" quality={100} />
                <div className={styles.listenBTN}>
                  TUNE IN....
                </div>
            </Link>
          </div>
            
        </div>

        <div className={styles.containerPodcastContent}>
          <div className={styles.contentPodContainer}>
            <div className={styles.titlePod}>Title:</div>
            <div className={styles.titleOfPodcast}>Learn how to Learn</div>
          </div>
          <div className={styles.contentPodContainer}>
            <div className={styles.titlePodDescription}>Description:</div>
            <div className={styles.podDescription}>
              Our Latest Episode Reveals the 7 Step Formula....
            </div>
          </div>
          <div className={styles.contentPodContainers}>
            <div className={styles.duration}>Duration:</div>
            <div className={styles.durationTime}>22 Minutes</div>
          </div>
        </div>

        <div className={styles.imageGuidesContainer}>
            <Image src={"/guides_cogs_cropped.png"} className={styles.imageGuides} width={1454} height={452} alt="guides image banner" quality={100} />
            <Link href={'/#'} className={styles.linkBTN} prefetch={true}>
              <div className={styles.guidesBTN}>
              CHECK OUT OUR GUIDES
              </div>
            </Link>
        </div>
  
      </div>
      
    </main>
  );
}


