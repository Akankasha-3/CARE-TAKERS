import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MessageCircle, Phone, Clock, Calendar, User, CheckCircle } from 'lucide-react';

const CompanionshipPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'call' | 'message'>('call');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage="Companionship" />
      
      {/* Hero Section */}
      <div className="relative bg-accent py-16">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7155164/pexels-photo-7155164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Companionship service"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Companionship Services</h1>
          <p className="max-w-2xl mx-auto text-white text-lg">
            Providing emotional support and meaningful connections through personalized call and message services.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 text-center font-medium text-lg ${
                activeTab === 'call'
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('call')}
            >
              <div className="flex items-center justify-center">
                <Phone size={20} className="mr-2" />
                Call Service
              </div>
            </button>
            <button
              className={`flex-1 py-4 text-center font-medium text-lg ${
                activeTab === 'message'
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('message')}
            >
              <div className="flex items-center justify-center">
                <MessageCircle size={20} className="mr-2" />
                Message Service
              </div>
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'call' ? (
              <div>
                <h2 className="text-2xl font-bold mb-4">Call Companionship Service</h2>
                <p className="text-gray-600 mb-6">
                  Our call companionship service connects you with a caring companion for regular
                  phone conversations. Whether you're seeking someone to talk to, share your day with,
                  or simply hear a friendly voice, our companions are here for you.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="bg-accent rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
                            1
                          </div>
                        </div>
                        <p className="ml-3 text-gray-600">
                          Sign up for our call companionship service and complete a brief questionnaire about your interests.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="bg-accent rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
                            2
                          </div>
                        </div>
                        <p className="ml-3 text-gray-600">
                          We match you with a compatible companion based on your preferences and schedule.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="bg-accent rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
                            3
                          </div>
                        </div>
                        <p className="ml-3 text-gray-600">
                          Schedule regular call sessions at times that work for you.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="bg-accent rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
                            4
                          </div>
                        </div>
                        <p className="ml-3 text-gray-600">
                          Enjoy meaningful conversations and build a supportive relationship over time.
                        </p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Call Service Options</h3>
                    <div className="space-y-4">
                      <div className="border rounded-md p-4 bg-white">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-semibold">Weekly Check-in</h4>
                          <span className="text-accent font-semibold">$25/month</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          One 30-minute call each week with your companion.
                        </p>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock size={14} className="mr-1" />
                          <span>30 minutes per call</span>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-4 bg-white border-accent">
                        <div className="absolute -mt-8 bg-accent text-white text-xs px-2 py-1 rounded">
                          Most Popular
                        </div>
                        <div className="flex justify-between mb-2">
                          <h4 className="font-semibold">Regular Connection</h4>
                          <span className="text-accent font-semibold">$45/month</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          Two 30-minute calls each week with your companion.
                        </p>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock size={14} className="mr-1" />
                          <span>30 minutes per call</span>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-4 bg-white">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-semibold">Daily Support</h4>
                          <span className="text-accent font-semibold">$90/month</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          Five 20-minute calls each week with your companion.
                        </p>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock size={14} className="mr-1" />
                          <span>20 minutes per call</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-accent bg-opacity-5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Get Started with Call Companionship</h3>
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Option
                      </label>
                      <select
                        id="service"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      >
                        <option value="weekly">Weekly Check-in ($25/month)</option>
                        <option value="regular" selected>Regular Connection ($45/month)</option>
                        <option value="daily">Daily Support ($90/month)</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        id="notes"
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                        placeholder="Tell us about your interests, preferred call times, etc."
                      ></textarea>
                    </div>
                    
                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-dark transition-colors font-medium"
                      >
                        Sign Up for Call Service
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4">Message Companionship Service</h2>
                <p className="text-gray-600 mb-6">
                  Our message companionship service provides a convenient way to stay connected
                  through text messages, emails, or letters. Perfect for those who prefer written
                  communication or have busy schedules that make calls difficult.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="bg-accent rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
                            1
                          </div>
                        </div>
                        <p className="ml-3 text-gray-600">
                          Sign up for our message companionship service and tell us about your communication preferences.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="bg-accent rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
                            2
                          </div>
                        </div>
                        <p className="ml-3 text-gray-600">
                          Choose your preferred message format: text messages, emails, or traditional letters.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="bg-accent rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
                            3
                          </div>
                        </div>
                        <p className="ml-3 text-gray-600">
                          We match you with a compatible companion who will reach out according to your selected frequency.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="bg-accent rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
                            4
                          </div>
                        </div>
                        <p className="ml-3 text-gray-600">
                          Enjoy meaningful conversations and support through written communication.
                        </p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Message Service Options</h3>
                    <div className="space-y-4">
                      <div className="border rounded-md p-4 bg-white">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-semibold">Casual Connection</h4>
                          <span className="text-accent font-semibold">$15/month</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          Receive 2 messages per week from your companion.
                        </p>
                        <div className="flex items-center text-gray-500 text-sm">
                          <MessageCircle size={14} className="mr-1" />
                          <span>Text or email format</span>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-4 bg-white border-accent">
                        <div className="absolute -mt-8 bg-accent text-white text-xs px-2 py-1 rounded">
                          Most Popular
                        </div>
                        <div className="flex justify-between mb-2">
                          <h4 className="font-semibold">Regular Exchange</h4>
                          <span className="text-accent font-semibold">$30/month</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          Receive 5 messages per week from your companion.
                        </p>
                        <div className="flex items-center text-gray-500 text-sm">
                          <MessageCircle size={14} className="mr-1" />
                          <span>Text, email, or letter format</span>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-4 bg-white">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-semibold">Daily Support</h4>
                          <span className="text-accent font-semibold">$50/month</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          Receive 1-2 messages daily from your companion.
                        </p>
                        <div className="flex items-center text-gray-500 text-sm">
                          <MessageCircle size={14} className="mr-1" />
                          <span>Text, email, or letter format</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-accent bg-opacity-5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Get Started with Message Companionship</h3>
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="msg-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        id="msg-name"
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="msg-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        id="msg-email"
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="msg-phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number (for text messages)
                      </label>
                      <input
                        id="msg-phone"
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="msg-format" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Message Format
                      </label>
                      <select
                        id="msg-format"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      >
                        <option value="text">Text Messages</option>
                        <option value="email">Email</option>
                        <option value="letter">Traditional Letters</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="msg-service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Option
                      </label>
                      <select
                        id="msg-service"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      >
                        <option value="casual">Casual Connection ($15/month)</option>
                        <option value="regular" selected>Regular Exchange ($30/month)</option>
                        <option value="daily">Daily Support ($50/month)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="msg-topics" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Topics
                      </label>
                      <select
                        id="msg-topics"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      >
                        <option value="general">General Conversation</option>
                        <option value="hobby">Hobbies & Interests</option>
                        <option value="motivation">Motivation & Support</option>
                        <option value="custom">Custom Topics (specify in notes)</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="msg-notes" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        id="msg-notes"
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                        placeholder="Tell us about your interests, custom topics, or any specific preferences..."
                      ></textarea>
                    </div>
                    
                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-dark transition-colors font-medium"
                      >
                        Sign Up for Message Service
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Benefits of Companionship Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-semibold mb-2">Reduced Loneliness</h3>
              <p className="text-gray-600">
                Regular communication helps combat feelings of isolation and provides emotional support.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-semibold mb-2">Improved Mental Health</h3>
              <p className="text-gray-600">
                Meaningful conversations can boost mood, reduce anxiety, and provide a sense of connection.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-semibold mb-2">Consistent Support</h3>
              <p className="text-gray-600">
                Regular check-ins provide stability and something to look forward to in your routine.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 relative">
              <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-6">
                <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-gray-700 mb-6">
                  "The call companionship service has been a lifeline for my father who lives alone. 
                  His companion calls twice a week, and he's always in better spirits afterward. It gives 
                  our family peace of mind knowing he has someone checking in regularly."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Jennifer Wilson"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Jennifer Wilson</h4>
                    <p className="text-sm text-gray-500">Call Service Client</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 relative">
              <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-6">
                <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-gray-700 mb-6">
                  "As someone with a busy schedule, the message service has been perfect for me. 
                  I receive thoughtful messages throughout the week that brighten my day. It's amazing 
                  how much a simple text can improve your outlook and make you feel connected."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Marcus Johnson"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Marcus Johnson</h4>
                    <p className="text-sm text-gray-500">Message Service Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CompanionshipPage;