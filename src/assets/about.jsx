import Header from "./header";
// import img from "/";

const About = () => {

    return (
        <div className=" overflow-x-hidden relative">
            {/* ==== Header ========= */}
            <Header order={'01'} text={'ABOUT'} />
            {/* ======== About First Content============= */}
            <div className="pl-14 xs:pl-10 flex flex-col justify-between md:flex-row md:pl-44 md:pr-20">
                {/* ====First image==== */}
                <div className="absolute  -right-24 -top-0 w-[60%] md:right-auto md:relative md:mx-0 md:w-auto">
                    <img src="/images/matthias-about-image.png" alt="" />
                </div>
                {/* ====First content==== */}
                <div className="pt-3 leading-7 pr-5  md:mt-0 md:w-1/2">

                    <p className="text-[#D6B89F] xl:leading-[2.9375rem] font-Medium_Grotesk md:text-[2.8125rem] xs:leading-1 md:max-w-[496px] xs:max-w-[218px] ">

                        “To be completely engaged with a material is a way
                        to cheat time, to slow it down. My work ethic and
                        construction approaches are rooted in this discipline
                        of concentrated engagement.”
                    </p>
                </div>
            </div>
            {/* ======== About Second Content============= */}
            <div className="matthias-background w-full md:pt-40 xs:pt-10 pb-5">
                <div className="absolute bg-gradient-to-r w-[15.875rem] h-[10.25rem] blur-[100px] top-[59rem] -right-20 rounded-[100%]" />
                <div className="md:px-[3.625rem] xs:px-6 md:text-[32px] xs:text-[14px] font-General_Sans font-medium ">
                    <p className="leading-relaxed text-[#D9DBDC]  md:leading-tight md:max-w-[1318px] font-[500]">
                        <span className="font-[700]">Pliessing</span> is a graduate of Rhode Island School of Design
                        and the University of Wisconsin (Madison). His interest
                        in woodworking developed after he decided to build a boat and
                      
                        was inspired to apply those techniques, particularly
                        steam bending of wood strips around a mold, to furniture making.
                    </p>
                    <p className="text-[#FFEFCC] md:text-[1.5rem] xs:text-[14px] mt-5 underline capitalize underline-offset-4">continue</p>
                </div>
                {/* ====Second image==== */}
                <div className="flex justify-center items-center px-[3rem] my-10 mt-20">
                    <img src="/images/matthias-background-mage.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default About;
