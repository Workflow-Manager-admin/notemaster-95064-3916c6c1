import React, { useContext } from 'react';
import { NotesProvider } from './contexts/NotesContext';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import LoginPage from './pages/LoginPage';

import './App.css';

// PUBLIC_INTERFACE
function App() {
  /** Main App entry point, providing Auth & Notes contexts and global layout. */
  return (
    <AuthProvider>
      <NotesProvider>
        <AppLayout />
      </NotesProvider>
    </AuthProvider>
  );
}

// Layout that decides between Auth and MainApp
function AppLayout() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="app-root">
      {isAuthenticated ? (
        <>
          <Navbar />
          <div className="main-layout">
            <Sidebar />
            <MainContent />
          </div>
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
