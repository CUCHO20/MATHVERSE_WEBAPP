import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft, Calculator } from 'lucide-react';

const Error404: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Mathematical 404 */}
        <div className="mb-12">
          <div className="relative">
            {/* Large 404 with mathematical styling */}
            <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text leading-none">
              404
            </h1>
            {/* Mathematical symbols decoration */}
            <div className="absolute -top-4 left-8 text-4xl text-blue-300 font-serif">∅</div>
            <div className="absolute top-12 -right-4 text-3xl text-purple-300 font-serif">∞</div>
            <div className="absolute bottom-4 left-16 text-2xl text-blue-400 font-serif">≠</div>
          </div>
        </div>

        {/* Error Message */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-slate-100">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl shadow-lg">
              <Calculator className="h-12 w-12 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Page Not Found
          </h2>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Looks like you've ventured into uncharted mathematical territory! 
            The page you're looking for doesn't exist in our universe.
          </p>

          {/* Mathematical equation joke */}
          <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-200">
            <p className="text-lg text-slate-700 font-mono">
              <span className="text-blue-600 font-bold">Error:</span> lim<sub>x→∞</sub> (your page) = undefined
            </p>
            <p className="text-sm text-slate-500 mt-2">
              This page exists only in the realm of imaginary numbers
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </Link>
            
            <Link
              to="/content"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Search className="mr-2 h-5 w-5" />
              Explore Content
            </Link>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center text-slate-600 hover:text-slate-800 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>

        {/* Fun Mathematical Facts */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="text-2xl font-bold text-blue-600 mb-2">∅</div>
            <p className="text-sm text-slate-600">
              The empty set - just like this page!
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="text-2xl font-bold text-purple-600 mb-2">π</div>
            <p className="text-sm text-slate-600">
              Irrational, but unlike this error
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="text-2xl font-bold text-emerald-600 mb-2">∞</div>
            <p className="text-sm text-slate-600">
              Infinite possibilities await you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;