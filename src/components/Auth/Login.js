import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ name: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.name === credentials.name && user.password === credentials.password) {
      navigate('/movies');
    } else {
      setError('Invalid Credentials');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;
