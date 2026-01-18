import { getBusinessHoursStatus } from '@/lib/businessHours';
import { Clock, Facebook, Home, Info, Instagram, Mail, MapPin, Menu, Phone, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [hoursStatus, setHoursStatus] = useState(getBusinessHoursStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setHoursStatus(getBusinessHoursStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-zinc-950 to-black">
      {/* Red Top Divider */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      {/* Subtle Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      {/* Mobile View - Keep existing compact design */}
      <div className="lg:hidden">
        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Logo and Social */}
          <div className="text-center mb-6">
            <Link to="/" className="inline-flex items-center gap-3 group mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
                <span className="text-2xl font-display font-bold text-white">T</span>
              </div>
              <div className="text-left">
                <h2 className="font-display text-xl font-bold text-white">
                  Taste of China
                </h2>
                <p className="text-secondary font-medium text-xs tracking-wider">Since 2012</p>
              </div>
            </Link>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-3 mt-4">
              <a
                href="https://www.instagram.com/tasteofchinalovers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 hover:shadow-lg hover:shadow-pink-500/50 hover:scale-110"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-110"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-sky-500 to-blue-500 hover:from-sky-400 hover:to-blue-400 hover:shadow-lg hover:shadow-sky-500/50 hover:scale-110"
              >
                <Twitter size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            <Link to="/" className="text-gray-400 hover:text-secondary transition-colors">Home</Link>
            <Link to="/about" className="text-gray-400 hover:text-secondary transition-colors">About Us</Link>
            <Link to="/menu" className="text-gray-400 hover:text-secondary transition-colors">Our Menu</Link>
            <Link to="/contact" className="text-gray-400 hover:text-secondary transition-colors">Contact</Link>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-400 justify-center">
              <MapPin size={16} className="text-primary shrink-0" />
              <span className="text-xs text-gray-300">Near Water Tank Lane, Bapuji Nagar</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 justify-center">
              <Phone size={16} className="text-primary shrink-0" />
              <a href="tel:+916746550550" className="text-xs text-gray-300 hover:text-secondary transition-colors">
                +91 6746 550 550
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400 justify-center">
              <Mail size={16} className="text-primary shrink-0" />
              <a href="mailto:info@tasteofchina.in" className="text-xs text-gray-300 hover:text-secondary transition-colors">
                info@tasteofchina.in
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400 justify-center">
              <Clock size={16} className="text-primary shrink-0" />
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-300">12:00 PM - 10:30 PM</span>
                <span className={`text-xs font-medium ${hoursStatus.statusColor}`}>{hoursStatus.statusText}</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-zinc-800">
            <p className="text-gray-500 text-xs">
              © 2026 Taste of China. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop View - Four Column Layout */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4 py-12 relative z-10">
          {/* Four Column Grid */}
          <div className="grid grid-cols-4 gap-8 mb-8">
            {/* Column 1: Brand */}
            <div className="space-y-4">
              <Link to="/" className="inline-flex flex-col gap-3 group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
                  <span className="text-3xl font-display font-bold text-white">T</span>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-white mb-1">
                    Taste of China
                  </h2>
                  <p className="text-secondary font-medium text-sm tracking-wider">Since 2012</p>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Experience the authentic flavors of Chinese cuisine in a futuristic ambiance. Where tradition meets innovation.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/tasteofchinalovers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 hover:shadow-lg hover:shadow-pink-500/50 hover:scale-110"
                >
                  <Instagram size={18} className="text-white" />
                </a>
                <a
                  href="#"
                  className="group relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-110"
                >
                  <Facebook size={18} className="text-white" />
                </a>
                <a
                  href="#"
                  className="group relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-sky-500 to-blue-500 hover:from-sky-400 hover:to-blue-400 hover:shadow-lg hover:shadow-sky-500/50 hover:scale-110"
                >
                  <Twitter size={18} className="text-white" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h3 className="text-secondary font-semibold text-lg mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-3">
                <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm group">
                  <Home size={16} className="text-primary group-hover:text-secondary transition-colors" />
                  <span>Home</span>
                </Link>
                <Link to="/about" className="flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm group">
                  <Info size={16} className="text-primary group-hover:text-secondary transition-colors" />
                  <span>About Us</span>
                </Link>
                <Link to="/menu" className="flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm group">
                  <Menu size={16} className="text-primary group-hover:text-secondary transition-colors" />
                  <span>Our Menu</span>
                </Link>
                <Link to="/contact" className="flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm group">
                  <Phone size={16} className="text-primary group-hover:text-secondary transition-colors" />
                  <span>Contact</span>
                </Link>
              </nav>
            </div>

            {/* Column 3: Contact Us */}
            <div className="space-y-4">
              <h3 className="text-secondary font-semibold text-lg mb-4">Contact Us</h3>
              <div className="flex flex-col space-y-3">
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-300">Near Water Tank Lane, Bapuji Nagar, Bhubaneswar</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Phone size={18} className="text-primary shrink-0" />
                  <a href="tel:+916746550550" className="text-gray-300 hover:text-secondary transition-colors">
                    +91 6746 550 550
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Mail size={18} className="text-primary shrink-0" />
                  <a href="mailto:info@tasteofchina.in" className="text-gray-300 hover:text-secondary transition-colors">
                    info@tasteofchina.in
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4: Opening Hours */}
            <div className="space-y-4">
              <h3 className="text-secondary font-semibold text-lg mb-4">Opening Hours</h3>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Clock size={18} className="text-primary shrink-0" />
                  <span className="text-gray-300 font-medium">Daily Schedule</span>
                </div>
                <div className="pl-9 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday – Friday:</span>
                    <span className="text-gray-300">11:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday – Sunday:</span>
                    <span className="text-gray-300">11:00 AM – 11:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-6 border-t border-zinc-800/50 flex items-center justify-between">
            <p className="text-gray-500 text-sm">
              © 2026 Taste of China. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Red Bottom Divider */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
    </footer>
  );
};

export default Footer;
