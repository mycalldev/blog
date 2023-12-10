import Image from 'next/image';
import Link from 'next/link';
import styles from './blogs.module.css';

async function getBlogs() {
    
    const res = await fetch('https://www.mycalldevcp.co.uk/api/blogs', {
        next: {
            revalidate: 30
        }
    })
    const data = await res.json()
    
    return data
}

export default async function Blogs() {
  
    const blogs = await getBlogs()

    return (
        <main>
            <Image src={'/category_banner/computer_library_cropped.png'} 
            width={1456} 
            height={267} 
            className={styles.imageHero} 
            alt='hero image for blogs categroy' 
            quality={100} />

            <h1 className={styles.titleMain}>BLOGS COLLECTION</h1>

            
            {blogs.map((blog) => (
                <div key={blog._id} className={styles.mainContainer}>
                    <div className={styles.imageThumbnailContainer}>
                        <Link href={`/blogs/${blog._id}`} prefetch={true} >
                            <div className={styles.imageBlogContanier}>
                                <Image 
                                    src={`/blogs/${blog.imageRef1}.JPG`} 
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
                        </Link>
                    </div>

                    <div className={styles.contentContainer}>
                        <div className={styles.flexReadTime}>
                            <div className={styles.readTime}>Read Time:</div> 
                            <div>{blog.minuteRead} minutes</div>
                        </div>
                        <div className={styles.blogTitle}>{blog.blogTitle}</div>
                        <div className={styles.blogSubTitle1}>{blog.tagTeaser}</div>  
                    </div>
                    <Link href={`/blogs/${blog._id}`} className={styles.linkBTN}>
                        <div className={styles.readBTN}>Read More</div>
                    </Link>
                </div>
            ))}
            
        </main>
    )
}
