import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/16/solid"
const navbar = () => {
  return (
    <nav className=" p-4">
      <div className=" container mx-auto flex justify-between items-center font-Regular_Grotesk">
        <div></div>
        <ul className=" flex text-[#B9B8C1] text-xl space-x-6">
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
          <div className='bg-tempura inline-block relative p-[0.0625rem] rounded-3xl items-center gradient-border'  >
            <button className=' bg-[#E8E8E8] text-xl text-[#414141] px-6 py-1 rounded-3xl flex items-center'>
              Contact Us 
              <ArrowRightIcon className="h-5 w-5 ml-2"/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default navbar
