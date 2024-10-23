import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-indigo-900 mb-6">Welcome to SaaSPro! 🚀</h1>
        
        <div className="space-y-6">
          <p className="text-gray-600">Thank you for starting your journey with us. Here's what you can do next:</p>
          
          <div className="space-y-4">
            {[
              'Complete your profile setup',
              'Explore the dashboard',
              'Connect your first integration',
              'Invite team members'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <button 
            className="mt-8 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-colors"
            onClick={() => window.location.href = '/dashboard'}
          >
            <span>Continue to Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}