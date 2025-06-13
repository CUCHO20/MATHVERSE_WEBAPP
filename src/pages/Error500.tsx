import React from 'react';
import { Link } from 'react-router-dom';
import { Home, RefreshCw, Mail, AlertTriangle } from 'lucide-react';

const Error500: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Mathematical 500 */}
        <div className="mb-12">
          <div className="relative">
            {/* Large 500 with mathematical styling */}
            <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-r from-red-600 via-orange-600 to-red-800 bg-clip-text leading-none">
              500
            </h1>
            {/* Mathematical symbols decoration for errors */}
            <div className="absolute -top-4 left-8 text-4xl text-red-300 font-serif">⚠</div>
            <div className="absolute top-12 -right-4 text-3xl text-orange-300 font-serif">≠</div>
            <div className="absolute bottom-4 left-16 text-2xl text-red-400 font-serif">!</div>
          </div>
        </div>

        {/* Error Message */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-slate-100">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl shadow-lg animate-pulse">
              <AlertTriangle className="h-12 w-12 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Server Error
          </h2>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Houston, we have a problem! Our mathematical algorithms are experiencing 
            some turbulence. Don't worry, our team is working to solve this equation.
          </p>

          {/* Mathematical equation for server error */}
          <div className="bg-red-50 rounded-2xl p-6 mb-8 border border-red-200">
            <p className="text-lg text-slate-700 font-mono">
              <span className="text-red-600 font-bold">System Error:</span> f(server) = undefined
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Our servers are having an irrational moment
            </p>
            <div className="mt-4 text-xs text-slate-400 font-mono">
              Error Code: MATH_SERVER_OVERFLOW_EXCEPTION
            </div>
          </div>

          {/* What happened section */}
          <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-3 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
              What happened?
            </h3>
            <ul className="text-sm text-slate-600 space-y-2 text-left">
              <li>• Our server encountered an unexpected mathematical paradox</li>
              <li>• The calculation exceeded our computational limits</li>
              <li>• A temporary glitch in our mathematical matrix</li>
              <li>• Someone divided by zero (again!)</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRefresh}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </button>
            
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-xl border-2 border-red-600 hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </Link>
          </div>

          {/* Contact Support */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-600 mb-4">
              If this problem persists, please contact our support team:
            </p>
            <a
              href="mailto:support@mathverse.com"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              <Mail className="mr-2 h-4 w-4" />
              support@mathverse.com
            </a>
          </div>
        </div>

        {/* Server Status */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-4">System Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Database</span>
              <span className="flex items-center text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Operational
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">API</span>
              <span className="flex items-center text-red-600">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                Error
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">CDN</span>
              <span className="flex items-center text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error500;