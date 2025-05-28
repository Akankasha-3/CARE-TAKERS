import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check, CreditCard, Calendar, Lock } from 'lucide-react';

const PaymentPage: React.FC = () => {
  const [service, setService] = useState<string>('');
  const [duration, setDuration] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardName, setCardName] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  
  const [processing, setProcessing] = useState<boolean>(false);
  const [paymentComplete, setPaymentComplete] = useState<boolean>(false);
  
  useEffect(() => {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    const durationParam = params.get('duration');
    const totalParam = params.get('total');
    
    if (serviceParam) setService(serviceParam);
    if (durationParam) setDuration(parseInt(durationParam || '0'));
    if (totalParam) setTotalAmount(parseFloat(totalParam || '0'));
  }, []);
  
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCardNumber(formatCardNumber(value));
  };
  
  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    
    setExpiryDate(value);
  };
  
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setPaymentComplete(true);
    }, 2000);
  };
  
  const getServiceName = () => {
    switch (service) {
      case 'elderly':
        return 'Elderly Care';
      case 'postop':
        return 'Post-Surgery Care';
      case 'chronic':
        return 'Chronic Illness Care';
      case 'disability':
        return 'Disability Support';
      default:
        return 'Home-Nursing Service';
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage="" />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!paymentComplete ? (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary py-4 px-6">
                <h1 className="text-xl font-bold text-white">Secure Payment</h1>
              </div>
              
              <div className="p-6">
                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium">{getServiceName()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{duration} {duration === 1 ? 'day' : 'days'}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t">
                      <span className="text-gray-800 font-semibold">Total Amount:</span>
                      <span className="text-primary font-bold">${totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handlePayment}>
                  <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          id="card-number"
                          type="text"
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          maxLength={19}
                          placeholder="1234 5678 9012 3456"
                          required
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <CreditCard size={16} className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="card-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Cardholder Name
                      </label>
                      <input
                        id="card-name"
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="John Smith"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <div className="relative">
                          <input
                            id="expiry"
                            type="text"
                            value={expiryDate}
                            onChange={handleExpiryDateChange}
                            placeholder="MM/YY"
                            maxLength={5}
                            required
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                          />
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar size={16} className="text-gray-400" />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <div className="relative">
                          <input
                            id="cvv"
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                            placeholder="123"
                            maxLength={3}
                            required
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                          />
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock size={16} className="text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={processing}
                      className={`w-full bg-primary text-white py-3 rounded-md font-medium transition-colors ${
                        processing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark'
                      }`}
                    >
                      {processing ? 'Processing...' : `Pay $${totalAmount.toFixed(2)}`}
                    </button>
                  </div>
                  
                  <div className="mt-4 text-center text-sm text-gray-500 flex items-center justify-center">
                    <Lock size={14} className="mr-1" />
                    <span>Secure payment powered by Stripe</span>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
                <Check size={32} className="text-green-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your payment of ${totalAmount.toFixed(2)} for {getServiceName()}.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6 max-w-md mx-auto">
                <h3 className="font-semibold mb-2">Next Steps</h3>
                <p className="text-gray-600 text-sm">
                  Our team will contact you within 24 hours to confirm your service details 
                  and schedule the start date. You'll receive a confirmation email shortly.
                </p>
              </div>
              
              <div className="flex justify-center space-x-4">
                <a
                  href="/dashboard"
                  className="px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors"
                >
                  Go to Dashboard
                </a>
                <a
                  href="/"
                  className="px-4 py-2 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Return to Home
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PaymentPage;