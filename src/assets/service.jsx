import Header from "./header";

const Service = () => {
    return (
        <>
            <Header order={'02'} text={'SERVICES'} />
            <section className=' px-[4.5rem]'>
                {/* =================Services text==================== */}
                <div className='font-General_Sans'>
                    <p className='text-xl leading-[38px] font-[500] text-[#B9B8C1] md:text-[32px]'>
                        Our services entails sculpting and furniture which are tailor made to the client taste.
                        This comes in various size and shapes</p>
                </div>
                {/* ==================Card Container================= */}
                <div className='pt-16'>
                    <div className=" md:grid md:grid-cols-12 md:gap-12">
                        {/* =====First card====== */}
                        <div className='bg-[#2F2A26] mb-4 p-6 rounded-[45px] pb-24 md:col-span-6'>
                            <div className='hidden items-center justify-center py-10 pt-5 w-full md:flex'>
                                <div className='w-[72px] border border-[#D9D9D999]'>

                                </div>
                            </div>
                            <div className=' m-auto bg-slate-300 rounded-[30px] overflow-hidden md:h-[421.85px]'>
                                <img src="/images/nc_25 1.png" alt="" />
                            </div>
                            <div>
                                <h2 className='text-3xl text-[#D6B89F99] font-Semibold_Grotesk py-6 uppercase md:text-[3.125rem]'>furniture</h2>
                                <p className='text-lg font-General_Sans font-[500] text-[#B9B8C1] md:text-[24px] '>Streamline your purchase of exquisite furniture with
                                    our seamless checkout page. From luxurious sofas
                                    to elegant seating sets.
                                </p>
                            </div>
                        </div>
                        {/* =====Second card====== */}
                        <div className='bg-[#2F2A26] p-6 pb-24 rounded-[45px] md:col-span-6'>
                            <div className='hidden items-center justify-center py-10 pt-5 w-full md:flex'>
                                <div className='w-[72px] border border-[#D9D9D999]'>

                                </div>
                            </div>
                            <div className=' h-[421.85px] m-auto bg-slate-300 rounded-[30px] overflow-hidden'>
                                <img src="/images/itinerum7 1.png" alt="" />
                            </div>
                            <div>
                                <h2 className='text-[#D6B89F99] font-Semibold_Grotesk py-6 uppercase md:text-[3.125rem]'>SCULPTURE</h2>
                                <p className='text-lg font-General_Sans font-[500] text-[#B9B8C1] md:text-[24px]'>Discover the artistry of our meticulously crafted sculptures, each a testament to creativity and craftsmanship
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