import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '', password: '', email: '', phone: '', profession: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle numeric validation for phone number field
    if (name === 'phone') {
      if (!/^\d*$/.test(value)) {
        // Allow only numbers
        setFormData({ ...formData, [name]: value.replace(/\D/, '') });
        return;
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    if (Object.values(formData).some(field => field.trim() === '')) {
      setError('All fields are required!');
      return;
    }

    // Validate phone number length
    if (formData.phone.length < 9) {
      setError('Phone number must be at least 9 digits');
      return;
    }

    // If all fields are filled and valid
    localStorage.setItem('user', JSON.stringify(formData));
    setSuccess('Signup successful!');
    setError('');

    // Clear form fields
    setFormData({
      name: '', password: '', email: '', phone: '', profession: ''
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Signup</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
          className="w-full mb-2 p-2 border rounded" 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          className="w-full mb-2 p-2 border rounded" 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full mb-2 p-2 border rounded" 
        />
        <input 
          type="text" 
          name="phone" 
          placeholder="Phone Number" 
          value={formData.phone} 
          onChange={handleChange} 
          className="w-full mb-2 p-2 border rounded" 
        />
        <select 
          name="profession" 
          value={formData.profession} 
          onChange={handleChange} 
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="">Select Profession</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
