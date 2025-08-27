import React from 'react';
import { LogOut, User, Hash, Image as ImageIcon } from 'lucide-react';
import './Dashboard.css';

const Dashboard = ({ user, onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1 className="dashboard-title">
            <span className="title-accent">999</span>OX Dashboard
          </h1>
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="user-profile">
          <div className="profile-header">
            <div className="avatar-container">
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={`${user.displayName}'s avatar`} 
                  className="user-avatar"
                />
              ) : (
                <div className="avatar-placeholder">
                  <ImageIcon size={48} />
                </div>
              )}
            </div>
            <div className="profile-info">
              <h2 className="user-display-name">{user.displayName}</h2>
              <p className="user-username">@{user.username}</p>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-card">
              <div className="detail-icon">
                <User size={20} />
              </div>
              <div className="detail-content">
                <h3>Display Name</h3>
                <p>{user.displayName}</p>
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-icon">
                <Hash size={20} />
              </div>
              <div className="detail-content">
                <h3>Username</h3>
                <p>{user.username}</p>
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-icon">
                <Hash size={20} />
              </div>
              <div className="detail-content">
                <h3>Discord ID</h3>
                <p className="discord-id">{user.id}</p>
              </div>
            </div>

            {user.discriminator && (
              <div className="detail-card">
                <div className="detail-icon">
                  <Hash size={20} />
                </div>
                <div className="detail-content">
                  <h3>Discriminator</h3>
                  <p>#{user.discriminator}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="welcome-message">
          <h3>Welcome to 999OX!</h3>
          <p>You're now signed in to your community dashboard. Here you can view your profile information and access community features.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
