
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App bg-light min-vh-100">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img src="/octofitapp-small.svg" alt="Octofit Logo" className="octofit-logo me-2" />
              Octofit Tracker
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="/activities">Activities</a></li>
                <li className="nav-item"><a className="nav-link" href="/teams">Teams</a></li>
                <li className="nav-item"><a className="nav-link" href="/leaderboard">Leaderboard</a></li>
                <li className="nav-item"><a className="nav-link" href="/users">Users</a></li>
                <li className="nav-item"><a className="nav-link" href="/workouts">Workouts</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={<h2>Welcome to Octofit Tracker!</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
