// import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { projects } from '../data';
import Card from '../Components/Card/index';
import Header from './header';

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
    <section className=''>
      <div className='relative'>
      <Header order='03' text='PROCESS'/>
      </div>

      <div className='px-[4.5rem]'>
        <div className='font-General_Sans'>
          <p className=' text-[32px] leading-[38px] font-[500] text-[#B9B8C1]'>How we create these artistic sculptures</p>
        </div>            
      </div>
      <div className=' px-4'>
        <main ref={container} className="relative mt-[10vh] ">
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