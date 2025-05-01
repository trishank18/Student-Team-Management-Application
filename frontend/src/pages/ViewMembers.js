import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const ViewMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/members');
        setMembers(res.data);
      } catch (err) {
        setError('Failed to load members. Please try again later.');
        console.error('Failed to load members:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return (
      <div className="members-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="members-container">
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

  return (
    <div className="members-container">
      <div className="members-header">
        <h1 className="members-title">👥 Team Members</h1>
        <p className="members-subtitle">{members.length} team members</p>
      </div>

      {members.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">👋</span>
          <h3>No members found</h3>
          <p>Get started by adding your first team member</p>
          <button 
            className="add-member-button"
            onClick={() => navigate('/add')}
          >
            Add Member
          </button>
        </div>
      ) : (
        <div className="members-grid">
          {members.map(member => (
            <div className="member-card" key={member._id}>
              <div className="member-image-container">
                <img
                  src={`http://localhost:5000/uploads/${member.image}`}
                  alt={`${member.name}'s profile`}
                  className="member-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150?text=No+Image';
                  }}
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <div className="member-actions">
                  <button
                    className="view-button"
                    onClick={() => navigate(`/members/${member._id}`)}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewMembers;