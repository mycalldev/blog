import Image from 'next/image';
import Link from 'next/link';
import styles from'./whoami.module.css';


export default function Whoami() {
  return (
    <main>
        <div className={styles.imageHeroContainerMobile}>
            <Image src={'/linux_parrot.jpg'}  
            width={1024} 
            height={1024} 
            style={{
                width: '100%',
                height: 'auto',
              }}
            alt='image of linux parrot for website mobile' 
            quality={100} />
        </div>
        <div className={styles.imageHeroContainerDesktop}>
            <Image src={'/linux_parrot_desktop.jpg'}  
            width={2045} 
            height={786} 
            style={{
                width: '100%',
                height: 'auto',
              }}
            alt='image of linux parrot for website desktop' 
            quality={100} />
        </div>

         <div className={styles.titleMain}>WHOAMI</div>
        <div className={styles.titleTag}>My Journey As a Computer Programmer: 7+ Years of Building Digital Worlds</div>
      
       {/* <div className={styles.contentMain}>Welcome tech enthusiasts! I go by the alias Mycall Dev and 
          I'm excited to share my journey as a computer programmer with you today. 
          With over 7 years in the field, I've had the opportunity to delve into various 
          facets of technology, gaining expertise in Networking, Cyber Security, Linux, 
          and Full Stack Development.
        </div>

        <div className={styles.contentMain}>Welcome tech enthusiasts! I go by the alias <span>Mycall Dev</span> and I'm excited to share my journey as a computer programmer with you today. With over <span>7</span> years in the field, I've had the opportunity to delve into various facets of technology, gaining expertise in Networking, Cyber Security, Linux, and Full Stack Development.</div>
      <div className={styles.titleSub}>Technologies</div>
      <div>
        <ul>
          <li className={styles.listItem}>Vanilla JavaScript</li>
          <li className={styles.listItem}>React JS</li>
          <li className={styles.listItem}>Next JS 13</li>
          <li className={styles.listItem}>HTML & CSS</li>
          <li className={styles.listItem}>Django/Python</li>
          <li className={styles.listItem}>Git Version Control</li>
          <li className={styles.listItem}>Server Congiguration/VPS</li>
          <li className={styles.listItem}>DataBase Configuration/PostgreSQL</li>
          <li className={styles.listItem}>Networking CCNA</li>
          <li className={styles.listItem}>Linux Parrot Security OS</li>
          <li className={styles.listItem}>AI - gptChat/Midjourney</li>
          <li className={styles.listItem}>Music Technology</li>
        </ul>
      </div>

      <div className={styles.titleSub}>Hobbies</div>
      <ul>
          <li className={styles.listItem}>Sport</li>
          <li className={styles.listItem}>Running</li>
          <li className={styles.listItem}>Electrical Engineering</li>
          <li className={styles.listItem}>Mathematics</li>
          <li className={styles.listItem}>Physics/MetaPhysics</li>
          <li className={styles.listItem}>Music</li>
      </ul>

      
      <div className={styles.titleSub}>How I Work</div>
      <div className={styles.contentMain}>I enjoy Learning and Teaching and thereby Learning.... With all my Projects, I initiate a <span>'Performance First Approach'.</span> </div>

        <div className={styles.imagePerformanceContainer}> 
            <Image src={'/performance_whoami.jpg'}  
            width={1528} 
            height={891} 
            style={{
                width: '100%',
                height: 'auto',
              }}
            alt='image of performance rating for website' 
            quality={100} />
        </div>

        <div className={styles.contentMain}>Alongside the Technologies (mentioned above), The greatest skill set I posses is the ability to fastrack my develpmont and the understanding of a construct or concept I am otherwise unfamiliar with....</div>
      <div className={styles.contentMainBold}>For Example:</div>
      <div className={styles.contentMain}> <span>A new programming launguage....</span></div> 
      <div className={styles.contentMain}>I carry this out utilising the resources of today's modern world (internet, books, podcasts, AI) and a formula for learing I have developed (see link at the bottom of the page).</div>
      <div className={styles.contentMain}>In other words, I can reach Point 'A' to Point 'B' expeditiously and with accuracy. I firmly believe this is owed to the nature of me being self taught (in part) and learning to be comfortable with the uncomfortable i.e being calculatd in the state of not knowing and having the experience over the years of understanding that all that is unknown is there to be discovered.</div>
      
      <div className={styles.titleSub}>My Journey</div>
     
      <div className={styles.contentMain}>I started off with a Windows 95 PC at the age of 11 (with the old skool dial up modems and AOL). By 12 years old I began studying HTML, a little CCS and a cracked version of Photoshop. After a year of messing around in chat rooms and learning how the internet worked I moved on to creating music via programmes such as: </div>
      <ul className={styles.ulContainer}>
          <li className={styles.listItem}>Fruity Loops</li>
          <li className={styles.listItem}>Cubase</li>
          <li className={styles.listItem}>Reason</li>
          <li className={styles.listItem}>Logic</li>
        </ul>
        
      <div className={styles.contentMain}>Created a few tracks and Mastered a few Dub-Plates by the age of 15. At the same time I was an MC (Microphone Controller/Rapper) on several pirate radio staions and performing at night clubs with an age restriction of over 18 whilst only being 16 years old.  </div>
      <div className={styles.contentMain}>Prior to this - during my school era - I was center stage performing (rapping) with the Royal Philharmonic Orchestra in front of a full capacity audience at the Royal Festival Hall. I was well accustomed by now to perform in front of big crowds and went on to rap at several large venues.</div>
      
      <div className={styles.imageMicrophoneContainer}>
            <Image src={'/microphone.jpg'}  
            width={500} 
            height={500} 
            style={{
                width: '100%',
                height: 'auto',
              }}
            alt='image of a podcast microphone' 
            quality={100} />
      </div>
      
      <div className={styles.contentMain}>At the age of 16 I was selected for a Football Academy that required training 3 times a week and College twice a week. I choose Mucic Technology as my subject and carried on with musical performances at the college and several other theaters. During my College days a friend of mine and myself started to promote events at particualr nightclubs. This opened my eyes up to the Marketing world (before Social Media). Designing billboard posters, promotional flyers, tickets.... etc. The promotional events were a success, having carried out the first event at the age of 17 - and the event having an age policy of being over 18s only.... lol.... </div>
      <div className={styles.contentMain}>For several reasons I decided to pick up a Trade and became a builder. Eventually, all my time was allocated to the building work and the Technological side of my mind took a back seat. I started a successful business in the building trade and worked up until my 30s. However, something just didn't feel right and my attention to detail and fastidious nature, along with that voice in your head, kept telling me to return to Technology.</div>
      <div className={styles.contentMainBold}>So.... I made the transition! Closed the building business and put all my eggs into the computational basket. </div>
      
      
      <div className={styles.imageDolphinContainer}>
            <Image src={'/dolphin.png'}  
            width={1024} 
            height={1024} 
            style={{
                width: '100%',
                height: 'auto',
              }}
            alt='image of a dolphin witha computer' 
            quality={100} />
      </div>

      <div className={styles.contentMain}>The journey from here on out was not smooth to say the least. Although, through discipline, tenacity, and a great support network - in terms of colleagues and family - I have been privileged to follow my passion.</div>
      <div className={styles.titleSub}>Moving Forward</div>
     
      <div className={styles.contentMain}>I picked up from where I left off in my early adolescence; first re engaging with HTML and CSS. Thereafter, I studied python for a brief period and then made a progressive move to join a very unique Bootcamp:</div> 
      <div className={styles.contentMain}> Construstor Labs - https://constructorlabs.com/</div> 
      <div className={styles.imageConstructorLabsContainer}>
        <Image src={'/constructor.png'} 
          width={399} 
          height={366}
          style={{
            width: '100%',
            height: 'auto',
          }} 
          quality={100} 
          alt={'constructor labs logo'} 
        />
      </div>
      <div className={styles.contentMain}> I say unique because it was set out differently from all of the other mainstream Bootcamps. The sole intention of Constructor Labs and the head of Teaching (Dmitri Brabov) was to teach Javascript (vanilla), React, Redux, Node, PostgreSQL and Git/Github all in the space of 12 weeks. And this was a near insurmountable task. Although, hats off to Dmitri; he pulled it off, and his teaching style was with very little hand holding. </div>
      <div className={styles.contentMain}>With the benefit of hindsight I can now see that Dmitri was no time waster and his teaching style was such that if you were meant to be a computer programmer then you needed to work things out for yourself.</div> 
      <div className={styles.contentMainBold}>It was here that I learned a very valuable lesson….  Google (the art of working things out for yourself).</div>
      <div className={styles.contentMain}>Sleeves rolled up and ready for action, 18 students proceeded into the 12 week, full-time 10 hours a day Bootcamp.</div>  
      <div className={styles.contentMainBold}>And I am forever owing to this opportunity. </div>
      <div className={styles.contentMain}>After a couple months of assimilating all of what was previously digested, I attained the position of a backend engineer at Fidel API (A fintech company focused on handling sensitive PCI 1 compliant data). Fidel API is a B to B startup, and I was afforded the opportunity to work freely on what was most productive for the company. This tested my iniative and instilled an unwavering desire to achieve from my own merit. It was known as 'ownership'.... coupled with a sigh of relief once the CEO and CTO realised a colleagues potential (lol....).</div>
      <div className={styles.contentMain}> The backend Tech Stack was <span>AWS</span> and <span>Node JS</span>. I predominantly worked on building out the endpoints for the API and progressed and enjoyed the environment of collaborating with my technological counterparts.</div>
      <div className={styles.contentMain}>Its fair to say that I excelled at my position with Fidel API, although unbeknown to me ill health was waiting around the corner of my life's journey. My hand was forced and it was with a heavy heart that I had to resign. To this day I am in contact with the CEO (Dev Subrata) and he has achieved unbelievable success with the company. I am not surprised because he was very astute combined with great insight and business acumen.</div>
      <div className={styles.contentMain}>Working at Fidel API is where everything fell into place  (programmatically speaking).... The penny had finally dropped. I witnessed and contributed to a variety of collaborative tasks, in and out of programming, which in turn built my confidence and skillset. It was now apparent to me that I could be classified as a computer programmer in the year of 2018/19. </div>
      <div className={styles.contentMain}>From here on out I have been working full/part-time as a freelancer. I enjoy the granularity of programming and prefer to use as few dependencies as can be. I thrive at fixing bugs and dive deep into the language or framework I am using. I always want to know why and how something works and am never satisfied with copy and paste. In my experience, if there is a line of code that you do not fully understand, it is always that line that returns to bite you on the gluteus maximus. </div>
      <div className={styles.contentMain}>In respect to all of the technologies I have learned along my journey, I focus a significant amount of time on learning how to learn efficiently. My past experiences have taught me the importance of learning efficiently; especially in todays world of an ever exponential rate of change….</div>


      <div className={styles.enticeTag}>Check out the formula for learning in my 'Learn Why and How To Learn' Article</div> */}
      
      {/* <Link href={'/#'} className={styles.linkBTN}>
            <div className={styles.guidesBTN}>Learn To Learn</div>
      </Link> */}
    </main>
  )
}
