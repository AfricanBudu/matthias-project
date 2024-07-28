
const Background = () => {
  return (
    <div className=" overflow-hidden mt-[-30vw] xs:mt-[-45vw] ss:mt-[-33vw] sm:mt-[-30vw]">
        <div className="overflow-hidden flex flex-row-reverse justify-start">
            <div className="">
                <div className="absolute bg-radialGradient w-[26.4vw] h-[30.3vw] opacity-100 right-40 blur-[24.4vw] z-[-1]" />
                <img src="/images/itinerumAsBg.png" alt="" className="z-[-1] tab:z-[-1] w-auto tab:hidden"/>
                <img src="/images/itinerum2.png" alt="" className="z-[-1] tab:z-[-1] w-auto lg:hidden sm:w-[40vw]"/>
            </div>
        </div>
    </div>
  )
}

export default Background;
