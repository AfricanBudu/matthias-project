import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/16/solid"
const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="pl-14 flex justify-between items-center font-Regular_Grotesk md:mx-auto">
        <div className=" font-taviraj capitalize font-bold text-4xl text-[#DDDAC2] ">mp</div>
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
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
        {/* ===== Mobile screen ====== */}
        <div className="md:hidden ">
          <button
            className='mx-6 w-10 h-7 flex flex-col justify-between'>
            <div className="w-8 h-[2px] bg-white rounded"></div>
            <div className="w-8 h-[2px] bg-white rounded"></div>
            <div className="w-8 h-[2px] bg-white rounded"></div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
