import './pop-up.css';

const Popup = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className='float-right'>
            <i className='fas fa-window-close' onClick={handleClose}></i>
          </div>
          <div className='error-container'>
            Error: 
          </div>            
          <div className='display-inline'>
            {children}
          </div>
        </section>
      </div>
    );
};

export default Popup;