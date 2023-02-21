import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './assets/css/App.css';
import Card from './pages/Card';
import Congratulation from './pages/Congratulation';
import Details from './pages/Details';
import Homepage from './pages/HomePage';
import NotFount from './pages/NotFount';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/catagories/:idc" element={<Details/>} />
          <Route path="/card" element={<Card/>} />
          <Route path="/congratulation" element={<Congratulation/>} />
          <Route path="*" element={<NotFount/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
