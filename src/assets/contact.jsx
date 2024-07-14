

const Contact = () => {
  return (
    <div className="px-16 pt-24">
      <div className="grid grid-cols-12 items-center">
        <div className=" col-span-6  flex flex-col gap-14" >
            <div className="flex flex-col gap-8">
                <h1 className=" font-Bold_Grotesk text-[120px] leading-[83.5px] text-[#9C9485]">CONTACT</h1>
                <p className=" font-General_Sans text-[30px] leading-[25px] text-[#ffffff]">
                    For any enquires, contact us through our 
                    handles and our team will get back to you.
                </p>
            </div>
            <div className="email flex flex-col gap-3">
                <h1 className=" text-[30px] font-General_Sans font-[600] leading-[18px] text-[#ffffff]">Email</h1>
                <h2 className=" text-[24px] font-General_Sans leading-[18px] text-[#ffffff]">matthiaspliessing@gmail.com</h2>
            </div>
            <div className="instagram flex flex-col gap-3">
                <h1  className=" text-[30px] font-General_Sans font-[600] leading-[18px] text-[#ffffff]">Instagram</h1>
                <h2 className=" text-[24px] font-General_Sans leading-[18px] text-[#ffffff]">@Matthiaspliessing</h2>
            </div>
        </div>
        <div className=" col-span-6  flex justify-end ">
            <div className=" w-[444.5px]">
            <img src="/images/matthias-pliessnig-1 2.png" alt="" />

            </div>
        </div>
      </div>
      <div className=" text-center py-16">
        <p className=" text-[18px] text-[#ffffff] leading-[35px]">Copyright &copy; Matthias Pliessing 2024.</p>
      </div>
    </div>
  )
}

export default Contact
