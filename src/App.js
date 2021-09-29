import { HashRouter } from 'react-router-dom';

import './App.css';

import Navbar from './core/components/Navbar';
import RouterOutlet from './core/components/RouteOutlet';

const App = () => {
  return (
    <HashRouter>
      <div className="app-container">
        <Navbar />
        <RouterOutlet />
      </div>
    </HashRouter>
  );
};

export default App;