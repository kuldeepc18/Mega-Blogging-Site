# BlogHub - Modern Blogging Platform

A full-featured, modern blogging platform built with React and Appwrite backend. BlogHub provides a complete solution for creating, managing, and sharing blog posts with a beautiful, responsive design and dark/light theme support.

## 🌟 Features

### Core Functionality
- **User Authentication**: Secure signup/login system with Appwrite
- **Blog Post Management**: Create, edit, delete, and publish blog posts
- **Rich Text Editor**: TinyMCE integration for advanced content creation
- **Image Upload**: Featured image support with Appwrite storage
- **Post Status Control**: Active/inactive post status management
- **Responsive Design**: Mobile-first design that works on all devices

### User Experience
- **Dark/Light Theme**: Toggle between themes with persistent preferences
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS
- **Real-time Updates**: Instant feedback and smooth navigation
- **SEO-friendly URLs**: Automatic slug generation for better SEO
- **Loading States**: Smooth loading animations and user feedback

### Technical Features
- **State Management**: Redux Toolkit for global state management
- **Form Handling**: React Hook Form for efficient form management
- **Routing**: React Router for seamless navigation
- **Backend Integration**: Appwrite for authentication, database, and storage
- **Type Safety**: Modern JavaScript with ESLint configuration

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling and validation
- **TinyMCE React** - Rich text editor

### Backend & Services
- **Appwrite** - Backend-as-a-Service for:
  - User authentication
  - Database management
  - File storage
  - Real-time features

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite** - Build tool and development server

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Appwrite account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blog-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Appwrite**
   - Create an Appwrite project
   - Set up authentication, database, and storage
   - Update the configuration in `src/conf/conf.js`:
     ```javascript
     const conf = {
       appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
       appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
       appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
       appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
       appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
     }
     ```

4. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_APPWRITE_URL=your_appwrite_url
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   VITE_APPWRITE_BUCKET_ID=your_bucket_id
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
blog-website/
├── public/                 # Static assets
├── src/
│   ├── appwrite/          # Appwrite configuration and services
│   │   ├── auth.js        # Authentication service
│   │   └── config.js      # Database and storage services
│   ├── components/        # Reusable UI components
│   │   ├── post-form/     # Post creation/editing form
│   │   ├── Header/        # Navigation header
│   │   ├── Footer/        # Site footer
│   │   └── ...           # Other components
│   ├── Pages/            # Page components
│   │   ├── Home.jsx      # Landing page
│   │   ├── Login.jsx     # Login page
│   │   ├── Signup.jsx    # Registration page
│   │   ├── AddPost.jsx   # Create new post
│   │   ├── EditPost.jsx  # Edit existing post
│   │   ├── Post.jsx      # Individual post view
│   │   └── AllPosts.jsx  # All posts listing
│   ├── store/            # Redux store configuration
│   │   ├── authSlice.js  # Authentication state
│   │   └── store.js      # Store setup
│   ├── context/          # React context providers
│   │   └── ThemeProvider.jsx # Theme context
│   ├── hooks/            # Custom React hooks
│   │   └── useTheme.js   # Theme management hook
│   └── conf/             # Configuration files
│       └── conf.js       # Appwrite configuration
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md            # This file
```

## 🎯 Usage Guide

### For Users
1. **Sign Up/Login**: Create an account or log in to access all features
2. **Browse Posts**: View all published posts on the home page
3. **Read Posts**: Click on any post to read the full content
4. **Create Posts**: Use the "Add Post" feature to create new content
5. **Edit Posts**: Modify your existing posts through the edit interface
6. **Toggle Theme**: Switch between dark and light themes using the theme toggle

### For Developers
- **Adding New Features**: Extend the component structure in `src/components/`
- **Styling**: Use Tailwind CSS classes for consistent styling
- **State Management**: Use Redux Toolkit for global state
- **API Integration**: Extend the Appwrite services in `src/appwrite/`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect your repository
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Any Static Hosting**: The built files in `dist/` can be deployed anywhere

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Appwrite** for providing an excellent backend-as-a-service platform
- **Tailwind CSS** for the beautiful utility-first CSS framework
- **React Team** for the amazing frontend library
- **TinyMCE** for the rich text editing capabilities

## 📞 Support

If you have any questions or need help with the project, please:
- Open an issue on GitHub
- Check the documentation
- Review the code comments for implementation details

---

**Happy Blogging! 🚀**