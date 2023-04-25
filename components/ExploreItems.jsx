'use client';
import { useRouter } from "next/navigation";

import {motion} from "framer-motion"
import styles from "../styles";
import {fadeIn} from "../utils/motion"

const Exploreitems = ({id,imgUrl,title,index,price}) => {
  const router= useRouter();
return(  <motion.div
  variants={fadeIn("right","spring",index*0.5,0.6)}
  className="relative 
   flex items-center
   justify-center min-w-[170px] h-[300px] transition-[flex] duration-[0.4s]
   ease-out-flex cursor-pointer"
   >
     <img src={imgUrl}
      alt={title}
      className="absolute p-3 lg:w-full h-full w-[140px] object-cover
      rounded-[24px]" 
      />
  
        
          <div className="absolute bottom-0 p-5 justify-start lg:w-full w-[120px] flex-col bg-[rgba(0,0,0,0.5)]
          rounded-b-[24px]">
            <div className={`${styles.flexCenter} w-[60px]  rounded-[24px] mb-[5px] `}>
            </div>
            <p
            className="font-normal text-[16px] leading-[20px]
             text-white">{price} </p>
             <p  className="mt-[5px] font-semibold sm:text-[32px]
             text-[24px] text-white">
              {title}
             </p>
          </div>
        

        
      
  </motion.div>)
};

export default Exploreitems;
