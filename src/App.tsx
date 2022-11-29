import './App.css';
import NavMenu from './components/NavBar/NavMenu';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import SnapShot from './pages/SnapShot';
import StyleTest from './pages/StyleTest';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/snapshot" element={<SnapShot />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/styletest" element={<StyleTest />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
