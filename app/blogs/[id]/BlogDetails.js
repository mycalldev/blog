'use client'

import Image from "next/image";
import Link from "next/link";
import styles from './BlogDetails.module.css';


export default function BlogDetails( { blogDetails } ) {

  return (
    <main>
        <div className={styles.imageBlogContanier}>
          <Image 
              src={`/blogs/${blogDetails.imageRef1}.JPG`} 
              width={1456} 
              height={816} 
              style={{
                  width: '100%',
                  height: 'auto',
                }}
              alt='thumbnail of blog image' 
              quality={100} 
          />  
        </div>

        <div className={styles.titleMain}>
            <h1>{blogDetails.blogTitle}</h1>
            <p className={styles.tagCompletion}>{blogDetails.tagCompletion}</p>
        </div>

        <div className={styles.contentMain}>
{/* SUBTITLE 1 */}
          <div className={blogDetails.subTitle1 ? styles.subTitle1 : styles.displayNone}>
            {blogDetails.subTitle1}
          </div>
{/* DESCRIPTION 1 */}
            <div className={blogDetails.description1 ? styles.description1 : styles.displayNone}>
              {blogDetails.description1}
            </div>
{/* DESCRIPTION 2 */}
          <div className={blogDetails.description2 ? styles.description2 : styles.displayNone}>
            {blogDetails.description2}
          </div>
{/* DESCRIPTION 3 */}
          <div className={blogDetails.description3 ? styles.description3 : styles.displayNone}>
            {blogDetails.description3}
          </div>
{/* SUBTITLE 2 */}
          <div className={blogDetails.subTitle2 ? styles.subTitle2 : styles.displayNone}>
            {blogDetails.subTitle2}
          </div>
{/* IMAGEREF 2 */}
          <div className={styles.imageRef2Container}>
           <Image 
              src={`/blogs/${blogDetails.imageRef2}.JPG`} 
              width={1456} 
              height={816} 
              style={{
                  width: '100%',
                  height: 'auto',
                }}
              alt='thumbnail of blog image' 
              quality={100} 
            />  
          </div>
         

          
          <div>{blogDetails.subTitle3}</div>
          <div>{blogDetails.subTitle4}</div>


        </div>
    </main>
  )
}
