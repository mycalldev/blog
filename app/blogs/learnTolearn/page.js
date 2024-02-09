import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/blogPage.module.css";

export default function LearnTolearn() {

  return (
    <main>
    
      {/* HERO SECTION */}
      <div className={styles.containerImageFullWidth}>
          <Image 
              src={"/learning.jpg"} 
              width={1024} 
              height={1024}
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
          <div>Updated: 6th February 2024</div>
          <div>Read Time: 5 minutes</div>
        </div>

        {/* SECTION 2 */}
        <div className={styles.title}>LEARN HOW TO LEARN AND WHY?</div>

        <div className={styles.titleSub}>THE 7 STEP FORMULA....</div>
       

        <div className={styles.headerSub}>
            Introduction:
        </div>
        <div className={styles.contentMainThick}>
            Knowledge is Power, and with Power Comes Great....
        </div>
        <div className={styles.contentMain}><span>RESPONSIBILITY</span> is ours to attain, and through the actions of learned behaviour we can excercise our greatness.</div>
        
        <div className={styles.contentMainThick}>
            &apos;It is not what you know in the here and now; It is how to understand the knowledge of change….&apos;
        </div> 

        <div className={styles.contentMain}>
        In simple terms, the world around us is changing at an exponential rate. If you unwittingly bury your head in the sand when the new technology becomes the latest trend, you will be akin to a person using the typewriter to create documents (Great invention by the way!). 

        </div>

        <div className={styles.containerImagePartWidth}>
            <Image 
                src={'/blogs/learn_to_learn/learning_computer.jpg'} 
                width={1456} 
                height={816} 
                className={styles.image}
                alt='image of a learning computer' 
                quality={100}
            />
        </div>

        <div className={styles.contentMain}>Technology has brought about so many changes into our lifetime and this is why I find it paramount that as a community we establish or practise a protocol for Learning.</div> 
        <div className={styles.contentMain}> How can we Learn in an expeditious, indelible and accurate form. I am aware that not everyone learns in the same particular style or pattern. I.e You may be visual, auditory, read/write, kinaesthetic…. etc…. </div>
        <div className={styles.contentMain}>Having full awareness of the differing styles of learning, there remains to be an established protocol for how to digest or interpret a new concept, construct or subject. </div>
        <div className={styles.contentMainThick}>I&apos;ll outline a very brief example of where this is leading:</div> 
        <div className={styles.contentMain}>&apos;We would not tie our shoelaces before putting our shoes on. That would seem an entirely impractical method to accomplish the task of wearing our shoes.&apos;</div>
        <div className={styles.contentMain}>In the same way, although comparative to concepts and constructs, we are being shown an example of how to do something before we have been given or shown the explanation. Further to this point, and as I encounter far too often, we are without the relevance of the subject matter that we are endaevouring to learn.</div> 
        <div className={styles.contentMain}> e.g. there is a plethora of videos on <span>&apos;how &apos;....</span> all the while my mind is thinking of the <span>&apos;why to&apos;</span>. </div>
        <div className={styles.contentMain}>The &apos;Why To&apos; or in other words: why am I learning &apos;How To&apos; is the relevance and provides context.</div>
        <div className={styles.contentMain}>In our mind, the &apos;Why&apos; always precedes the &apos;How&apos;, and this sequential order is a fundamental principle of how we operate and carry out tasks in our everyday lives.</div> 


        
        <div className={styles.contentMain}>
        Over the years of my learning journey in studying a variable array/list of subjects (lol....) - both physical and mental - I have discovered a few key factors that the human mind could benefit from. This is especially true when learning a new construct or concept that may require more than discipline to master. 
        Having said that, &apos;Discipline&apos; is a fundamental part of the overall picture and something we can cover in a short book (some other time). 
        </div>

        <div className={styles.contentMain}>
        What I&apos;m pertaining to is a protocol for Learning How to Learn</div> 
        <div className={styles.contentMain}>A workflow, per se, for undertaking a subject/discipline and using the protocol to assist in the perspicacity and digestion of its inherent contents and inner workings. 
        </div>

        <div className={styles.contentMain}>
        In terms of learning, there are many things in life which we have a protocol or a set of rules for i.e driving a car, flying a plane, etc…. You get the idea.
        </div>
        <div className={styles.contentMain}>It just seems to be that technological subjects and the like have found themesleves outside the boundaries for learning with a set protocol in place.</div>
        
        <div className={styles.containerImagePartWidth}>
          <Image 
            src={'/blogs/learn_to_learn/learning_girl.jpg'} 
            width={512} 
            height={512} 
            className={styles.image}
            alt='image learning girl' 
            quality={100}
          />
        </div>

        <div className={styles.contentMainThick}>
            The Protocol I have set out is structured into <span>7</span> orderly sections: 
        </div>

        <ol>
            <li className={styles.listItem}>Relevance and/or context for why we are learning the particular subject</li>
            <li className={styles.listItem}>Explanation of the Subject</li>
            <li className={styles.listItem}>Analogy</li>
            <li className={styles.listItem}>Example</li>
            <li className={styles.listItem}>Deduction - How not to use</li>
            <li className={styles.listItem}>Dive in and start doing</li>
            <li className={styles.listItem}>Repetition</li>
        </ol>
        

        <div className={styles.contentMain}>
         Each section is sequentially ordered as to build on top of the preceding section.</div>
        <div className={styles.contentMain}>Let&apos;s dive into a short description of how this works: 
        </div>

        <div className={styles.headerSub}>
            Relevance
        </div>

        <div className={styles.contentMain}>
            Relevance is integral toward informing the brain on why it is you are doing what you are doing (in terms of learning). I remember many times on my journey, setting out to learn a function or construct (such as Database models) and not knowing the relevance/purpose behind why a function or a database model is required. 
        </div>
        <div className={styles.contentMainThick}>
          HOW DOES THE FUNCTION OR DATABASE MODEL TIE INTO THE BIGGER PICTURE?
          </div>
        <div className={styles.contentMainThick}>
          WHAT IS THE BIGGER PICTURE?
        </div>
        
        <div className={styles.contentMain}>
        The above were a few of the many questions my mind was asking. I realised very early on that if there was no &apos;Relevance&apos; then I would quickly forget the subject I had recently studied. 
        Having said that, relevance can take some time to acquire (depending on the subject matter). 
        </div>

        <div className={styles.contentMain}>
         The reason is complex subjects have many moving parts or a large variety of small pieces to a very large puzzle. Eventually, the more pieces of the puzzle you put together, the clearer the picture becomes…. However, at this stage it is normal for all of the pieces to not fit exactly as you expect given that there are more steps to the formula to complete before clarity arrives.
        </div>

        <div className={styles.containerImagePartWidth}>
          <Image 
            src={'/blogs/learn_to_learn/puzzle_pieces.jpg'} 
            width={1456} 
            height={816} 
            className={styles.image}
            alt='image puzzle pieces' 
            quality={100}
          />
        </div>

        <div className={styles.contentMain}>
          A lot of material you find in the wild will tell you the &apos;How&apos; i.e how to create a function or DB model. Although, in terms of Relevance, you will want to know the &apos;Why&apos; i.e. why am I creating a function or a DB model and thereby some context or relevance will begin to form in the mind.
        </div>

        <div className={styles.headerSub}>
            Explanation
        </div>

        <div className={styles.contentMain}>
          The &apos;Explanation&apos; will introduce new concepts to the mind in a detailed way. Whether you are reading, viewing or listening to an explanation, it is absolutely necessary for bringing the bigger picture together and pertinent for reference material. At the time of being introduced to the explanation some of the details may not make sense in their entirety. This is normal and any gaps that may exist will be filled in once the other steps in the sequence have been undertaken.   
        </div>

        <div className={styles.headerSub}>
            Analogy
        </div>

        <div className={styles.contentMain}>
          The &apos;Analogy&apos; will use comparisons of material you are familiar with in order to help make sense of the parts of the explanation that you are yet to fully understand. Essentially, analogies are great at making the mind feel comfortable and we can relate and regain our attention span. 
        </div>

        <div className={styles.headerSub}>
            Example
        </div>

        <div className={styles.contentMain}>
        Once we have absorbed the relevance, analogy and explanation, we require an &apos;example&apos; of how to do! Examples are great and allow the student (us) to observe and discover. Watching, reading or listening to an example may give you the infamous &apos;aha&apos; moment. 
        </div>

        <div className={styles.headerSub}>
            Deduction
        </div>

        <div className={styles.contentMain}>
        Deduction is one of my personal favourites. Many times I have studied videos on the internet and the content creator has made a mistake and corrected themselves thereafter. In this moment I realised that seeing how something should not be carried out allows the mind to deduce on how it is that it can only be carried out. In other words, by learning how a construct cannot be applied, will help refine the knowledge of how a construct can only be applied. 
        The &apos;How not to do&apos; (as I call it), has helped me significantly in learning the fine details of any given subject. I&apos;m always asking myself: &apos;How can this not work…. What are its inherent limitations?&apos;  
        </div>

        <div className={styles.headerSub}>
            Dive In
        </div>
        <div className={styles.contentMain}>
        Dive in and start doing! kinesthetic learning is one of the most proficient ways to pick up a new subject. Coupled with the prerequisite steps of the protocol, you will be more than ready to roll your sleeves up and travel into &apos;key-stroke heaven&apos;. 
        Ok… ok… In truth this requires patience, discipline and practice. The harder and smarter you work at this stage will define the outcome. 
        </div>

        <div className={styles.contentMainThick}>
        &apos;YOU GET OUT WHAT YOU PUT IN.&apos;
        </div>
        <div className={styles.contentMain}>
          Having said that, work smart and take breaks often. Your brain only starts to assimilate the newly acquired knowledge and compartmentalise whilst you are resting. Close your eyes for 20 minutes and recharge the mind. We all know how the day goes (cognitively speaking) when we have less sleep than usual. 
        </div>
        <div className={styles.contentMain}>
        I would also like to mention that parts of our brain work independently at times. To elaborate, when we are learning &apos;Syntax&apos; for a new programming language, the logical mind takes a back seat. The part of your brain that works on memory (hippocampus) stimulates to pick up on the syntax. So when trying to iterate over a list or carry out some logic in the initial stages it will feel like you have forgotten how to count as you are primarily focused on the accuracy of the syntax. I actually forgot how to spell (for a brief period) during my time learning the syntax for Javascript. In other words, the brain utilises a method known as the &apos;separation of concerns&apos;. it is only once you have the syntax embedded, does the logical mind (frontal lobe)  come into full force. It takes time, although with enough practice you will receive your ‘aha’ moment. 
        </div>

        <div className={styles.headerSub}>
            Repetition
        </div>

        <div className={styles.contentMain}>
          This may seem like an obvious action to carry out. Well.... I&apos;ll let you figure this one out for yourself....
        </div>

        <div className={styles.contentMain}>
            Congratulations for reaching here....
        </div>

        <div className={styles.contentMain}>
          As a result of following the protocol or formula, the mind will start to form a structured foundation of where to store your newly acquired knowledge. You are essentially creating a pattern in your brain for you to store and recollect information. Moreover, you are forming a habbit (behavioural pattern) for how to learn a new subject when the time arrives. 
        </div>

        <div className={styles.contentMain}>
        Strucutres and patterns are integral to how the brain operates as it aligns with the cognitive conservation of energy (our subconciousness). This is why we can count backwards from 100 with ease (as numbers comprise numerical structure), and why we find it almost impossible to recite the alphabet backwards (as there is no structure to the alphabet.... only a random set of characters ordered in a random way....)
        </div>

        
        <div className={styles.containerImagePartWidth}>
          <Image 
            src={'/blogs/learn_to_learn/green_computer.jpg'} 
            width={512} 
            height={512} 
            className={styles.image}
            alt='image green computer' 
            quality={100}
          />
        </div>

        
        <div className={styles.headerSub}>
        SIDE NOTE
        </div>

        <div className={styles.contentMain}>
        If you feel you are wavering with your concentration, take a break or try the &apos;outside - in&apos; counting from <span>10</span> i.e 10,1,9,2,8,3,7,4,6,5….. You can even start from 20 if you&apos;re feeling cognitively energetic. Another quick and effective method is to call out the alphabet backwards (This will sharpen your mind) 
        </div>

        <div className={styles.headerSub}>
        BRAIN TEASER
        </div>

        <div className={styles.contentMain}>
        When was the last time you recited the alphabet to yourself?
        Ever wondered how every human brain can remember the alphabet (26 characters) in perfect order notwithstanding the fact that the alphabet is collated in no orderly sequence. Try remembering 26 digits of Pi and then forget about it for years and see if you can recollect again. 
        </div>
        
        {/* <div className={styles.CTAtag}>Check out the WHOAMI article for a brief overview of my journey....</div>
        <div className={styles.imageWhoami}>
          <Image src={'/whoami_terminal.png'} width={890} height={200} alt="whoami image" quality={100} />
        </div>
        <Link href={'/whoami'}>
            <div className={styles.letsGoBTN}>WHOAMI</div>
        </Link> */}

       </div>
      </main>
  );
}

