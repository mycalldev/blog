import React from 'react'
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/contentPage.module.css";


export default function WebAppAttacks() {
  return (
    <main>

    {/* HERO SECTION */}
    <div className={styles.containerImageFullWidth}>
          <Image 
              src={"/content/Web_App_Attacks/Web_App_Attacks.jpg"} 
              width={1456} 
              height={816}
              className={styles.image}
              alt='image hero' 
              quality={100}
          />
      </div>

      <div className={styles.container}>

        <div className={styles.linkBack}>
          <Link href={'/'} className={styles.linkBTN}>
            {'< Home'}
          </Link>
        </div>
        
        <div className={styles.contentMeta}>
          <div>Updated: 8th February 2024</div>
          <div>Read Time: 2 minutes</div>
        </div>

        <div className={styles.title}>WEB APPLICATION ATTACKS</div>
       

        
        <div className={styles.contentMainThick}>
            There are a number of methods an attacker can use to penetration test a web application. 
        </div>
        <div className={styles.headerSub}>
            Attacks:
        </div>
    
        
        <ul>
            <li className={styles.listItem}>Path Traversal or Directory Traversal</li>
            <li className={styles.listItem}>Broken Access Control</li>
            <li className={styles.listItem}>Server Side Request Forgery (SSRF)</li>
            <li className={styles.listItem}>Cross Site Scripting (XSS)</li>
            <li className={styles.listItem}>Brute Force</li>
            <li className={styles.listItem}>SQL Injection Attacks</li>
            <li className={styles.listItem}>OS Command Injection</li>
            <li className={styles.listItem}>Insecure Direct Object References (IDOR)</li>
        </ul>

        <div className={styles.contentMain}>
         The above are just a few to look out for. This post will be updated in the coming days with more attacks.
         </div>
    </div>
    </main>
  )
}
