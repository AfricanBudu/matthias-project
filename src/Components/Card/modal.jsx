// import PropTypes from 'prop-types';

const Modal = ({open, onClose, children}) => {
    if (!open) return null;
    
    return (
      <div className={`fixed inset-0 flex items-center justify-center bg-black/75 backdrop-blur-md z-20 ${open ? "visible bg-black/75" : "invisible"}`}>
        <div className="bg-none p-8 rounded-lg shadow-lg text-center">
          <p className="text-[7vw] leading-none mb-4  text-white pb-10">Page under construction</p>
          <button
            onClick={() => {
                onClose();
                console.log('Close button clicked');
            }}
            className="bg-white text-black px-4 py-2 rounded-3xl hover:bg-black hover:text-white"
          >
            Return to home page
          </button>
        </div>
      </div>
    );
};

// Modal.PropTypes = {
//     open: PropTypes.bool,
//     onClose: PropTypes.func.isRequired,
// };

export default Modal;

