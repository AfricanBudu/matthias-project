import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/16/solid"
const Navbar = () => {
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
          <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-[#DDDAC2]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

            
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
