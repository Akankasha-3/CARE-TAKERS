import React, { useState } from 'react';

interface AuthFormProps {
  type: 'login' | 'signup';
  userType: 'user' | 'provider';
  onToggleType: () => void;
  onToggleUserType: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  type,
  userType,
  onToggleType,
  onToggleUserType,
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would handle authentication logic
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {type === 'login' ? 'Log In' : 'Sign Up'} as {userType === 'user' ? 'Service User' : 'Service Provider'}
        </h2>
        <p className="text-gray-600 mt-2">
          {type === 'login'
            ? 'Welcome back! Please enter your details.'
            : 'Create an account to get started.'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {type === 'signup' && (
          <div>
            <label htmlFor="name\" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              placeholder="Enter your full name"
            />
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            placeholder="Enter your email"
          />
        </div>

        {type === 'signup' && (
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              placeholder="Enter your phone number"
            />
          </div>
        )}

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            placeholder="Enter your password"
          />
        </div>

        {type === 'signup' && (
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              placeholder="Confirm your password"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
        >
          {type === 'login' ? 'Log In' : 'Sign Up'}
        </button>
      </form>

      <div className="mt-6">
        <button
          onClick={onToggleUserType}
          className="text-sm text-primary hover:underline block mb-2 text-center w-full"
        >
          {userType === 'user'
            ? 'Sign in as a Service Provider'
            : 'Sign in as a Service User'}
        </button>
        <button
          onClick={onToggleType}
          className="text-sm text-gray-600 hover:underline block text-center w-full"
        >
          {type === 'login'
            ? "Don't have an account? Sign up"
            : 'Already have an account? Log in'}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;