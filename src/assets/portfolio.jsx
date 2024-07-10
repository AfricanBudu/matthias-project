import Header from "./header";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/16/solid";


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
    <div className="pb-10">
        <div className="px-0">
         <Header text='PORTFOLIO'/>
        </div>
        <div className="flex justify-center items-center flex-col px-16 gap-32">
            {portfolios.map((work) => (
                <div className="flex justify-between relative max-h-[28rem]" key={work.id}>
                    {work.largeImage && 
                    <div className="relative flex items-end basis-[49%] h-[28rem] pb-0">
                        <img src={`/images/${work.largeImage}.png`} alt="" className="h-[28rem] basis-full w-full object-cover" />
                    </div>}
                    <div className="relative pl-0 basis-[49%] h-auto flex flex-col items-center justify-between">
                        <div className="work-text flex-grow flex flex-col gap-3">
                            <div className="work-type font-General_Sans font-medium text-2xl text-[#878787]">{work.workType}</div>
                            <div className="work-name font-Medium_Grotesk text-[#FFEFCC] tracking-normal text-4xl">{work.workName}</div>
                            <div className="work-description font-General_Sans font-medium text-2xl text-[#F0F0F0]">{work.description}</div>
                        </div>
                        <div>
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
        <div className="flex justify-end px-16 py-4">
            <button className="text-[#FFF9EB] border border-[#FFF9EB] rounded-3xl px-10 font-Medium_Grotesk text-[1.6rem] py-1 tracking-wider">View all</button>
        </div>
    </div>
  )
}

export default Portfolio
