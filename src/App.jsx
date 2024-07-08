import './App.css';
import Navbar from './assets/navbar';
import Matthias from './assets/matthias';
import About from './assets/about'
import Lenis from '@studio-freight/lenis'
import Service from './assets/service';
import Process from './assets/process';
// import { useScroll } from 'framer-motion';
import { useEffect } from 'react';





export default function App() {
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
      <Navbar />
      <Matthias />
      <About />
      <Service/>
      <Process/>
    </>
  )
}


