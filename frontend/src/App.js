import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Test from './components/Test';
import HPCR from './components/HPCR';
import Support from './components/Support';

function App() {
  return (

    <Router>
      <div >
        <header >
          <Nav />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/hpcr/*'element={<HPCR/>}/>
            <Route path='/support' element={<Support/>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
