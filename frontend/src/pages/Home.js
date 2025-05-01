import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">🎓 Welcome to Student Team Management</h1>
        <p className="hero-subtitle">
          Streamline your team management with our intuitive platform
        </p>
      </div>

      <div className="content-grid">
        <div className="info-card">
          <div className="card-header">
            <span className="card-icon">🏛️</span>
            <h2 className="card-title">Institution</h2>
          </div>
          <div className="card-content">
            <h3>SRM Institute of Science and Technology</h3>
            <p>Kattankulathur Campus, Chennai</p>
          </div>
        </div>

        <div className="info-card">
          <div className="card-header">
            <span className="card-icon">💻</span>
            <h2 className="card-title">Program</h2>
          </div>
          <div className="card-content">
            <h3>B.Tech – CSE (Data Science)</h3>
            <p>Specializing in cutting-edge data technologies</p>
          </div>
        </div>
      </div>

      <div className="faculty-card">
        <div className="faculty-header">
          <span className="faculty-icon">👨‍🏫</span>
          <h2>Faculty Advisor</h2>
        </div>
        
        <div className="faculty-profile">
          <h3>Dr. M. Anand</h3>
          <p className="faculty-position">Assistant Professor, Data Science and Business Systems</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <a href="mailto:anandm4@srmist.edu.in" className="contact-link">anandm4@srmist.edu.in</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span>+91 98848 76770</span>
            </div>
          </div>
        </div>

        <div className="faculty-details">
          <div className="detail-section">
            <h4 className="section-title">Research Interests</h4>
            <ul className="styled-list">
              <li>Ad hoc and Sensor Networks</li>
              <li>Cloud Computing</li>
              <li>Data Science and Machine Learning</li>
            </ul>
          </div>

          <div className="detail-section">
            <h4 className="section-title">Courses Taught</h4>
            <ul className="styled-list">
              <li>Computer Networks, Algorithms, OOP</li>
              <li>Compiler Design, Python, C Programming</li>
              <li>Cloud Computing, AI, Usability Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;