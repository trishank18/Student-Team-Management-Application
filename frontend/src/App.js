// frontend/src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import ViewMembers from './pages/ViewMembers';
import MemberDetails from './pages/MemberDetails';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <div className="header-content">
            <h1 className="app-title">👨‍🎓 Student Team Manager</h1>
            <nav className="app-nav">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/add" className="nav-link">Add Member</Link>
              <Link to="/members" className="nav-link">View Members</Link>
            </nav>
          </div>
        </header>
        
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddMember />} />
            <Route path="/members" element={<ViewMembers />} />
            <Route path="/members/:id" element={<MemberDetails />} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>© {new Date().getFullYear()} Student Team Manager. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;