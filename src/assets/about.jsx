import Header from "../Components/Card/header";
// import img from "/";
import { Link } from 'react-router-dom';
const About = () => {

    return (
        <div className="relative ">
            {/* ==== Header ========= */}
            <Header order={'01'} text={'ABOUT'} margin={'tab:mt-[27vw]'}/>
            {/* ======== About First Content============= */}
            <div className=" flex flex-col lg:justify-between lg:items-center lg:flex-row lg:px-[8vw] xl:px-[12.2vw]">

                <div className="tab:absolute tab:-right-[17vw] tab:-top-[27vw] tab:w-[50%] relative lg:w-auto ">
                    <img src="/images/matthias-about-image.png" alt="" />
                </div>

                <div className="pt-3 pl-[13.4vw] leading-7 tab:mt-[13.4vw]">

                    <p className="text-[#D6B89F] xl:leading-[2.9375rem] font-Medium_Grotesk tab:text-[5vw] lg:text-[2.8125rem] xs:leading-none ">

                        “To be completely <br className="tab:hidden"/>engaged <br className="lg:hidden"/>
                        with a <br className="tab:hidden"/>material is a way to <br/>
                        cheat time, to slow it <br className="tab:hidden"/>down. <br className="lg:hidden"/>
                        My work ethic <br className="tab:hidden"/>and <br className="lg:hidden"/>
                        construction <br className="tab:hidden"/>approaches <br className="lg:hidden"/>
                        are <br className="tab:hidden"/>rooted in this discipline
                        <br/>of concentrated <br/>engagement.”
                    </p>
                </div>
            </div>
            {/* ======== About Second Content============= */}
            <div className="matthias-background w-full flex flex-col items-center md:pt-[4vw] tab:mt-[16vw] xs:pt-[2.78vw] pb-5">
                <div className="md:px-[3.625rem] xs:px-[5.5vw] md:text-[32px] xs:text-[14px] font-General_Sans font-medium ">
                    <p className="leading-relaxed text-[#D9DBDC]  md:leading-tight md:max-w-[1318px] font-[500]">
                        <span className="font-[700]">Pliessing</span> is a graduate of Rhode Island School of Design
                        and the University of Wisconsin (Madison). His interest
                        in woodworking developed after he decided to build a boat and
                      
                        was inspired to apply those techniques, particularly
                        steam bending of wood strips around a mold, to furniture making.
                    </p>
                    <Link to='/overlay'>
                    <p className="text-[#FFEFCC] md:text-[1.5rem] xs:text-[14px] mt-5 underline capitalize underline-offset-4">continue</p>

                    </Link>
                </div>
                <div className="flex items-end lg:justify-end tab:justify-center">
                    <div className="absolute bg-gradient-to-r w-[17.64vw] h-[11.4vw] xs:blur-[40px] sm:blur-[6.95vw] lg:-right-[5vw] rounded-[100%] z-[-1]" />
                </div>
                {/* ====Second image==== */}
                <div className="flex phone:w-full justify-center items-center xs:px-[5.5vw] sm:px-[3rem] my-10 sm:mt-20">
                    <img src="/images/matthias-background-mage.png" alt="" className="" />
                </div>
            </div>

        </div>
    )
}

export default About;
