// src/pages/ThankYou.tsx

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router
import { CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-[#0b2741] flex flex-col">
      <Header mode="transparent" />
      <div className="flex-grow flex items-center justify-center text-center px-4">
        <div className="bg-gradient-to-r from-cyan-600 to-[#0b2741] p-8 md:p-12 rounded-lg shadow-xl max-w-2xl">
          <CheckCircle className="text-green-400 w-16 h-16 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Thank You!
          </h1>
          <p className="text-lg text-white/90 mb-6">
            Your inquiry has been submitted successfully. Our team will review your message and get back to you shortly.
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-[#0050A0] font-bold py-2 px-6 rounded-md hover:bg-cyan-100 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;