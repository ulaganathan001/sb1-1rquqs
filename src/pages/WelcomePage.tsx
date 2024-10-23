import React from 'react';
import { CheckCircle } from 'lucide-react';

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900">Welcome to SaaSify!</h1>
          <p className="mt-4 text-xl text-gray-600">
            Thank you for starting your free trial. Let's get you set up for success.
          </p>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Next Steps</h2>
            <div className="space-y-6">
              {[
                'Complete your profile setup',
                'Watch the quick start tutorial',
                'Import your data',
                'Invite team members'
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-600 font-semibold">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need help? Contact our support team at{' '}
            <a href="mailto:support@saasify.com" className="text-indigo-600 hover:text-indigo-700">
              support@saasify.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;