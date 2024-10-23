import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">SaaSify</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Features</Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/welcome" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;