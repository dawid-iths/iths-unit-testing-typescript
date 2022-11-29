import './App.css';
import NavMenu from './components/NavBar/NavMenu';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import SnapShot from './pages/SnapShot';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/snapshot" element={<SnapShot />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
