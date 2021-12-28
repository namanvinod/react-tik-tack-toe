import './pop-up.css';

const Popup = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className='display-inline'>
            {children}
          </div>
          <div className='display-inline'>
            <button type="button" onClick={handleClose}>
                Close
            </button>
          </div>
        </section>
      </div>
    );
};

export default Popup;