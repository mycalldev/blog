
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
              src={"/home/waves_hero.jpg"} 
              width={1534} 
              height={666} 
              className={styles.imageHeroMobile} 
              alt='hero image Mobile' 
              quality={100} 
            />
        </div>
             
        {/* SECTION 2 */}
        <h2 className={styles.enticeQuestion}>
          DO YOU HAVE AN <span>INTEREST</span> IN LEARNING?
        </h2>
        <h3 className={styles.subInfo}>A Library full of technological goodies in the form of Tutorial Guides and Blogs....</h3>
        <div className={styles.imageDolphinContainer}>
            <Image 
              src={"/dolphin.png"} 
              className={styles.imageDolphin} 
              width={400} 
              height={400} 
              alt="image of dolphin" 
              quality={100} 
            />
        </div>

        <h4 className={styles.divingIn}>DIVING DEEP INTO THE WORLD OF:</h4>
        <p className={styles.subjectsMain}>
            Cyber Security, Computer Programming, Networking,
          
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
        
        <Link href={'/blogs'} className={styles.linkBTN} prefetch={true}>
            <div className={styles.buttonCTA}>
              LATEST BLOGS
            </div>
        </Link>
      
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
                <div className={styles.podTitle}>Learn How to Learn</div>
                <div className={styles.contentMeta}>Published: 6th February 2024</div>
                <div className={styles.contentMeta}>Read Time: 5 Minutes</div>
            </div>
            <Link href={`/blogs/learnTolearn`} className={styles.linkBTN} prefetch={true}>
                <div className={styles.buttonCTA}>Take a Peek</div>
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
                  
                  <div className={styles.podTitle}>WHOAMI</div>
                  <div className={styles.contentMeta}>Published: 6th February 2024</div>
                  <div className={styles.contentMeta}>Read Time: 5 Minutes</div>
              </div>
              <Link href={`/blogs/whoami`} className={styles.linkBTN}>
                  <div className={styles.buttonCTA}>Take a Peek</div>
              </Link>
            </div>
        </div>

        {/* <div className={styles.imageGuidesContainer}>
            <Image 
              src={"/guides_cogs_cropped.png"} 
              className={styles.imageGuides} 
              width={1454} 
              height={452} 
              alt="guides image banner" 
              quality={100} 
            />
        </div> */}

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
