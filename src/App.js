import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Intro from './pages/Intro';
import Details from './pages/Details';
import Location from './pages/Location';
import Rsvp from './pages/Rsvp';
import './App.css';
import './i18n';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/details" element={<Details />} />
            <Route path="/location" element={<Location />} />
            <Route path="/rsvp" element={<Rsvp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;