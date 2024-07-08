import React from 'react'


const service = () => {
  return (
    <>
        <section className=' p-[4.5rem]'>
            <div className="relative w-[14.7rem]  text-[3.125rem] text-[#878787] mb-[2.2rem] font-Semibold_Grotesk">
                    <span className="gradient-underline font-[600]">
                    SERVICE
                    </span>
            </div>
            <div className='font-General_Sans'>
            <p className=' text-[32px] leading-[38px] font-[500] text-[#B9B8C1]'>Our services entails sculpting and furniture which are tailor made to the client taste. 
            This comes in various size and shapes</p>
            </div>
            <div className='pt-16'>
                <div className="grid grid-cols-12 gap-12">
                    <div className=' col-span-6  bg-[#2F2A26] h-[835px] p-6 rounded-[45px]'>
                        <div className='flex items-center justify-center py-10 pt-5 w-full'>
                            <div className='w-[72px] border border-[#D9D9D999]'>

                            </div>
                        </div>
                        <div className=' h-[421.85px] m-auto bg-slate-300 rounded-[30px] overflow-hidden'>
                            <img src="/images/nc_25 1.png" alt="" />
                        </div>
                        <div>
                            <h2 className='text-[3.125rem] text-[#D6B89F99] font-Semibold_Grotesk py-6'>FURNITURE</h2>
                            <p className='text-[24px] font-General_Sans font-[500] text-[#B9B8C1] '>Streamline your purchase of exquisite furniture with 
                                our seamless checkout page. From luxurious sofas
                                to elegant seating sets.
                            </p>
                        </div>
                    </div>
                    <div className=' col-span-6 bg-[#2F2A26] h-[835px] p-6 rounded-[45px]'>
                         <div className='flex items-center justify-center py-10 pt-5 w-full'>
                            <div className='w-[72px] border border-[#D9D9D999]'>

                            </div>
                        </div>
                        <div className=' h-[421.85px] m-auto bg-slate-300 rounded-[30px] overflow-hidden'>
                            <img src="/images/itinerum7 1.png" alt="" />
                        </div>
                        <div>
                            <h2 className='text-[3.125rem] text-[#D6B89F99] font-Semibold_Grotesk py-6'>SCULPRTURE</h2>
                            <p className='text-[24px] font-General_Sans font-[500] text-[#B9B8C1] '>Discover the artistry of our meticulously crafted sculptures, each a testament to creativity and craftsmanship
                            </p>
                        </div>
                    </div>
                   
                   
                </div>
            </div>
        </section>
    </>
  )
}

export default service