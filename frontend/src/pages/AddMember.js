import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const AddMember = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    role: '', 
    email: '', 
    image: null 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'image' && files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:5000/api/members', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('✅ Member Added Successfully');
      setFormData({ name: '', role: '', email: '', image: null });
      setPreview(null);
    } catch (err) {
      alert(`❌ Failed to add member: ${err.response?.data?.message || err.message}`);
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Add New Team Member</h2>
        
        <form onSubmit={handleSubmit} className="member-form">
          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" className="preview-image" />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter full name"
              onChange={handleChange}
              value={formData.name}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <input
              id="role"
              name="role"
              type="text"
              placeholder="Enter role (e.g., Developer, Designer)"
              onChange={handleChange}
              value={formData.role}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              onChange={handleChange}
              value={formData.email}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="image" className="file-upload-label">
              {formData.image ? formData.image.name : 'Upload Profile Picture'}
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleChange}
                required
                className="file-upload-input"
              />
            </label>
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding...' : 'Add Member'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMember;