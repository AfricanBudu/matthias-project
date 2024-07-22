import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion"
import { useState } from "react"

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const Links = [
    { name: "Home", link: "/" }
  ]

  const topVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)"
    }
  }
  const centerVariants = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  }
  const bottomVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)"
    }
  }
  return (
    <nav className="pt-8 py-4 xl:px-14 md:px-14 xs:px-4">
      <div className="  flex justify-between items-center font-Regular_Grotesk md:mx-auto">
        <div className=" font-taviraj italic  capitalize font-bold md:text-[36px] xs:text-[15.27px] text-[#DDDAC2] ">mp</div>
        {/* ======Larger screen====== */}
        <div className="hidden justify-between xl:w-[60%] md:flex">
          <ul className=" flex mr-5 items-center text-[#B9B8C1] text-xl space-x-6">
            <li className="text-active"><a href="#home">Home</a></li>
            <li className=""><a href="#about">About</a></li>
            <li className=" flex items-center">
              <a href="#product">Product</a>
              <ChevronDownIcon className="h-5 w-5 mt-0.5 ml-1" />
            </li>
            <li className=" flex items-center">
              <a href="#process">Process</a>
              <ChevronDownIcon className=" h-5 w-5 mt-0.5 ml-1" />
            </li>
          </ul>
          <div>
            <div className='mr-6 bg-tempura inline-block relative p-[0.0625rem] rounded-3xl items-center gradient-border'  >
              <button className=' bg-[#E8E8E8] text-xl text-[#414141] px-6 py-1 rounded-3xl flex items-center'>
                Contact Us
                <ArrowRightIcon className="h-[12px] w-[18px] ml-2" />
              </button>
            </div>
          </div>
        </div>
        {/* ===== Mobile screen ====== */}
        <div className="md:hidden ">
          <button
            onClick={() => setToggleNav(!toggleNav)}
            className='w-10 h-6 flex flex-col justify-between relative z-30'>
            <motion.div className="w-8 h-1 bg-white rounded origin-left"></motion.div>
            <motion.div className="w-8 h-1 bg-white rounded"></motion.div>
            <motion.div className="w-8 h-1 bg-white rounded origin-left"></motion.div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
