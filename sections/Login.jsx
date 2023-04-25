'use client';
import {motion} from "framer-motion"
import {staggerContainer,slideIn} from "../utils/motion"
import styles from "../styles";
const Login = () => 
(
  <section
  className={`${styles.yPaddings}  `}>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} flex flex-col`}>

    <div className="flex justify-center items-center flex-col 
relative z-10">
    </div>
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="relative w-full md:-mt-[20px] -mt-[12px]">
      <div className="absolute w-full h-full
 z-[0] "/>
      <img src="/Login.jpg"
        alt="cover"
        className="w-full
sm:h-[500px] lg:h-[100vh] 
object-cover 
z-10 relative" />

  

    </motion.div>
  </motion.div>
</section>
);
  

export default Login