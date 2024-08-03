import Navbar from '../../assets/navbar';
import Modal from '../../Components/Card/modal';
import Matthias from '../../assets/matthias';
import About from '../../assets/about'
import Lenis from '@studio-freight/lenis'
import Service from '../../assets/service';
import Background from '../../Components/Card/background';
import Process from '../../assets/process';
import { Link } from 'react-router-dom';


import Portfolio from '../../assets/portfolio';
import Contact from '../../assets/contact';
// import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';





export default function App() {
  
  const [isModalOpen, setModalOpen] = useState(false)

  const handleLinkClick = (e) => {
    e.preventDefault();
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  useEffect( () => {
    const lenis = new Lenis()
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  })
  return (
    <>
      <Navbar onLinkClick={handleLinkClick}/>
      <div className='relative overflow-hidden'>
        <Modal open={isModalOpen} onClose={handleCloseModal}/>
        <Matthias />
        <About />
      </div>      
      <div className='relative'>
        <Service />
        <Background />
        <Process />
      </div>
      <Portfolio />
      <Contact />
      
    </>
  )
}


