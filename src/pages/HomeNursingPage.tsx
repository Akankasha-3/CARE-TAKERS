import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Clock, Calendar, DollarSign, CheckCircle } from 'lucide-react';

const HomeNursingPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [duration, setDuration] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [additionalInfo, setAdditionalInfo] = useState<string>('');
  
  const nursingServices = [
    {
      id: 'elderly',
      title: 'Elderly Care',
      description: 'Compassionate care for seniors including assistance with daily activities, medication management, and companionship.',
      pricePerDay: 45,
      icon: <Clock size={24} />,
    },
    {
      id: 'postop',
      title: 'Post-Surgery Care',
      description: 'Specialized care for individuals recovering from surgery, including wound care, mobility assistance, and medication management.',
      pricePerDay: 55,
      icon: <CheckCircle size={24} />,
    },
    {
      id: 'chronic',
      title: 'Chronic Illness Care',
      description: 'Ongoing support for individuals with chronic conditions, focusing on comfort, medication adherence, and health monitoring.',
      pricePerDay: 50,
      icon: <CheckCircle size={24} />,
    },
    {
      id: 'disability',
      title: 'Disability Support',
      description: 'Assistance for individuals with disabilities, including personal care, mobility support, and adaptive strategies.',
      pricePerDay: 48,
      icon: <CheckCircle size={24} />,
    },
  ];
  
  const calculateTotalPrice = () => {
    if (!selectedService) return 0;
    const service = nursingServices.find(s => s.id === selectedService);
    return service ? service.pricePerDay * duration : 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., redirect to payment
    console.log({
      selectedService,
      duration,
      selectedDate,
      additionalInfo,
      totalPrice: calculateTotalPrice(),
    });
    
    // Redirect to payment page
    window.location.href = `/payment?service=${selectedService}&duration=${duration}&total=${calculateTotalPrice()}`;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage="Home-Nursing" />
      
      {/* Hero Section */}
      <div className="relative bg-primary py-16">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7551655/pexels-photo-7551655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Home nursing care"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Professional Home-Nursing Services</h1>
          <p className="max-w-2xl mx-auto text-white text-lg">
            Our skilled and compassionate nursing professionals provide personalized care in the comfort of your home.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Selection */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Select a Home-Nursing Service</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {nursingServices.map((service) => (
                <div
                  key={service.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedService === service.id
                      ? 'border-primary shadow-md bg-primary bg-opacity-5'
                      : 'border-gray-200 hover:border-primary hover:shadow-sm'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex items-center mb-2">
                    <div className={`text-primary mr-2`}>{service.icon}</div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  <p className="text-primary font-semibold">${service.pricePerDay} / day</p>
                </div>
              ))}
            </div>
            
            {selectedService && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                    Duration (Days)
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="px-3 py-2 bg-gray-200 rounded-l-md"
                      onClick={() => setDuration(Math.max(1, duration - 1))}
                    >
                      -
                    </button>
                    <input
                      id="duration"
                      type="number"
                      min="1"
                      value={duration}
                      onChange={(e) => setDuration(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-y border-gray-200 py-2"
                    />
                    <button
                      type="button"
                      className="px-3 py-2 bg-gray-200 rounded-r-md"
                      onClick={() => setDuration(duration + 1)}
                    >
                      +
                    </button>
                    <div className="ml-4 flex items-center text-gray-600">
                      <Calendar size={18} className="mr-1" />
                      <span>{duration} {duration === 1 ? 'day' : 'days'}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div>
                  <label htmlFor="info" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="info"
                    rows={4}
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Please provide any specific details about the care needed..."
                  ></textarea>
                </div>
              </form>
            )}
          </div>
          
          {/* Summary */}
          <div>
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold mb-4">Service Summary</h3>
              
              {selectedService ? (
                <>
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <p className="text-gray-600 mb-2">Selected Service:</p>
                    <p className="font-semibold">
                      {nursingServices.find(s => s.id === selectedService)?.title}
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <p className="text-gray-600 mb-2">Duration:</p>
                    <p className="font-semibold">{duration} {duration === 1 ? 'day' : 'days'}</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <p className="text-gray-600 mb-2">Daily Rate:</p>
                    <p className="font-semibold">
                      ${nursingServices.find(s => s.id === selectedService)?.pricePerDay.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 mb-2">Total Price:</p>
                    <p className="text-xl font-bold text-primary">${calculateTotalPrice().toFixed(2)}</p>
                  </div>
                  
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary-dark transition-colors font-medium flex items-center justify-center"
                  >
                    <DollarSign size={18} className="mr-2" />
                    Proceed to Payment
                  </button>
                </>
              ) : (
                <p className="text-gray-500">Please select a service to see pricing details.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Our Home-Nursing Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-semibold mb-2">Qualified Professionals</h3>
              <p className="text-gray-600">All our nurses are certified, experienced, and thoroughly vetted.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-semibold mb-2">Personalized Care Plans</h3>
              <p className="text-gray-600">We create customized care plans based on individual needs and preferences.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Our services are available around the clock for those who need continuous care.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-semibold mb-2">Compassionate Approach</h3>
              <p className="text-gray-600">We provide care with empathy, respect, and dignity for every client.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomeNursingPage;