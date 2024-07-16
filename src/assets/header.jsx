import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <div className="overflow-hidden mt-10">
        <div className="relative h-56 flex items-end justify-start overflow-hidden font-Semibold_Grotesk">
            {props.order && <div className="absolute xl:text-[15.625rem] md:text-[120px] xs:text-[120px] text-[#5353533B] tracking-tight leading-none -left-6 bottom-0">
                {props.order}
            </div>}
            <div className="relative xl:pl-[4.7rem] md:pl-[4.7rem] xs:pl-6 text-right xl:text-[50px] md:text-[30px] xs:text-[18px] text-[#878787] mb-[2.2rem]">
                <span className="gradient-underline">
                {props.text}
                </span>
            </div>
        </div>
    </div>
  )
}

Header.propTypes = {
    order: PropTypes.string,
    text: PropTypes.string
}

export default Header;
