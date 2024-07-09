import Header from "./header";

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

        {
            id: 4,
            largeImage: '',
            workType: '',
            workName: '',
            description: '',
            otherImages: ['', '', '']
        },
    ]

  return (   
    <div className="">
        <div className="bg-black px-0">
         <Header text='PORTFOLIO'/>
        </div>
        <div className="flex justify-center items-center flex-col px-16 gap-32">
            {portfolios.map((work) => (
                <div className="flex justify-between items-center relative" key={work.id}>
                    {work.largeImage && 
                    <div className="relative basis-[49%]">
                        <img src={`/images/${work.largeImage}.png`} alt="" className="h-full w-full object-cover" />
                    </div>}
                    <div className="relative bg-white pl-0 basis-[49%] h-full flex flex-col items-center justify-start">
                        <div className="work-text flex-grow">
                            <div className="work-type font-General_Sans font-medium text-2xl text-[#878787]">{work.workType}</div>
                            <div className="work-name font-Medium_Grotesk text-[#FFEFCC] tracking-normal text-4xl">{work.workName}</div>
                            <div className="work-description font-General_Sans font-medium text-2xl text-[#F0F0F0]">{work.description}</div>
                        </div>
                        <div>
                            <div></div>
                            <div className="flex justify-between">
                                <div>
                                    <img src={`/images/${work.otherImages[0]}.png`} alt="" />
                                </div>
                                <div>
                                    <img src={`/images/${work.otherImages[1]}.png`} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div> 
    </div>
  )
}

export default Portfolio
