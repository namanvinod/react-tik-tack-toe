import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Navbar from './core/components/Navbar';
import RouterOutlet from './core/components/RouteOutlet';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <RouterOutlet />
      </div>
    </BrowserRouter>
  );
};

export default App;