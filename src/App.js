import { useDispatch, useSelector } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import './App.css';

import Navbar from './core/components/Navbar'; // Default Export
import { RouterOutlet } from './core/components/RouteOutlet'; // Named Export

const App = () => {
  const loggedIn = useSelector(({ session }) => session.loggedIn);
  const dispatch = useDispatch();

  const manageSession = () => {
    if(loggedIn) dispatch({ type: 'LOGOUT' })
    else dispatch({ type: 'LOGIN_ASYNC' })
  }; 

  return (
    <HashRouter>
      <div className="app-container">
        <Navbar manageSession={manageSession} loggedIn={loggedIn} />
        <RouterOutlet />
      </div>
    </HashRouter>
  );
};

export default App;