import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Filter, Users, MapPin, Phone, Calendar } from 'lucide-react';

interface Child {
  id: string;
  name: string;
  age: number;
  gender: string;
  location: string;
  image: string;
  background: string;
  ageGroup: 'infant' | 'toddler' | 'child' | 'teen';
}

const AdoptionPage: React.FC = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  
  const ageGroups = [
    { id: 'all', name: 'All Ages' },
    { id: 'infant', name: 'Infants (0-1 years)' },
    { id: 'toddler', name: 'Toddlers (2-3 years)' },
    { id: 'child', name: 'Children (4-12 years)' },
    { id: 'teen', name: 'Teens (13-17 years)' },
  ];
  
  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'new-york', name: 'New York' },
    { id: 'los-angeles', name: 'Los Angeles' },
    { id: 'chicago', name: 'Chicago' },
    { id: 'houston', name: 'Houston' },
  ];
  
  const children: Child[] = [
    {
      id: '1',
      name: 'Emma',
      age: 2,
      gender: 'Female',
      location: 'New York',
      image: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      background: 'Emma is a cheerful toddler who loves singing and playing with building blocks. She adapts quickly to new environments and gets along well with other children.',
      ageGroup: 'toddler',
    },
    {
      id: '2',
      name: 'Liam',
      age: 1,
      gender: 'Male',
      location: 'Los Angeles',
      image: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      background: 'Liam is a curious and active infant who enjoys exploring his surroundings. He has a strong attachment to his caregivers and responds well to affection.',
      ageGroup: 'infant',
    },
    {
      id: '3',
      name: 'Noah',
      age: 5,
      gender: 'Male',
      location: 'Chicago',
      image: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      background: 'Noah is an intelligent and creative child who loves drawing and reading. He is kind-hearted and shows empathy towards others, especially younger children.',
      ageGroup: 'child',
    },
    {
      id: '4',
      name: 'Sophia',
      age: 14,
      gender: 'Female',
      location: 'Houston',
      image: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      background: 'Sophia is a responsible and mature teenager with a passion for music and mathematics. She is helpful around the house and excels academically.',
      ageGroup: 'teen',
    },
    {
      id: '5',
      name: 'Oliver',
      age: 3,
      gender: 'Male',
      location: 'New York',
      image: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      background: 'Oliver is an energetic toddler who loves outdoor activities and animals. He has a contagious laugh and brings joy to those around him.',
      ageGroup: 'toddler',
    },
    {
      id: '6',
      name: 'Ava',
      age: 8,
      gender: 'Female',
      location: 'Los Angeles',
      image: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      background: 'Ava is a thoughtful and artistic child who enjoys painting and dancing. She is sociable and makes friends easily, showing leadership qualities.',
      ageGroup: 'child',
    },
  ];
  
  const filteredChildren = children.filter((child) => {
    const ageGroupMatch = selectedAgeGroup === 'all' || child.ageGroup === selectedAgeGroup;
    const locationMatch = selectedLocation === 'all' || child.location === locations.find(loc => loc.id === selectedLocation)?.name;
    return ageGroupMatch && locationMatch;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage="Adoption" />
      
      {/* Hero Section */}
      <div className="relative bg-secondary py-16">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Children playing"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Adoption Services</h1>
          <p className="max-w-2xl mx-auto text-white text-lg">
            Helping children find loving homes and supporting families through the adoption journey.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <Filter size={20} className="text-gray-500 mr-2" />
            <h2 className="text-xl font-semibold">Filter Children</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="age-group" className="block text-sm font-medium text-gray-700 mb-1">
                Age Group
              </label>
              <select
                id="age-group"
                value={selectedAgeGroup}
                onChange={(e) => setSelectedAgeGroup(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
              >
                {ageGroups.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                id="location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Children Grid */}
        <h2 className="text-2xl font-bold mb-6">
          {filteredChildren.length} {filteredChildren.length === 1 ? 'Child' : 'Children'} Available for Adoption
        </h2>
        
        {filteredChildren.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChildren.map((child) => (
              <div key={child.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:transform hover:scale-105">
                <img
                  src={child.image}
                  alt={child.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{child.name}</h3>
                    <span className="bg-secondary text-white text-xs px-2 py-1 rounded">
                      {child.age} {child.age === 1 ? 'year' : 'years'}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <Users size={16} className="mr-1" />
                    <span>{child.gender}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-1" />
                    <span>{child.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{child.background}</p>
                  
                  <a
                    href={`/adoption/${child.id}`}
                    className="block w-full bg-secondary text-white text-center py-2 px-4 rounded-md hover:bg-secondary-dark transition-colors font-medium"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-2">No children match your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedAgeGroup('all');
                setSelectedLocation('all');
              }}
              className="text-secondary hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
      
      {/* Adoption Process */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">The Adoption Process</h2>
          
          <div className="relative">
            {/* Process line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">
                    Meet with our adoption specialists to discuss the process, requirements, and your preferences.
                  </p>
                </div>
                <div className="md:w-8 md:h-8 bg-secondary rounded-full z-10 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right"></div>
                <div className="md:w-8 md:h-8 bg-secondary rounded-full z-10 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-xl font-semibold mb-2">Home Study</h3>
                  <p className="text-gray-600">
                    A thorough assessment of your home environment and family readiness for adoption.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">Matching Process</h3>
                  <p className="text-gray-600">
                    We work to find the perfect match between your family and a child in need of a loving home.
                  </p>
                </div>
                <div className="md:w-8 md:h-8 bg-secondary rounded-full z-10 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right"></div>
                <div className="md:w-8 md:h-8 bg-secondary rounded-full z-10 flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-xl font-semibold mb-2">Pre-Placement Visits</h3>
                  <p className="text-gray-600">
                    Supervised visits to help build a relationship before finalization of the adoption.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">Finalization</h3>
                  <p className="text-gray-600">
                    Legal completion of the adoption process, making you the child's legal parent.
                  </p>
                </div>
                <div className="md:w-8 md:h-8 bg-secondary rounded-full z-10 flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right"></div>
                <div className="md:w-8 md:h-8 bg-secondary rounded-full z-10 flex items-center justify-center text-white font-bold">
                  6
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-xl font-semibold mb-2">Post-Adoption Support</h3>
                  <p className="text-gray-600">
                    Ongoing resources and counseling to support your family's adjustment and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary bg-opacity-10 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold text-secondary mb-2">Ready to Start Your Adoption Journey?</h2>
              <p className="text-gray-700">
                Schedule a consultation with our adoption specialists to learn more about the process.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/consultation"
                className="px-6 py-3 bg-secondary text-white rounded-md font-medium hover:bg-secondary-dark transition-colors flex items-center justify-center"
              >
                <Calendar size={18} className="mr-2" />
                Schedule a Consultation
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-secondary text-secondary rounded-md font-medium hover:bg-secondary hover:bg-opacity-10 transition-colors flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AdoptionPage;