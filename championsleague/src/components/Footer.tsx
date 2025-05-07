import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-champions-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-champions-gold" />
              <span className="text-xl font-bold text-white">Champions League 2025</span>
            </Link>
            <p className="mt-4 text-slate-300 text-sm">
              The ultimate destination for following the UEFA Champions League 2025 season.
              Comprehensive coverage of teams, players, and tournament progress.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/teams" className="text-slate-300 hover:text-white transition">
                  Teams
                </Link>
              </li>
              <li>
                <Link to="/players" className="text-slate-300 hover:text-white transition">
                  Players
                </Link>
              </li>
              <li>
                <Link to="/fixtures" className="text-slate-300 hover:text-white transition">
                  Fixtures
                </Link>
              </li>
              <li>
                <Link to="/statistics" className="text-slate-300 hover:text-white transition">
                  Statistics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              Subscribe to our newsletter for the latest Champions League updates.
            </p>
            <form className="mt-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full text-slate-900 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-champions-gold text-champions-blue px-4 py-2 rounded-r-md font-medium hover:bg-opacity-90 transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Champions League Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;