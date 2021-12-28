import { useState } from 'react';
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

  const manageSession = () => {
    if(loggedIn) dispatch({ type: 'LOGOUT' })
    else {
      setShowPopup(true);
      // dispatch({ type: 'LOGIN_ASYNC' });    
    }
  }; 

  return (
    <>
      <Popup show={showPopup}>
        <Login></Login>
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