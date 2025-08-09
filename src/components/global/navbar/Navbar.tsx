import React from 'react';
import { Button } from "@/components/ui/button";
import { NavbarProps } from './NavbarTypes';
import { navItems } from './NavbarData';

const Navbar: React.FC<NavbarProps> = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-black/90' : 'bg-black/70'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          Slick<span className="text-[#e6002e]">Digital</span>
        </div>
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#e6002e] transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden text-white text-2xl ml-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="ph-list"></i>
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-black/95 border-t border-gray-800 py-4 md:hidden">
              <nav className="flex flex-col items-center space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-white hover:text-[#e6002e] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
        <Button className="!rounded-button whitespace-nowrap bg-[#e6002e] hover:bg-[#e6002e]/80 text-white shadow-[0_0_20px_rgba(230,0,46,0.5)] hover:shadow-[0_0_30px_rgba(230,0,46,0.7)] transition-all cursor-pointer">
          Get in Touch
        </Button>
      </div>
    </header>
  );
};

export default Navbar;