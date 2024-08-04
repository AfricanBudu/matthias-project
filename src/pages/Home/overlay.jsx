import Navbar from '../../assets/navbar';
import Modal from '../../Components/Card/modal';
import Matthias from '../../assets/matthias';
import About from '../../assets/about'
import Lenis from '@studio-freight/lenis'
import Service from '../../assets/service';
import Background from '../../Components/Card/background';
import Process from '../../assets/process';


import Portfolio from '../../assets/portfolio';
import Contact from '../../assets/contact';
// import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';





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
    <div className={`fixed inset-0 flex items-center justify-center bg-black/75 backdrop-blur-md z-20 ${open ? "visible bg-black/75" : "invisible"}`}>
        <div className="bg-none p-8 rounded-lg shadow-lg text-center">
          <p className="text-[7vw] leading-none mb-4  text-white pb-10 font-General_Sans">Page under construction</p>
          <Link to='/'>
          <button
               className="bg-white font-General_Sans  text-black px-4 py-2 rounded-3xl text-lg hover:bg-black hover:text-white"
            >
              Return to home page
            </button>
          </Link>
        </div>
      </div>
      <Navbar onLinkClick={handleLinkClick}/>
      <div className='relative overflow-hidden'>
        <Modal open={isModalOpen} onClose={handleCloseModal}/>
        <Matthias />
        <About />
      </div>      
      
      
    </>
  )
}


