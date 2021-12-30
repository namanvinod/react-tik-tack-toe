import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import './App.css';

import Navbar from './core/components/Navbar'; // Default Export
import Popup from './core/components/pop-up';
import Login from './components/login/login';
import { RouterOutlet } from './core/components/RouteOutlet'; // Named Export

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const loggedIn = useSelector(({ session }) => session.loggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if(loggedIn) setShowPopup(false); 
  }, [loggedIn]);

  const manageSession = () => {
    if(loggedIn) dispatch({ type: 'LOGOUT' })
    else {
      setShowPopup(true);    
    }
  }; 

  return (
    <>
      <Popup show={showPopup}>
        {showPopup && <Login></Login>}
      </Popup>
      <HashRouter>
        <div className="app-container">
          <Navbar manageSession={manageSession} loggedIn={loggedIn} />
          <RouterOutlet />
        </div>
      </HashRouter>
    </>
  );
};

export default App;