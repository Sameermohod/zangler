'use client';
import{motion} from "framer-motion"
import styles from "../styles";
import { fadeIn,staggerContainer,zoomIn } from "../utils/motion";
import {exploreTshirts} from "../constants"

import Exploreitems from "../components/ExploreItems";


const Tshirts = () => (
<section className={`${styles.paddings} relative
  z-10`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className={`${styles.innerWidth}   `}>

    <h1>Tshirts</h1>
 <div className="mt-[20px]  row  lg:columns-5 
  flex-col columns-2 min-h-[70vh]  gap-2">
   {
    exploreTshirts.map((world,index)=>(
      <Exploreitems
        key={world.id}
        {...world}
        index={index}
      />
    ))
   }

   </div>



    </motion.div>
  </section>
);

export default Tshirts;
