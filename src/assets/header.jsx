import PropTypes, { number, text } from 'prop-types';
const Header = () => {
  return (
    <div className="overflow-hidden mt-10">
        <div className="relative h-56 flex items-end justify-start overflow-hidden font-Semibold_Grotesk">
            {number && <div className="absolute text-[15.625rem] text-[#5353533B] tracking-tight leading-none -left-6 bottom-0">
                {number}
            </div>}
            <div className="relative w-[14.7rem] text-right text-[3.125rem] text-[#878787] mb-[2.2rem]">
                <span className="gradient-underline">
                {text}
                </span>
            </div>
        </div>
    </div>
  )
}

Header.PropTypes = {
    number: PropTypes.number,
    text: PropTypes.string
}

export default Header
