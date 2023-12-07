'use client'

import styles from './LearnToLearn.module.css'

export default function LearToLearn() {
  return (
    <div>
        <h1 className={styles.titleMain}>Learn To Learn</h1>

        <div className={styles.iframeContainer} >
            <iframe className={styles.iframe} allowFullScreen allow='autoplay' title='example' src={"https://player.vimeo.com/video/886827872?h=2487a4b45d"}>
            </iframe>
        </div>

        <h2 className={styles.subtitle}>Welcome To the Learn How To Learn Page</h2>
    </div>
  )
}

{/* <iframe src="https://player.vimeo.com/video/886827872?h=2487a4b45d" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> */}