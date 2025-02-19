
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef,useEffect } from 'react';
import { Link } from 'react-router-dom';

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
   <div ref={container} className="md:h-screen xs:h-[70vh] md:pb-0 xs:pb-24 flex items-center justify-center sticky md:top-5 xs:top-[15vh]  ">
      <motion.div 
        style={{backgroundRepeat:`no-repeat`, scale, top:`calc(-5vh + ${i * 40}px)`, filter: `blur(${blur}px)`, background:`url(${bg})`}} 
        className="relative top-[-45%]  flex items-end bg-cover md:h-[100vh] xs:h-[50vh] rounded-t-[50px] w-full overflow-hidden"
      >
     
       <div 
        style={{ background:`url(${bg})`, backgroundRepeat: `no-repeat`, backgroundSize:`cover`, backgroundPosition: `center`, filter: `blur(${blur}px)`}}
        className='w-full h-1/2 md:hidden xs:block absolute top-0'
       ></div>
       
       <div className='h-2/4 bg-[#d9d9d94c] backdrop-blur-2xl w-full px-16'>
       <h2 className='md:text-[60px] xs:text-[17px] text-[#FFF1E5] font-Semibold_Grotesk py-6'>{title}</h2>
       <p className='md:text-[28px] xs:text-[12px] text-[#FFEBDA] md:leading-[35px] font-General_Sans font-[500]'>{description}</p>
        
       </div>
        
      </motion.div>
    </div>
   </a>
   </>
  )
}

export default Card