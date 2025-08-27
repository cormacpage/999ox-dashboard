# 999OX Dashboard

A professional dashboard for the 999OX Roblox roleplay community, featuring Discord OAuth integration and a modern, responsive design.

## Features

- 🔐 **Discord OAuth Integration** - Secure authentication with Discord
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Professional UI** - Modern, clean interface with 999OX branding
- 🚀 **Fast Performance** - Optimized for speed and user experience
- 🔒 **Secure Sessions** - Protected routes and secure session management

## Tech Stack

### Frontend
- React 18
- React Router DOM
- Lucide React (Icons)
- CSS3 with modern features

### Backend
- Node.js
- Express.js
- Discord OAuth2
- Express Sessions
- Helmet (Security)
- CORS enabled

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Discord Application (already configured)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd 999ox-dashboard
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Configure environment variables**
   - Copy `server/config.env` and update the values
   - Update `DISCORD_REDIRECT_URI` to match your setup

4. **Start development servers**
   ```bash
   npm run dev
   ```

   This will start both:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## Discord OAuth Setup

Your Discord application is already configured with:
- **Client ID**: 1409070086601445419
- **Client Secret**: [Configured in environment]

### Required Discord OAuth Scopes
- `identify` - To get user information

### Redirect URI
- Development: `http://localhost:5000/auth/discord/callback`
- Production: `https://your-backend-domain.com/auth/discord/callback`

## Deployment

### Backend (Render.com)

1. **Create a new Web Service on Render**
2. **Connect your GitHub repository**
3. **Configure environment variables:**
   ```
   NODE_ENV=production
   DISCORD_CLIENT_ID=1409070086601445419
   DISCORD_CLIENT_SECRET=your-secret-here
   DISCORD_REDIRECT_URI=https://your-frontend-domain.com/auth/discord/callback
   SESSION_SECRET=auto-generated-by-render
   CLIENT_URL=https://your-frontend-domain.com
   PORT=10000
   ```

4. **Deploy using the render.yaml configuration**

### Frontend (GitHub Pages)

1. **Enable GitHub Pages in your repository settings**
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: main, folder: / (root)

2. **Set GitHub Secrets:**
   - `REACT_APP_API_URL`: Your backend URL (e.g., https://your-backend.onrender.com)

3. **Push to main branch** - GitHub Actions will automatically deploy

## Environment Variables

### Backend (.env)
```env
DISCORD_CLIENT_ID=1409070086601445419
DISCORD_CLIENT_SECRET=your-secret-here
DISCORD_REDIRECT_URI=http://localhost:5000/auth/discord/callback
SESSION_SECRET=your-super-secret-session-key
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

### Frontend
- `REACT_APP_API_URL`: Backend API URL (set in GitHub Secrets for production)

## Project Structure

```
999ox-dashboard/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source code
│   │   ├── components/    # React components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json       # Frontend dependencies
├── server/                 # Node.js backend
│   ├── index.js           # Main server file
│   ├── config.env         # Environment configuration
│   └── package.json       # Backend dependencies
├── .github/                # GitHub Actions
├── render.yaml             # Render deployment config
└── package.json            # Root package.json
```

## Available Scripts

- `npm run dev` - Start both frontend and backend in development
- `npm run server` - Start only the backend server
- `npm run client` - Start only the frontend client
- `npm run build` - Build the frontend for production
- `npm run install-all` - Install dependencies for all packages

## Security Features

- ✅ Helmet.js for security headers
- ✅ CORS configuration
- ✅ Secure session management
- ✅ Environment variable protection
- ✅ Input validation and sanitization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support, please contact the 999OX development team or create an issue in this repository.

---

**Built with ❤️ for the 999OX Community**
