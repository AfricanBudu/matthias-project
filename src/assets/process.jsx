// import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { projects } from '../data';
import Card from '../Components/Card/index';
import Header from '../Components/Card/header';
import { Link } from 'react-router-dom';

import { useScroll } from 'framer-motion';





const Process = () => {
        const [index, setIndex] = useState(0);
        const container = useRef(null);
        const [isLoading, setIsLoading] = useState(true);

        const { scrollYProgress } = useScroll({
            target: container,
            offset: ['start start', 'end end']
          })
        
        

        useEffect( () => {
            (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
        
                setTimeout( () => {
                    setIsLoading(false);
                    document.body.style.cursor = 'default'
                    window.scrollTo(0,0);
                }, 2000)
            }
            )()
        }, [])
        



  return (
    <>
    <section className='sticky lg:mt-[-23.2vw] phone:mt-[-67vw] xs:mt-[-77vw] sm:mt-[-45vw]'>
      <div className='relative'>
      <Header order='03' text='OUR PROCESS'/>
      </div>

      <div className='xl:px-[4.5rem] md:px-[4rem] xs:px-4 '>
        <div className='font-General_Sans'>
          <p className=' md:text-[32px] md:block xs:hidden  xs:text-[12px] leading-[38px] font-[500] text-[#B9B8C1] pb-20'>How we create these artistic sculptures</p>
        </div>            
      </div>
      <div className=''>
        <main ref={container} className="relative mt-[2vw] ">
          {
            projects.map( (project, i) => {
              const targetScale = 1 - ( (projects.length - i) * 0.05);
              return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
            })
          }
        </main>
      </div>
    </section>
    </>
  )
}

export default Process;