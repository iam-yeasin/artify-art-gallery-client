import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            ARTIFY ART GALLERY
          </h2>
          <p className="text-gray-400 text-sm italic">
            Discover, like, and save your favorite artworks from talented
            artists around the world.
          </p>
          {/* <ul>
            <li className="mt-7">
              <Link
                to="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul> */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <div className="w-20 h-[1px] bg-white/40 mb-4"></div>
          <ul className="space-y-2 italic">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/explore" className="hover:text-white transition">
                Explore Artworks
              </Link>
            </li>
            <li>
              <Link to="/add-artwork" className="hover:text-white transition">
                Add Artwork
              </Link>
            </li>
            <li>
              <Link to="/my-gallery" className="hover:text-white transition">
                My Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-white mb-4">Categories</h3>
          <div className="w-20 h-[1px] bg-white/40 mb-4"></div>
          <ul className="space-y-2 italic">
            <li>
              <Link
                to="/explore?category=painting"
                className="hover:text-white transition"
              >
                Painting
              </Link>
            </li>
            <li>
              <Link
                to="/explore?category=digital"
                className="hover:text-white transition"
              >
                Digital Art
              </Link>
            </li>
            <li>
              <Link
                to="/explore?category=sketch"
                className="hover:text-white transition"
              >
                Sketch
              </Link>
            </li>
            <li>
              <Link
                to="/explore?category=photography"
                className="hover:text-white transition"
              >
                Photography
              </Link>
            </li>
          </ul>
        </div>

        {/* For Artists */}
        <div>
          <h3 className="font-semibold text-white mb-4">For Artists</h3>
          <div className="w-20 h-[1px] bg-white/40 mb-4"></div>
          <ul className="space-y-2 italic">
            <li>
              <Link to="/add-artwork" className="hover:text-white transition">
                Submit Artwork
              </Link>
            </li>
            <li>
              <Link to="/my-gallery" className="hover:text-white transition">
                Manage Gallery
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="hover:text-white transition">
                Favorites
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-white mb-4">Contact Us</h3>
          <div className="w-20 h-[1px] bg-white/40 mb-4"></div>
          <p className="text-gray-400 text-sm mb-2 italic">
            123 Art Gallery, Art City
          </p>
          <p className="text-gray-400 text-sm mb-2 italic">
            Email: info@artify.com
          </p>
          <p className="text-gray-400 text-sm mb-4 italic">
            Phone: +1 234 567 890
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-gray-50 text-sm">
        {/* © 2025 WarmPaws. All rights reserved. */}
        &copy; {new Date().getFullYear()} ARTIFY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
