import { ArrowRightIcon } from "@heroicons/react/16/solid";

const Matthias = () => {
  return (
    <div>
        <div className="flex flex-col gap-14 pl-14 md:pl-12  xs:pl-6 mt-28 mb-10 justify-normal items-start md:flex-row">
            <div>
                <div className="pb-10">
                <p className=" xl:text-[5.5rem] md:text-[25px] xs:text-[32px] font-Medium_Grotesk xl:leading-[6.2rem] md:leading-[24.4px] text-[#DDDAC2]">Matthias Pliessing</p>
                <p className="-mt-3 xl:text-[4.375rem] md:text-[25px] xs:text-[28px] font-taviraj italic xl:leading-[6rem]  md:leading-[24.4px] text-[#DDDAC2]">Visual Designer</p>
                </div>
                <p className="max-w-[35.5rem] font-General_Sans font-medium text-[#B9B8C1] xl:text-[24px] md:text-[24px] xs:text-[12px] md:max-w-[650px] xs:max-w-[254px]">
                An acclaimed furniture designer based in Brooklyn, 
                New York whose work uses steam bent wood. 
                He uses "kinetically contemporary" style to craft masterpiece furniture for executive interior
                </p>
            </div>
            <div className="flex gap-4 font-General_Sans font-medium md:self-end">
                <button className=' bg-[#E8E8E8] text-xl text-[#051118] px-6 py-1 rounded-3xl flex items-center'>
                    Instagram
                </button>
                <button className=' bg-transparent text-xl text-[#E8E8E8] px-6 py-1 border-[1px] border-[#E8E8E8] rounded-3xl flex items-center'>
                    Contact Us 
                    <ArrowRightIcon className="h-5 w-5 ml-2"/>
                </button>
            </div>
        </div>
        <div className="welcome-img mt-28">
            <img src="/images/matthias-welcome-image.png" alt="a piece of art" />
        </div>
        <div className="flex justify-center items-center my-40 font-taviraj italic text-center text-[#F5F5F5] xl:text-[3.4375rem] xs:text-[24px] xl:leading-[4.5rem] xs:leading-1 -z-20">
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
