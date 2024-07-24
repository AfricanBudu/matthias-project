
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef,useEffect } from 'react';

const Card = ({i, title, description, progress, range, targetScale, bg}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start middle', 'start middle']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
  // const blur = useTransform(scale, [1, targetScale], [0, 100]);
  const blur = useTransform(progress, [0, 1], [0, 20]); 
  return (
   <>
   <a href="#">
   <div className="flex items-center justify-center sticky top-0 mb-[10vw]">
      <motion.div 
        className="relative  flex flex-col items-end md:h-[100vh] xs:h-[50vh] rounded-t-[50px] w-full overflow-hidden"
      >
       <div 
        style={{ background:`url(${bg})`, backgroundRepeat: `no-repeat`, backgroundSize:`cover`, backgroundPosition: `center`, filter: `blur(${blur}px)`}}
        className='w-full h-1/2'
       ></div>
       <div
        style={{ background:`url(${bg})`, backgroundRepeat: `no-repeat`, backgroundSize:`cover`, backgroundPosition: `center`, }}
        className={`h-1/2 w-full`}>
        <div className='bg-[#d9d9d94c] flex flex-col xs:pt-[5vw] md:pt-3 md:justify-start backdrop-blur-2xl w-full h-full px-16'>
          <h2 className='md:text-[60px] xs:text-[17px] text-[#FFF1E5] font-Semibold_Grotesk py-[1.5vw]'>{title}</h2>
          <p className='md:text-[28px] xs:text-[12px] text-[#FFEBDA] md:leading-[35px] font-General_Sans font-[500]'>{description}</p>
        </div>
        
       </div>
        
      </motion.div>
    </div>
   </a>
   </>
  )
}

export default Card