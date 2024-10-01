import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      login();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Welcome Back</h2>
        <div className="mb-5">
          <label className="block text-gray-600 mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
        <p className="text-center text-gray-500 mt-4">
          Don't have an account? <Link to='/signup' className="text-blue-600 hover:underline">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
