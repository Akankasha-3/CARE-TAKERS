import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthForm from '../components/AuthForm';

const AuthPage: React.FC = () => {
  const [formType, setFormType] = useState<'login' | 'signup'>('login');
  const [userType, setUserType] = useState<'user' | 'provider'>('user');
  
  const toggleFormType = () => {
    setFormType(formType === 'login' ? 'signup' : 'login');
  };
  
  const toggleUserType = () => {
    setUserType(userType === 'user' ? 'provider' : 'user');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage="" />
      
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-4xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 bg-primary rounded-t-lg md:rounded-l-lg md:rounded-tr-none text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">
              {formType === 'login' ? 'Welcome Back' : 'Join CARETAKERS'}
            </h2>
            <p className="mb-6">
              {formType === 'login'
                ? 'Log in to access our care services or manage your provider account.'
                : 'Create an account to connect with our services or join our team of care providers.'}
            </p>
            
            <div className="border-t border-white border-opacity-20 pt-6 mt-auto">
              <h3 className="font-semibold mb-2">
                {userType === 'user' ? 'Looking for care services?' : 'Want to provide care?'}
              </h3>
              <p className="text-sm opacity-90">
                {userType === 'user'
                  ? 'Access our home-nursing, adoption, and companionship services.'
                  : 'Join our network of care providers and make a difference in people\'s lives.'}
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-white rounded-b-lg md:rounded-r-lg md:rounded-bl-none shadow-md">
            <AuthForm
              type={formType}
              userType={userType}
              onToggleType={toggleFormType}
              onToggleUserType={toggleUserType}
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AuthPage;