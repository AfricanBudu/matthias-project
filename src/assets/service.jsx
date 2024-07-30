import Header from "../Components/Card/header";

const Service = () => {
  return (
    <div className="">
        <Header order={'02'} text={'OUR SERVICES'} margin={'mt-[15vw]'}/>
        <section className=' xl:px-[4.5rem] md:px-[4rem] xs:px-4'>
            <div className='font-General_Sans'>
                <p className=' lg:text-[32px] lg:leading-[38px] md:text-[22px] xs:text-[12px] font-[500] text-[#B9B8C1]'>Our services entails sculpting and furniture which are tailor made to the client taste. 
                This comes in various size and shapes</p>
            </div>
            <div className='pt-[4.45vw]'>
                <div className="grid grid-cols-12 xl:gap-12 md:gap-10 xs:gap-4">
                    <div className=' col-span-6  bg-[#2F2A26] xl:p-6 md:p-4 xs:p-3 pb-24 xl:rounded-[45px] md:rounded-[30px] xs:rounded-[16px]  relative'>
                        <div className="bg-white w-[40px] h-[40px] rounded-full grid place-items-center absolute bottom-[-20px] right-[40%] lg:hidden xs:grid ">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </div>
                        </div>
                        <div className='flex items-center justify-center xl:py-10 md:py-8 xs:py-4 pt-5 w-full lg:flex xs:hidden'>
                            <div className='w-[72px] border border-[#D9D9D999]'></div>
                        </div>
                        <div className=' lg:h-[421.85px] xs:h-[30vw] m-auto bg-slate-300 xl:rounded-[30px] md:rounded-[15px] xs:rounded-[8px] overflow-hidden'>
                            <img src="/images/nc_25 1.png" alt="" />
                        </div>
                        <div className="lg:pb-24 xs:pb-[5vw]">
                            <h2 className='xl:text-[3.125rem] md:text-[2.5rem] xs:text-[12px] text-[#D6B89F99] font-Semibold_Grotesk py-6 tab:py-2'>FURNITURE</h2>
                            <p className='xl:text-[24px] md:text-[20px] xs:text-[10px] font-General_Sans font-[500] text-[#B9B8C1] '>Streamline your purchase of exquisite furniture with 
                                our seamless checkout page. From luxurious sofas
                                to elegant seating sets.
                            </p>
                        </div>
                    </div>
                    <div className=' col-span-6  bg-[#2F2A26] xl:p-6 md:p-4 xs:p-3 pb-24 xl:rounded-[45px] md:rounded-[30px] xs:rounded-[16px] relative'>
                        <div className="bg-white w-[40px] h-[40px] rounded-full grid place-items-center absolute bottom-[-20px] right-[40%] lg:hidden xs:grid ">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </div>
                        </div>
                        <div className='flex items-center justify-center xl:py-10 md:py-8 xs:py-4 pt-5 w-full lg:flex xs:hidden'>
                            <div className='w-[72px] border border-[#D9D9D999]'>
                            </div>
                        </div>
                        <div className='  lg:h-[421.85px] xs:h-[30vw] m-auto bg-slate-300 xl:rounded-[30px] md:rounded-[15px] xs:rounded-[8px] overflow-hidden'>
                            <img src="/images/itinerum7 1.png" alt="" />
                        </div>
                        <div>
                            <h2 className='xl:text-[3.125rem] md:text-[2.5rem] xs:text-[12px] text-[#D6B89F99] font-Semibold_Grotesk py-6 tab:py-2'>SCULPTURE</h2>
                            <p className='xl:text-[24px] md:text-[20px] xs:text-[10px]  font-General_Sans font-[500] text-[#B9B8C1] '>Discover the artistry of our meticulously crafted sculptures, each a testament to creativity and craftsmanship
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Service;