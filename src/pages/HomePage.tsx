import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { Heart, Users, MessageCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage="Home" />
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              CARETAKERS provides comprehensive care services to meet various needs,
              from professional home nursing to adoption assistance and companionship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Home-Nursing"
              description="Professional care services for elderly, sick, or individuals needing assistance at home."
              icon={<Heart size={24} className="text-white" />}
              bgColor="bg-primary"
              textColor="text-white"
              iconColor="bg-white bg-opacity-20"
              buttonText="Learn More"
              buttonLink="/home-nursing"
            />
            
            <ServiceCard
              title="Adoption"
              description="Helping children find loving homes through our comprehensive adoption services."
              icon={<Users size={24} className="text-white" />}
              bgColor="bg-secondary"
              textColor="text-white"
              iconColor="bg-white bg-opacity-20"
              buttonText="Learn More"
              buttonLink="/adoption"
            />
            
            <ServiceCard
              title="Companionship"
              description="Providing emotional support and companionship through calls and messages."
              icon={<MessageCircle size={24} className="text-white" />}
              bgColor="bg-accent"
              textColor="text-white"
              iconColor="bg-white bg-opacity-20"
              buttonText="Learn More"
              buttonLink="/companionship"
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our simple process ensures you get the care you need quickly and efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
              <p className="text-gray-600">
                Sign up as a service user to access our range of care services.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Select a Service</h3>
              <p className="text-gray-600">
                Choose from home-nursing, adoption, or companionship based on your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Connected</h3>
              <p className="text-gray-600">
                We'll match you with the right care provider or service based on your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Hear from people who have experienced the compassionate care from CARETAKERS.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              content="The home-nursing service from CARETAKERS has been a blessing for our family. The caregiver is professional, caring, and has become like family to us."
              author="Sarah Johnson"
              role="Home-Nursing Client"
              imageUrl="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <TestimonialCard
              content="The adoption process was smooth and transparent. CARETAKERS provided guidance every step of the way, and we couldn't be happier with our new family member."
              author="Michael & Lisa Chen"
              role="Adoption Clients"
              imageUrl="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <TestimonialCard
              content="The companionship service has made a tremendous difference in my father's life. Having someone to talk to regularly has improved his mood and overall wellbeing."
              author="David Thompson"
              role="Companionship Client"
              imageUrl="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto text-white opacity-90 mb-8">
            Join CARETAKERS today and discover the difference compassionate care can make in your life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/signup"
              className="px-8 py-3 rounded-md bg-white text-primary font-medium hover:bg-gray-100 transition-colors text-lg w-full sm:w-auto"
            >
              Sign Up Now
            </a>
            <a
              href="/contact"
              className="px-8 py-3 rounded-md bg-transparent border-2 border-white text-white font-medium hover:bg-white hover:bg-opacity-10 transition-colors text-lg w-full sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;