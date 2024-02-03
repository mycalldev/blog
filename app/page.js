
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";


export default function Home() {
  
  return (
    <main className={styles.container}>
      

      <div>
        {/* HERO SECTION MOBILE */}
        <div className={styles.heroContainerMobile}>
            <Image 
              src={"/podcasts/hero_waves.jpg"} 
              width={1920} 
              height={1080} 
              className={styles.imageHeroMobile} 
              alt='hero image Mobile' 
              quality={100} 
            />
        </div>

        {/* HERO SECTION DESKTOP */}
        <div className={styles.heroContainerDesktop}>
            <Image src={"/hero_waves_cropped.jpeg"} 
              width={1920} 
              height={831} 
              className={styles.imageHeroDesktop} 
              alt='hero image Desktop' 
              quality={100}
            />
        </div>
             
        {/* SECTION 2 */}
        <h2 className={styles.welcomeTitle}>WELCOME TO THE LATEST TECH GUIDE</h2>
        <h3 className={styles.welcomeSubTitle}>A Library full of technological goodies in the form of Vlogs and Blogs....</h3>
        <div className={styles.imageMicrophoneContainer}>
            <Image 
              src={"/home/microphone.jpg"} 
              className={styles.imageMicrophone} 
              width={1456} 
              height={816} 
              alt="hero image" 
              quality={100} 
            />
        </div>

        <h3 className={styles.enticeQuestion}>
          DO YOU HAVE AN <span>INTEREST</span> IN LEARNING?
        </h3>
        <h4 className={styles.divingIn}>I&apos;M DIVING DEEP INTO:</h4>
        <p className={styles.subjectsMain}>
          Computer Programming, Networking,
          Cyber Security, Artificial Intelligence, 
          Electrical Engineering, Mathematics and Physics
        </p>

        <div className={styles.imageComputerBlueContainer}>
          <Image src={'/home/computer_blue.jpg'} 
            className={styles.imageComputerBlue} 
            width={1456} 
            height={816} 
            alt="computer image" 
            quality={100} 
          />
        </div>
        
      
        <div className={styles.mainContainer}>
{/* MOBILE VERSION */}
            <div className={styles.imageThumbnailContainer}>
                <Link href={'/learnTolearn'} prefetch={true} >
                    <div className={styles.imageBlogContanier}>
                        <Image 
                            src={`/learning.jpg`} 
                            width={1024} 
                            height={677} 
                            style={{
                                width: '100%',
                                height: 'auto',
                              }}
                            alt='thumbnail of Learn to Learn blog image' 
                            quality={100} 
                        />  
                    </div>
                </Link>
            <div className={styles.contentContainer}>
                <div className={styles.flexReadTime}>
                    <div className={styles.readTime}>Read Time:</div> 
                    <div>9 minutes</div>
                </div>
                <div className={styles.podTitle}>Learn How to Learn</div>
                <div className={styles.podTeaser}>The 7 Step Formula</div>  
            </div>
            <Link href={`/blogs/learnTolearn`} className={styles.linkBTN} prefetch={true}>
                <div className={styles.readBTN}>Read More</div>
            </Link>
          </div>

{/* DESKTOP VERSION */}
            <div className={styles.imageThumbnailContainerDesktop}>
                  <Link href={'/blogs/whoami'} prefetch={true} >
                      <div className={styles.imageBlogContanier}>
                          <Image 
                              src={`/linux_parrot_home.jpg`} 
                              width={1024} 
                              height={677} 
                              style={{
                                  width: '100%',
                                  height: 'auto',
                                }}
                              alt='thumbnail of Whoami blog image' 
                              quality={100} 
                          />  
                      </div>
                  </Link>
                  <div className={styles.contentContainer}>
                  <div className={styles.flexReadTime}>
                      <div className={styles.readTime}>Read Time:</div> 
                      <div>7 minutes</div>
                  </div>
                  <div className={styles.podTitle}>WHOAMI</div>
                  <div className={styles.podTeaser}>My Unconventioanl Journey to Tech</div>  
              </div>
              <Link href={`/blogs/whoami`} className={styles.linkBTN}>
                  <div className={styles.readBTN}>Read More</div>
              </Link>
            </div>
        </div>

        <div className={styles.imageGuidesContainer}>
            <Image 
              src={"/guides_cogs_cropped.png"} 
              className={styles.imageGuides} 
              width={1454} 
              height={452} 
              alt="guides image banner" 
              quality={100} 
            />

            <Link href={'/blogs'} className={styles.linkBTN} prefetch={true}>
              <div className={styles.guidesBTNContainer}>
                <div className={styles.guidesBTN}>
                 LATEST BLOGS
                </div>
              </div>
             
            </Link>
        </div>

        <div className={styles.imageCogsContainer}>
          <Image 
            src={"/home/tech_stack.jpg"} 
            width={1024} 
            height={779} 
            className={styles.imageCogs} 
            alt="Tech Stack for Mycall Dev"
            quality={100}
          />
          <div className={styles.techStackTitle}>TECH STACK FOR MYCALL DEV </div>
        </div>

        <div className={styles.listItemsContainer}>
          <ul className={styles.unorderedList}>
            <li className={styles.listItem}>Django for the Backend</li>
            <li className={styles.listItem}>Next JS for the Frontend</li>
            <li className={styles.listItem}>Vanilla CSS for Design</li>
            <li className={styles.listItem}>Virtual Private Server for Speed</li>
            <li className={styles.listItem}>Postgresql for the Database</li>
            <li className={styles.listItem}>AI generated Images</li>

          </ul>
        </div>
  
      </div>
      
    </main>
  );
}
