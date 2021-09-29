import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Navbar from './core/components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
      </div>
    </BrowserRouter>
  );
};

export default App;