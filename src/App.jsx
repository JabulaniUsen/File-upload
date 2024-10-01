// src/App.js
import './App.css';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FileUpload from './Pages/FileUpload';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <Router> {/* Router component wraps everything */}
      <AuthProvider> {/* AuthProvider should be inside Router */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/upload" element={<FileUpload />} />
          <Route path="/" element={<Login />} /> {/* Redirect to Login by default */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
