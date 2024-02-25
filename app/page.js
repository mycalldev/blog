
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

async function getContents() {
    
  const res = await fetch('https://www.mycalldevcp.co.uk/api/content', {
      next: {
          revalidate: 30
      }
  })
  const data = await res.json()
  
  return data
}


export default async function Home() {

  const Contents = await getContents()
  
  return (
    <main>
     <h2 className={styles.titleHeader}>
          Documentation in the form of Blogs & Guides
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

        <div className={styles.container}>

        <ul>
        <p className={styles.title}>Cyber Security</p>
        <p className={styles.title}>Network Engineering</p>
        <p className={styles.title}>Software Development & Scripting</p>
        </ul>

        </div>

        <div className={styles.containerBlogMain}>
        {Contents.map((content) => (
                <div key={content._id} className={styles.containerBlog}>
                        <h4 className={styles.contentMeta}>Published: {`${content.published}/${content.contentTag}`}</h4>
                          <Link href={`/content/${content.contentTitleBackend}`} prefetch={true}>
                            <div className={styles.imageBlogContanier}>
                              <Image 
                                  src={`/content/${content.imageThumbnail}/${content.imageThumbnail}.jpg`} 
                                  width={1456} 
                                  height={816} 
                                  className={styles.image}
                                  alt='thumbnail of image' 
                                  quality={100} 
                              />  
                            </div>
                          </Link>
                          
                        <div className={styles.titleBlog}>{content.contentTitleFrontend}</div>
                           
                        <Link href={`/content/${content.contentTitleBackend}`} className={styles.linkBTN} prefetch={true}>
                            <div className={styles.contentCTA}>
                              Take a Peek
                            </div>
                        </Link>
                          
                              
                
                </div>
            ))}
          </div>

      
    </main>
  );
}
