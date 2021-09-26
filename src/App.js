import './App.css';

import Game from './components/Game';
import Navbar from './core/components/Navbar';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Game />
    </div>
  );
};

export default App;