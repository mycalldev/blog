import Image from 'next/image';
import Link from 'next/link';
import styles from './guides.module.css';

async function getGuides() {
    
    const res = await fetch('https://www.mycalldevcp.co.uk/api/podcasts', {
        next: {
            revalidate: 30
        }
    })
    const data = await res.json()
    
    return data
}

export default async function Guides() {
  
    const guides = await getGuides()

    return (
        <main>
            <Image src={'/guides/guide_hero_mobile.jpg'} 
            width={1456} 
            height={816} 
            style={{
                width: '100%',
                height: 'auto',
              }}
            className={styles.imageHero} 
            alt='hero image for guides categroy' 
            quality={100} />

            <h1 className={styles.titleMain}>GUIDES COLLECTION</h1>

            
            {guides.map((guide) => (
                <div key={guide._id} className={styles.mainContainer}>
                    <div className={styles.imageThumbnailContainer}>
                    <Link href={`/guides/${guide._id}`} prefetch={true} >
                            <div className={styles.imageBlogContanier}>
                                <Image 
                                    src={`/guides/${guide.imageThumbnail}.jpg`} 
                                    width={1456} 
                                    height={816} 
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                      }}
                                    alt='thumbnail of guide image' 
                                    quality={100} 
                                />  
                            </div>
                        </Link>
                        <div className={styles.contentContainer}>
                        <div className={styles.flexReadTime}>
                            <div className={styles.readTime}>Duration:</div> 
                            <div>{guide.minuteRead} minutes</div>
                        </div>
                        <div className={styles.podcastTitle}>{guide.podcastTitle}</div>
                        <div className={styles.podcastSubTitle1}>{guide.tagTeaser}</div>  
                    </div>
                    <Link href={`/guides/${guide._id}`} className={styles.linkBTN}>
                        <div className={styles.readBTN}>Listen</div>
                    </Link>
                    </div>

                    
                </div>
            ))}
            
        </main>
    )
}
