import './App.css';
import { Routes, Route } from 'react-router-dom';
import Container from './pages/container/Container';
import Home from './pages/home/Home';
import History from './pages/history/History';
import Climb from './pages/climb/Climb';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Container />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/history' element={<History />} />
          <Route path='/climb' element={<Climb />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
