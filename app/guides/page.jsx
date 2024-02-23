import Image from 'next/image';
import Link from 'next/link';
import styles from './blogs.module.css';

async function getGuides() {
    
    const res = await fetch('https://www.mycalldevcp.co.uk/api/guides', {
        next: {
            revalidate: 30
        }
    })
    const data = await res.json()
    
    return data
}

export default async function guides() {
  
    const Blogs = await getGuides()

    return (
        <main>
            
            <Image src={'/category_banner/computer_library_cropped.png'} 
                width={1456} 
                height={816} 
                className={styles.image} 
                alt='hero image for blogs categroy' 
                quality={100} 
            />

            <h1 className={styles.titleMain}>BLOGS COLLECTION</h1>

            <div className={styles.grid}>

           
            {Blogs.map((blog) => (
                <div key={blog._id} className={styles.containerMain}>
                        <div className={styles.imageBlogContanier}>
                          <Link href={`/blogs/${blog.blogTitleBackend}`} prefetch={true}>
                            <Image 
                                src={`/A-THUMBNAIL-IMAGES/${blog.imageThumbnail}.jpg`} 
                                width={1456} 
                                height={816} 
                                className={styles.image}
                                alt='thumbnail of blog image' 
                                quality={100} 
                            />  
                          </Link>
                        </div>

                         <div>
                        <div className={styles.blogTitle}>{blog.blogTitleFrontend}</div>
                        <div className={styles.flexReadTime}>
                            <div className={styles.readTime}>Read Time:</div> 
                            <div>{blog.minuteRead} minutes</div>
                        </div>   
                             <Link href={`/blogs/${blog.blogTitleBackend}`} className={styles.linkBTN}>
                                <div className={styles.readBTN}>Take a Peek</div>
                             </Link>
                             </div>
                              
                
                </div>
            ))}
             </div>
        </main>
    )
}
 
