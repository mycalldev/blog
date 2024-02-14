import React from 'react'
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/blogPage.module.css";


export default function ssrf() {
  return (
    <main>

    {/* HERO SECTION */}
    <div className={styles.containerImageFullWidth}>
          <Image 
              src={"/blogs/ssrf_hero.jpg"} 
              width={1456} 
              height={816}
              className={styles.image}
              alt='image hero' 
              quality={100}
          />
      </div>

      <div className={styles.container}>

        <div className={styles.linkBack}>
          <Link href={'/blogs'} className={styles.linkBTN}>
            {'< Blogs'}
          </Link>
        </div>
        
        <div className={styles.contentMeta}>
          <div>Updated: 13th February 2024</div>
          <div>Read Time: 2 minutes</div>
        </div>

        <div className={styles.title}>Server Side Request Forgery</div>
       
        <div className={styles.titleSub}>Access to a Server inside your Local Town.... or Host?</div>



        <div className={styles.headerSub}>
            SSRF:
        </div>
    
        
       

        <div className={styles.contentMain}>
         Server Side Request Forgery, in simple terms, is hoodwinking the server of an application to carry out instructions without the necessary authentication to do so. 
         If the required protections are not in place then an attacker and/or ethical hacker could potentially gain access and control several parts of the application. 
         </div>

        <div className={styles.contentMain}>
            As a simple example of such, the server of an application may act on requests from the localhost. From the server&apos;s perpective, the rationale behind this is that the localhost is a trusted device.
            There are a few reasons why such server may not be configured to block requests from localhost.  
        </div>

        <div className={styles.headerSub}>
            Example:
        </div>
    
        <div className={styles.contentMain}>
            If an administrator of an application was to lose the administrative credentials, 
            they would leave an obsensible safety net in place whereby the application can be accesed via the locahost without the requirement for logging in. 
            Thats right.... No credentials required....
        </div>

        <div className={styles.contentMain}>
            This would equate to full administrative access for the lucky admin who lost the loggin credentials. On the face of it, you would think this is a smart move from the Administrator. 
            Thats until you realise that requests from the application to the server can be intercepted by an unknown third party and reconfigured to mascarade as the localhost. Thereafter, converting the Administrator&apos;s safety net into a potentially critical vulnerability.
        </div>

        <div className={styles.headerSub}>
            How:
        </div>

        <div className={styles.contentMain}>
            To Be Continued.... 
        </div>

   
    </div>
    </main>
  )
}
