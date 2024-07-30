// import PropTypes from 'prop-types';

const Modal = ({open, onClose, children}) => {
    if (!open) return null;
    
    return (
      <div className={`fixed inset-0 flex items-center justify-center bg-black/75 z-20 ${open ? "visible bg-black/75" : "invisible"}`}>
        <div className="bg-none p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-[7vw] leading-none mb-4 font-Semibold_Grotesk text-gradientFrom">Page under construction</h2>
          <button
            onClick={() => {
                onClose();
                console.log('Close button clicked');
            }}
            className="bg-white text-black px-4 py-2 rounded hover:bg-blue-black hover:text-white"
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

