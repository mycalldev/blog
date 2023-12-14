'use client'

import Image from "next/image";
import Link from "next/link";
import styles from './PodcastDetails.module.css';

export default function PodcastDetails({ PodcastDetails }) {
  return (
    <div>
        <div className={styles.mainContainer}>
          <div className={styles.imageThumbnailContainer}>
              <Link href={'/#'} prefetch={true} >
                  <div className={styles.imageBlogContanier}>
                      {/* <Image 
                          src={`/podcasts/learning_episode1.png`} 
                          width={1024} 
                          height={677} 
                          style={{
                              width: '100%',
                              height: 'auto',
                            }}
                          alt='thumbnail of podcast video thumbnail' 
                          quality={100} 
                      />   */}
                       <div className={styles.iframeContainer} >
                        <iframe className={styles.iframe} allowFullScreen allow='autoplay' title='example' src={PodcastDetails.imageRef1}>
                        </iframe>
                       </div>
                  </div>
              </Link>
          </div>

          <div className={styles.contentContainer}>
              <div className={styles.flexReadTime}>
                  <div className={styles.readTime}>Duration:</div> 
                  <div>{PodcastDetails.minuteRead} Minutes</div>
              </div>
              <div className={styles.podTitle}>{PodcastDetails.podcastTitle}</div>
              <div className={styles.podTeaser}>{PodcastDetails.tagCompletion}</div>  
          </div>
          {/* <Link href={`/#`} className={styles.linkBTN}>
              <div className={styles.readBTN}>Listen</div>
          </Link> */}
        </div>
    </div>
  )
}
