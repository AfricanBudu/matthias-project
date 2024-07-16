import Header from "./header";

const Service = () => {
  return (
    <>
        <Header order={'02'} text={'SERVICES'}/>
        <section className=' xl:px-[4.5rem] md:px-[4rem] xs:px-6'>
            <div className='font-General_Sans'>
            <p className=' xl:text-[32px] leading-[38px] font-[500] text-[#B9B8C1]'>Our services entails sculpting and furniture which are tailor made to the client taste. 
            This comes in various size and shapes</p>
            </div>
            <div className='pt-16'>
                <div className="grid grid-cols-12 xl:gap-12 md:gap-10 xs:gap-4">
                    <div className=' col-span-6  bg-[#2F2A26] xl:p-6 md:p-4 xs:p-3 pb-24 xl:rounded-[45px] md:rounded-[30px] xs:rounded-[16px]'>
                        <div className='flex items-center justify-center xl:py-10 md:py-8 xs:py-4 pt-5 w-full xl:block md:block xs:hidden'>
                            <div className='w-[72px] border border-[#D9D9D999]'>

                            </div>
                        </div>
                        <div className=' md:h-[421.85px] xs:h-[106px] m-auto bg-slate-300 xl:rounded-[30px] md:rounded-[15px] xs:rounded-[8px] overflow-hidden'>
                            <img src="/images/nc_25 1.png" alt="" />
                        </div>
                        <div>
                            <h2 className='xl:text-[3.125rem] md:text-[2.5rem] xs:text-[12px] text-[#D6B89F99] font-Semibold_Grotesk py-6'>FURNITURE</h2>
                            <p className='xl:text-[24px] md:text-[20px] xs:text-[10px] font-General_Sans font-[500] text-[#B9B8C1] '>Streamline your purchase of exquisite furniture with 
                                our seamless checkout page. From luxurious sofas
                                to elegant seating sets.
                            </p>
                        </div>
                    </div>
                    <div className=' col-span-6  bg-[#2F2A26] xl:p-6 md:p-4 xs:p-3 pb-24 xl:rounded-[45px] md:rounded-[30px] xs:rounded-[16px]'>
                         <div className='flex items-center justify-center xl:py-10 md:py-8 xs:py-4 pt-5 w-full xl:block md:block xs:hidden'>
                            <div className='w-[72px] border border-[#D9D9D999]'>

                            </div>
                        </div>
                        <div className='  md:h-[421.85px] xs:h-[106px] m-auto bg-slate-300 xl:rounded-[30px] md:rounded-[15px] xs:rounded-[8px] overflow-hidden'>
                            <img src="/images/itinerum7 1.png" alt="" />
                        </div>
                        <div>
                            <h2 className='xl:text-[3.125rem] md:text-[2.5rem] xs:text-[12px] text-[#D6B89F99] font-Semibold_Grotesk py-6'>SCULPTURE</h2>
                            <p className='xl:text-[24px] md:text-[20px] xs:text-[10px]  font-General_Sans font-[500] text-[#B9B8C1] '>Discover the artistry of our meticulously crafted sculptures, each a testament to creativity and craftsmanship
                            </p>
                        </div>
                    </div>
                   
                   
                </div>
            </div>
        </section>
    </>
  )
}

export default Service;