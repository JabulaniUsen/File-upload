// src/Pages/Signup.js
import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the signup logic (e.g., API call to register the user)
    if (username && password) {
      login(); // Simulate successful signup by logging in the user
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Create an Account</h2>
        <div className="mb-5">
          <label className="block text-gray-600 mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            placeholder="Choose a username"
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
            placeholder="Choose a password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </button>
        <p className="text-center text-gray-500 mt-4">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
