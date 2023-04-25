'use client';
import {motion} from "framer-motion"
import {TypingText} from "../components"
import styles from "../styles";
import {fadeIn,staggerContainer} from "../utils/motion"
const About = () => (
  <section className={`${styles.paddings} relative
  z-10`}>
    <div className="gradient-02 z-0"/>
 <motion.div
 variants={staggerContainer}
 initial="hidden"
 whileInView="show"
 viewport={{once:false,amount:0.25}}
 className={`${styles.innerWidth} mx-auto 
 ${styles.flexCenter} flex-col`}>
  <TypingText title="| About Zangler" 
    textStyles="text-center"   
  />
  <motion.p
  variants={fadeIn("up","tween",0.2,1)}
  className="mt-[8px] font-normal sm:text-[32px] text-[20px]
  text-center text-secondary-white">
  <span className="font-extrabold text-white ">
  Zangler
  </span> we believe that fashion should be accessible to everyone.
   That's why we've curated a collection of stylish 
   and affordable clothing that can take you from work to play, 
   and everything in between. <span className="font-extrabold text-white ">
   Our pieces are designed with versatility in mind
  </span>  Whether you're looking for professional attire or casual weekend wear <span className="font-extrabold text-white ">
  Zangler
  </span> Clothing has got you covered. We are dedicated to providing <span className="font-extrabold text-white ">
High Quality clothing
  </span> that looks and feels great, without breaking the bank.
  </motion.p>
   <motion.img
   variants={fadeIn('up',"tween",0.3,1)}
   src="/arrow-down.svg"
   alt="arrow down"
   className="w-[18px] h-[28px] object-contain mt-[28px]"
   >
   </motion.img>

 </motion.div>  
  </section>
);

export default About;
