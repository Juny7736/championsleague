import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-slate-50">
      <div className="container mx-auto px-4 py-16 text-center">
        <Trophy className="h-24 w-24 mx-auto text-champions-blue opacity-25" />
        <h1 className="mt-6 text-4xl font-bold text-champions-blue">404 - Page Not Found</h1>
        <p className="mt-4 text-lg text-slate-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-champions-blue text-white font-medium rounded-md hover:bg-opacity-90 transition"
          >
            <Home className="mr-2 h-5 w-5" /> Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;