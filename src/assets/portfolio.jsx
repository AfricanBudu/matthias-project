import Header from "../Components/Card/header";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/16/solid";
import { Link } from 'react-router-dom';


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            largeImage: 'cascade-image-1',
            workType: 'FURNITURE',
            workName: 'Cascade series',
            description: 'A furniture piece using an arch shaped wood, and a hollow area for sitting, 200cm long mesh shaped seat',
            otherImages: ['cascade-image-2', 'cascade-image-2', ]
        },

        {
            id: 2,
            largeImage: 'hbs_03',
            workType: 'FURNITURE',
            workName: 'Hbs series',
            description: 'A furniture piece using an arch shaped wood, and a hollow area for sitting, 200cm long mesh shaped seat',
            otherImages: ['hbs_02', 'hbs_01', ]
        },

        {
            id: 3,
            largeImage: 'platinum_01',
            workType: 'FURNITURE',
            workName: 'Cascade series',
            description: 'A furniture piece using an arch shaped wood, and a hollow area for sitting, 200cm long mesh shaped seat',
            otherImages: ['platinum_04', 'platinum_02', ]
        },
    ]

  return (   
   <>
        <div className="px-0 md:block tab:hidden">
           <Header text='PORTFOLIO'/>
        </div>

        <div className="font-Semibold_Grotesk sm:mt-[20vw] lg:hidden">
            <h1 className="text-center xl:text-[50px] md:text-[30px] xs:text-[18px] text-[#878787] mb-[2.2rem]">PORTFOLIO</h1>
        </div>
        <div className="xl:px-[4.5rem] md:px-[4rem] xs:px-4 pb-16">
            
            <div className=" lg:flex xs:grid justify-center items-center flex-col  md:gap-32 xs:gap-10">
                {portfolios.map((work) => (
                    <div className="grid grid-cols-12 relative overflow-hidden  lg:gap-10 xs:gap-4" key={work.id}>
                        {work.largeImage && 
                        <div className="lg:col-span-6 xs:col-span-12 lg:h-[28rem] xs:h-[41.4vw] w-full pb-0 relative ">
                            <img src={`/images/${work.largeImage}.png`} alt="" className="h-full w-full  object-cover" />
                            <div className=" absolute bottom-0 right-0 left-0 top-0 bg-me flex justify-end items-center">
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.8" stroke="currentColor" className="size-7 text-[#FFEFCC]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>

                                </div>
                            </div>
                            <div className="absolute bg-[#00000086] text-[#FFf] text-[8px] p-1 top-1 left-1 rounded">{work.workType}</div>
                        </div>}
                        <div className="lg:col-span-6 xs:col-span-12 pl-0 basis-[49%] h-auto flex flex-col items-center justify-between">
                            <div className="work-text flex-grow flex flex-col gap-3">
                                <div className="work-type font-General_Sans font-medium text-2xl text-[#878787] lg:block xs:hidden">{work.workType}</div>
                                <div className="work-name font-Medium_Grotesk text-[#FFEFCC] tracking-normal md:text-4xl lg:no-underline xs:underline underline-offset-4">{work.workName}</div>
                                <div className="work-description font-General_Sans font-medium md:text-2xl xs:text-[12px]  text-[#F0F0F0]">{work.description}</div>
                            </div>
                            <div className="lg:block xs:hidden">
                                <div className="flex justify-end my-3 gap-1">
                                    <div className="flex justify-center items-center h-[2.375rem] w-[2.375rem] bg-transparent border border-[#C3B09D] rounded-full">
                                        <ArrowLeftIcon className="h-5 w-5 text-[#C3B09D]" />
                                    </div>
                                    <div className="flex justify-center items-center h-[2.375rem] w-[2.375rem] bg-[#C3B09D] rounded-full">
                                        <ArrowRightIcon className="h-5 w-5 text-[#051118]" />
                                    </div>
                                </div>
                                { work.otherImages[0] && <div className="flex justify-between items-center gap-5">
                                    <div className="flex items-end ">
                                        <img src={`/images/${work.otherImages[0]}.png`} alt="" className="object-cover"/>
                                    </div>
                                    <div className="flex items-end">
                                        <img src={`/images/${work.otherImages[1]}.png`} alt="" className="object-cover"/>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                ))}
            </div> 
            <div className="flex lg:justify-end xs:justify-center  py-4 xs:pt-[18vw] lg:pt-[3.2vw]">
               <Link to='/overlay'>
               <button className="lg:text-[#FFF9EB] md:border lg:border-[#E8E8E8] lg:bg-[#171717] overflow-hidden   xs:bg-[#D9D9D9] rounded-3xl px-10 font-Medium_Grotesk md:text-[1.6rem] xs:text-[14px] xs:text-[#000] py-1 tracking-wider h-[54px] lg:w-[177px] xs:w-[230px]">
                    <span className="lg:block xs:hidden">View all</span> 
                    <span className="lg:hidden xs:block">Learn More</span> 

                </button>
               </Link>
            </div>
        </div>
   </>
  )
}

export default Portfolio
