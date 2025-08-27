import React from 'react';
import { Discord } from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
  const handleDiscordLogin = () => {
    window.location.href = '/auth/discord';
  };

  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="main-title">
            <span className="title-accent">999</span>OX
          </h1>
          <h2 className="subtitle">Dashboard</h2>
          <p className="description">
            Professional Roblox Roleplay Community
          </p>
          
          <button 
            className="discord-login-btn"
            onClick={handleDiscordLogin}
          >
            <Discord size={24} />
            <span>Sign in with Discord</span>
          </button>
        </div>
      </div>
      
      <div className="footer">
        <p>&copy; 2024 999OX Community. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HomePage;
