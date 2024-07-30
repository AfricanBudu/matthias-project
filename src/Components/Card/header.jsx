import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div className={`${props.margin}`}>
        <div className={`relative flex items-end justify-start font-Semibold_Grotesk`}>
            {props.order && <div className="absolute xl:text-[15.625rem] md:text-[150px] xs:text-[75px] text-[#5353533B] tracking-tight leading-none xl:-left-6 md:-left-4 xs:-left-2 bottom-0">
                {props.order}
            </div>}
            <div className="relative xl:pl-[4.7rem] md:pl-[42px] xs:pl-[20px] text-right xl:text-[50px] md:text-[30px] xs:text-[15px] text-[#878787] xl:mb-[2.2rem] md:mb-[20px] xs:mb-[12px]">
                <span className="gradient-underline xs:no-underline">
                {props.text}
                </span>
            </div>
        </div>
    </div>
  )
}

Header.defaultProps = {
    margin: 'lg:mt-32'
}

Header.propTypes = {
    order: PropTypes.string,
    text: PropTypes.string,
    margin: PropTypes.any,
}

export default Header;
