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
              src={"/blogs/art_of_development.jpg"} 
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
          <div>Updated: 22th February 2024</div>
          <div>Read Time: 3 minutes</div>
        </div>

        <div className={styles.title}>The Art of True Development</div>
       

        <div className={styles.headerSub}>
            Where To Begin:
        </div>

        <div className={styles.contentMain}>
            If you have lived in this world or matrix long enough, 
            and you have kept an awareness of your everyday actions and their inherent implications, 
            you would have undoubtedly realised that you are forever facing new challenges. 
            This is for good reason and is conducive to your growth. It&apos;s also fun, 
            as having the capacity to accomplish every goal the first time round would become boring, 
            predictable and persuasive to the omission of spontaneity. 
            The spontaneous element of life itself keeps and drives our hunger to go again, 
            and attain success (as we define it). 
        </div>

        <div className={styles.contentMain}>
            Being confronted with new challenges is an inherent part of our being. 
            How we deal with those challenges has changed over the years and there 
            is much to say about the reason why. 
            We are being fooled into believing that we need to know everything. 
            It&apos;s like the Job Application process…. &apos;Unless you know, 
            then the answer is no&apos;
        </div>

    
        <div className={styles.contentMain}>
            Wait a minute…. What happened to the ethos of: 
            Let&apos;s see how you get on with something you are unfamiliar with and 
            we can assess your ability to evaluate how you structure your approach 
            with the added pressure of not knowing. 
        </div>

        <div className={styles.contentMain}>
            Of course, If you are applying for a role in which a specific skill set is required 
            then it&apos;s imperative to know such a skill set. Although, in today&apos;s world, 
            every Tech company is utilising a varying array of technologies (Tech Stack) that all 
            compile to the same underlying principle…. &apos;Instructing the Computer&apos;
        </div>

        <div className={styles.contentMain}>
            Most things in life exist in the unknown and it&apos;s our compelling nature to bring 
            the unknown into the known…. Bit by Bit, Byte by Byte, little by little. 
            Bringing the unknown into the known creates a foundation of knowledge, and we all share 
            (to some degree) a foundation of knowledge. 
            Some more than others, and others more than some - depending on your perspective. 
        </div>

        <div className={styles.contentMain}>
            With the advent of the internet and AI, 
            coupled with the exponential rate of change in the world - it is now more imperative that 
            you study the art of true holistic development.   
        </div>

        <div className={styles.contentMain}>
            In the myriad of Job Applications I have read over in the previous months, 
            I am yet to see 1 (not even 1) that highlights the requirement for a candidate&apos;s 
            ability to grasp the understanding of a completely new concept. 
            A skill set that some candidates hold an aptitude for, and in other cases not so 
            much of an aptitude, albeit a skill to be developed. In any case, the ability to pick 
            something up and run with it underpins the very fabric of development. 
            This is especially true in the Technological World…. 
            So why are we not seeing this as a skill set on Job Applications?
        </div>

        <div className={styles.contentMain}>
            Anyone remember the Crash of Flash? Thousands of developers lost their jobs overnight…. 
            Ouch! And now Cisco has recently laid off over 4000 colleagues…. 
            I thought Cisco was a booming business? 
        </div>

        <div className={styles.headerSub}>
            The Journey:
        </div>

        <div className={styles.containerImageFullWidth}>
          <Image 
              src={"/blogs/cyber_padlock.jpg"} 
              width={1456} 
              height={816}
              className={styles.image}
              alt='image hero' 
              quality={100}
          />
        </div>
        
        <div className={styles.contentMain}>
            If I was first starting out on the journey of becoming a developer in today&apos;s world, 
            I would be very hesitant to learn any language. I mean, AI practically does it for you…. 
            And it&apos;s only becoming more efficient by the second. 
        </div>

        <div className={styles.contentMain}>
            In a nutshell, Cyber Security is where it&apos;s at…. For so many reasons, 
            everyone makes mistakes in secure coding which leads to hidden bugs and vulnerabilities 
            that exist in the wild. Threat Actors know this and are taking advantage of the insecure 
            infrastructure that props up our society. There is a lot that goes on behind closed doors 
            that doesn&apos;t make it to the mainstream media or even a Hacker&apos;s news article. 
            Just recently, half of France got hacked with some integral data exfiltration at hand. 
            Connect the dots and soon everyone and their dog will be receiving a Phishing or Smishing 
            message.
        </div>

        <div className={styles.contentMainThick}>
            The field is wide open for the good guys to derail and combat the bad guys. 
        </div>

        <div className={styles.contentMain}>
            To be a true expert in the field you first need to practise your ability to become 
            comfortable in the uncomfortable. And most importantly, build on your capacity to 
            learn on your own and via the medium of how ever you interpret the information and retain it. 
            I have always found that learning in groups or teams is invaluable. Build a network of like 
            minded individuals that can give you the correct support or message just when you need it. 
            Linkedin is a good starting platform…. 
            And from there you can check out Discord or even the Dark Web.
        </div>

        <div className={styles.contentMain}>
            You will need to learn some development in terms of scripting: Python is a good starting point. 
        </div>

        <div className={styles.contentMain}>
            You will additionally require a strong foundation in Networking principles. CCNA Routing & Switching and or CCNA Security. 
        </div>

        <div className={styles.contentMain}>
            Finally, you will jump into the world of Cyber Security and try to get a feel for the 
            landscape and how Hacking is really carried out. This is the fun part…. You can join the 
            Portswigger Academy, Try Hack Me, Hack The Box, OffSec, etc….. Join and engage in CTFs and 
            Hackathons…. 
            Put your imposter syndrome to one side and click the mouse or tap the trackpad. 
        </div>

        <div className={styles.contentMain}>
            Another great fundamental discipline to master is the Linux OS. 
            Work out and traverse through the file structure, and moreover the terminal commands. Eventually, it feels natural to 
            type in commands like &apos;chmod, cat, nano, etc….&apos; they all carry their own meaning. 
            I&apos;m pretty sure there was no coin flicking, i.e. if it landed on Heads side up, 
            the command would be &apos;cat&apos; or if Tails the command was &apos;dog&apos;.... Lol…. 
        </div>

        <div className={styles.contentMainThick}>
            Speaking of Tails: Learn how to cover your tracks…. 
        </div>

        <div className={styles.contentMain}>
            If you can, document your journey and be as free as a bird…. 
            You&apos;re going to need some luck or good fortune to get the opportunity to showcase your 
            skills. Don&apos;t be picky with your first position as you will learn something from every experience. 
            Having said that, knowing where you do not want to be will propel you toward the place you are destined for.
            Therefore, don&apos;t be shy to say goodbye at the right time and move on to the next part of the journey.
        </div>

        <div className={styles.contentMainThick}>
            &apos;When one door closes, another door….&apos; 
        </div>

        <div className={styles.contentMain}>
            To Be Continued.... 
        </div>

   
    </div>
    </main>
  )
}
