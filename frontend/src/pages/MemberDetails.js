import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const MemberDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/members/${id}`);
        setMember(res.data);
      } catch (err) {
        setError('Failed to load member details. Please try again later.');
        console.error('Error fetching member:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) {
    return (
      <div className="profile-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-container">
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          <p>{error}</p>
          <button 
            className="retry-button"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="profile-container">
        <div className="empty-state">
          <span className="empty-icon">👤</span>
          <h3>Member not found</h3>
          <p>The requested member could not be found</p>
          <button 
            className="back-button"
            onClick={() => navigate('/members')}
          >
            Back to Members
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <button 
          className="back-button"
          onClick={() => navigate('/members')}
        >
          &larr; Back to Team
        </button>
        <h1 className="profile-title">Member Profile</h1>
      </div>

      <div className="profile-card">
        <div className="profile-image-container">
          <img
            src={`http://localhost:5000/uploads/${member.image}`}
            alt={`${member.name}'s profile`}
            className="profile-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/300?text=No+Image';
            }}
          />
        </div>

        <div className="profile-details">
          <h2 className="member-name">{member.name}</h2>
          <p className="member-role">{member.role}</p>

          <div className="detail-section">
            <h3 className="section-title">Contact Information</h3>
            <div className="detail-item">
              <span className="detail-icon">📧</span>
              <a href={`mailto:${member.email}`} className="detail-value">
                {member.email}
              </a>
            </div>
          </div>

          <div className="action-buttons">
            <button
              className="edit-button"
              onClick={() => navigate(`/members/${id}/edit`)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;