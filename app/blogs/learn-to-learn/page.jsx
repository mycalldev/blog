'use client'

import styles from './LearnToLearn.module.css'

export default function LearToLearn() {
  return (
    <div>
        <h1 className={styles.titleMain}>Learn To Learn</h1>

        <div className={styles.iframeContainer} >
            <iframe className={styles.iframe} allowFullScreen allow='autoplay' title='example' src={"https://player.vimeo.com/video/886496688?badge=0&amp"}>
            </iframe>
        </div>

        <h2 className={styles.subtitle}>Welcome To the Learn How To Learn Page</h2>
    </div>
  )
}
