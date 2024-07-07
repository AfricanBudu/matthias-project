import { ArrowRightIcon } from "@heroicons/react/16/solid"

const matthias = () => {
  return (
    <div>
        <div className="container flex gap-14 pl-14 mt-28 justify-normal items-start">
            <div>
                <p className="text-tempura text-[5.5rem] font-Semibold_Grotesk leading-[6.2rem]">Matthias Pliessing</p>
                <p className="-mt-3 text-[#FFEFCC] text-[4.375rem] font-taviraj italic leading-[6rem]">Visual Designer</p>
                <p className="max-w-[35.5rem] font-General_Sans font-medium text-[#B9B8C1] text-2xl">
                    An acclaimed furniture designer based in Brooklyn, 
                    New York. whose work uses steam bent wood. <br/>
                    He uses kinetically contemporary style to craft
                </p>
            </div>
            <div className="flex gap-4 self-end font-taviraj font-medium">
                <button className=' bg-[#E8E8E8] text-xl text-[#051118] px-6 py-1 rounded-3xl flex items-center'>
                    Instagram
                    {/* <ArrowRightIcon className="h-5 w-5 ml-2"/> */}
                </button>
                <button className=' bg-transparent text-xl text-[#E8E8E8] px-6 py-1 border-[1px] border-[#E8E8E8] rounded-3xl flex items-center'>
                    Contact Us 
                    <ArrowRightIcon className="h-5 w-5 ml-2"/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default matthias;
