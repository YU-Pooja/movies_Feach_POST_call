import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import MovieList from './components/MovieList';
import CompanyInfo from './components/CompanyInfo';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-blue-500 p-4 text-white">
          <Link to="/" className="mr-4">Signup</Link>
          <Link to="/login" className="mr-4">Login</Link>
          <Link to="/movies" className="mr-4">Movies</Link>
          <Link to="/company-info" className="mr-4">Company Info</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/company-info" element={<CompanyInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
