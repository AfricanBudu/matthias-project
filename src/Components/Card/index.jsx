
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef,useEffect } from 'react';

const Card = ({i, title, description, progress, range, targetScale, bg}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
  // const blur = useTransform(scale, [1, targetScale], [0, 100]);
  const blur = useTransform(progress, [0, 1], [0, 20]); 
  return (
   <>
   <a href="#">
   <div ref={container} className="h-screen flex items-center justify-center sticky top-0 ">
      <motion.div 
        style={{backgroundRepeat:`no-repeat`, backgroundSize:`cover`, scale, top:`calc(-5vh + ${i * 40}px)`, filter: `blur(${blur}px)`, background:`url(${bg})`}} 
        className="relative top-[-45%] flex items-end  md:h-[90vh] xs:h-[50vh] rounded-[50px] w-full overflow-hidden"
      >
       
       <div className='h-2/4 bg-[#d9d9d94c] backdrop-blur-2xl w-full px-16'>
       <h2 className='text-[60px] text-[#FFF1E5] font-Semibold_Grotesk py-6'>{title}</h2>
       <p className='text-[28px] text-[#FFEBDA] leading-[35px] font-General_Sans font-[500]'>{description}</p>
        
       </div>
        
      </motion.div>
    </div>
   </a>
   </>
  )
}

export default Card