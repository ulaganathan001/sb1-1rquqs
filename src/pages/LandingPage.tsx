import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, BarChart, Users, Lock } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Business</span>
              <span className="block text-indigo-600">with Our SaaS Solution</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Streamline your operations, boost productivity, and scale your business with our powerful platform.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <button
                  onClick={() => navigate('/welcome')}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose Us?
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-indigo-600 mb-4">
                <BarChart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics</h3>
              <p className="text-gray-600">Get detailed insights into your business performance with our advanced analytics.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-indigo-600 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Collaboration</h3>
              <p className="text-gray-600">Work seamlessly with your team members in real-time.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-indigo-600 mb-4">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600">Enterprise-grade security to protect your sensitive data.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1472099645785-5658abf4ff4e' : i === 2 ? '1494790108377-be9c29b29330' : '1507003211169-0a1dd7228f2d'}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                    alt="Testimonial avatar"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">John Doe</h4>
                    <p className="text-gray-600">CEO, Tech Corp</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"This platform has revolutionized how we manage our business. The ROI has been incredible."</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;