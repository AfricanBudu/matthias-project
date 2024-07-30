import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Carousel from '../Components/Card/carousel'


const Matthias = ({onLinkClick}) => {
  return (
    <div className="">
        <div className="flex gap-[3.9vw] flex-col pl-14 md:pl-12  xs:pl-4 md:mt-[8.89vw] xs:mt-8 md:mb-10 justify-normal items-start lg:flex-row">
            <div>
                <div className="pb-10">
                <p className=" xl:text-[6.12vw] md:text-[6.12vw] xs:text-[32px] font-Medium_Grotesk md:leading-[6.9vw] text-[#DDDAC2]">Matthias Pliessing</p>
                <p className="md:text-[4.87vw] xs:text-[28px] font-taviraj italic xl:leading-[6rem]  md:leading-[24.4px] xs:leading-none text-[#DDDAC2]">Visual Designer</p>
                </div>
                <p className="font-General_Sans font-medium text-[#B9B8C1] xl:text-[24px] md:text-[24px] xs:text-[12px]">
                An acclaimed furniture designer based in Brooklyn, 
                <br className=""/>New York whose work uses steam bent wood. 
                <br className=""/>He uses &ldquo;kinetically contemporary&rdquo; style to craft 
                <br className=""/>masterpiece furniture for executive interior
                </p>
            </div>
            <div className="flex gap-4 font-General_Sans font-medium lg:self-end">
                <button onClick={onLinkClick} className=' bg-[#E8E8E8]  text-[#051118] px-6 py-1 rounded-3xl flex items-center  md:h-[50px] xs:h-[35px] md:text-[20px] xs:text-[12px]'>
                    Instagram
                </button>
                <button onClick={onLinkClick} className=' bg-transparent  md:h-[50px] xs:h-[35px] md:text-[20px] xs:text-[12px] text-[#E8E8E8] px-6 py-1 border-[1px] border-[#E8E8E8] rounded-3xl flex items-center '>
                    Contact Us 
                    <ArrowRightIcon className="h-5 w-5 ml-2"/>
                </button>
            </div>
        </div>
        <div className="welcome-img mt-28">
        <Carousel/>
        </div>
        <div className="flex justify-center items-center lg:py-40 tab:mt-[24vw] font-taviraj italic text-center text-[#F5F5F5] sm:text-[3.4375rem] xs:text-[24px] sm:leading-[4.5rem] xs:leading-1 -z-20">
            <p>
                {`"`}19 years of making <br/>artistic masterpieces. <br/>
                A journey of passion, <br/>dedication, focus and <br/>resolute 
                spirit of <br/>craftsmanship.{`"`}
            </p>
        </div>
    </div>
  )
}

export default Matthias;
