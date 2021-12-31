import './pop-up.css';

const Popup = ({ handleClose, show, children, loginError }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className='float-right'>
                    <i className='fas fa-window-close' onClick={handleClose}></i>
                </div>
                {
                    loginError && loginError.trim() !== '' &&
                    <div className='error-container'>
                        Error: {loginError}
                    </div>
                }
                <div className='display-inline'>
                    {children}
                </div>
            </section>
        </div>
    );
};

export default Popup;