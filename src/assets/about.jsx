import Header from "./header";
import img from "/images/matthias-about-image.png";

const About = () => {
  return (
    <div className=" overflow-x-hidden relative">
        {/* ==== Header ========= */}
        <Header order={'01'} text={'ABOUT'}/>
        {/* ======== About Content==== */}
        <div className="pl-44 pr-20 flex flex-col justify-between md:flex-row">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="pt-3">
                <p className="text-[#D6B89F] text-[2.8125rem] leading-[2.9375rem] font-Medium_Grotesk">
                “To be completely <br/>engaged with a material <br/>is a way 
                to cheat time, to <br/>slow it down. My work <br/>ethic and 
                construction <br/>approaches are rooted <br/>in this discipline 
                of <br/>concentrated <br/>engagement.”
                </p>
            </div>
        </div>

        <div className="matthias-background w-full pt-40 pb-5">
            <div className="absolute bg-gradient-to-r w-[15.875rem] h-[10.25rem] blur-[100px] top-[59rem] -right-20 rounded-[100%]" />
            <div className="px-[3.625rem] text-[1.8rem] font-General_Sans font-medium">
                <p className="leading-tight text-[#D9DBDC]">
                    Pliessing is a graduate of Rhode Island School of Design 
                    and the University of Wisconsin (Madison). His interest 
                    in woodworking developed after he decided to build a boat and
                    <br/>
                    <br/>
                    was inspired to apply those techniques, particularly 
                    steam bending of wood strips <br/>around a mold, to furniture making.
                </p>
                <p className="text-[#FFEFCC] text-[1.5rem]">continue</p>
            </div>
            <div className="flex justify-center items-center px-[3rem] my-10 mt-20">
                <img src="/images/matthias-background-mage.png" alt="" />
            </div>
        </div>

    </div>
  )
}

export default About;
