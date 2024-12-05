import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold text-lg">Travel Inc.</h4>
          <p className="text-sm text-gray-400">&copy; 2024 Travel Inc. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-gray-400">About Us</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

