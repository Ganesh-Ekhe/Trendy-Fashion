import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiPaypal } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Trendy Fashion Hub</h2>
          <p className="text-sm text-gray-400">
            Discover the latest trends in fashion and make your own style statement with us.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact and Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
          <p className="text-gray-400">Email: support@trendyfashion.com</p>
          <p className="text-gray-400 mb-4">Phone: +1 234 567 890</p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition duration-300">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 transition duration-300">
              <FaTwitter className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-r from-pink-500 to-yellow-500 transition duration-300">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 transition duration-300">
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="mt-8 flex items-center justify-center space-x-6">
        <SiVisa className="text-gray-400 w-10 h-10 hover:text-blue-500 transition duration-300" />
        <SiMastercard className="text-gray-400 w-10 h-10 hover:text-red-500 transition duration-300" />
        <SiPaypal className="text-gray-400 w-10 h-10 hover:text-blue-700 transition duration-300" />
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Trendy Fashion Hub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
