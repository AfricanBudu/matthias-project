

const Contact = () => {
  return (
    <div className="">
      <div className="grid xl:px-[4.5rem] md:px-[4rem] xs:px-6 grid-cols-12 items-center md:h-full xs:h-[420px]  mybg">
        <div className=" md:col-span-6 xs:col-span-12  flex flex-col md:gap-14 xs:gap-10 py-20 md:bg-none  " >
            <div className="flex flex-col md:gap-8 xs:gap-4">
                <h1 className=" font-Bold_Grotesk xl:text-[120px] md:text-[70px] xs:text-[18px] leading-[83.5px] text-[#9C9485] md:block xs:hidden">CONTACT</h1>
                <h1 className=" font-Bold_Grotesk xl:text-[120px] md:text-[70px] xs:text-[18px] text-[#9C9485] leading-[12px] xs:block md:hidden">CONTACT PLIESSING</h1>
                <p className=" font-General_Sans md:text-[30px] xs:text-[14px] md:leading-[35px] xs:leading-[20px]  text-[#ffffff] md:max-w-[629px] xs:max-w-[275px]">
                    For any enquires, contact us through our 
                    handles and our team will get back to you.
                </p>
            </div>
            <div className="email flex flex-col md:gap-3 xs:gap-1">
                <h1 className=" md:text-[30px] xs:text-[14px] font-General_Sans font-[600] md:leading-[18px] xs:leading-[12px] text-[#ffffff] ">Email</h1>
                <h2 className=" md:text-[24px] xs:text-[14px] font-General_Sans md:leading-[18px] xs:leading-[12px] text-[#ffffff]">matthiaspliessing@gmail.com</h2>
            </div>
            <div className="instagram flex flex-col md:gap-3 xs:gap-1">
                <h1  className=" md:text-[30px] xs:text-[14px] font-General_Sans font-[600] md:leading-[18px] xs:leading-[12px] text-[#ffffff]">Instagram</h1>
                <h2 className="  md:text-[24px] xs:text-[14px] font-General_Sans md:leading-[18px] xs:leading-[12px] text-[#ffffff]">@Matthiaspliessing</h2>
            </div>
        </div>
        <div className=" md:col-span-6 justify-end md:flex xs:hidden">
            <div className=" w-[444.5px]">
            <img src="/images/matthias-pliessnig-1 2.png" alt="" />

            </div>
        </div>
      </div>
      <div className=" text-center md:py-16 xs:py-2">
        <p className=" md:text-[18px] xs:text-[9px] text-[#ffffff] leading-[35px]">Copyright &copy; Matthias Pliessing 2024.</p>
      </div>
    </div>
  )
}

export default Contact
