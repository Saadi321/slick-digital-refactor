import React from 'react';
import { FooterProps } from './FooterTypes';
import { footerLinks } from './FooterData';
import SlickLogo from '@/components/common/logo/SlickLogo';

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <SlickLogo width={40} height={35} className="text-brand" />
          <div className="text-2xl font-bold">
            Slick<span className="text-brand">Digital</span>
          </div>
        </div>
        <p className="text-gray-400 mb-6">
          Crafting extraordinary digital experiences since 2020
        </p>
        <div className="flex justify-center space-x-8 text-sm text-gray-400">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-[#e6002e] transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
          © 2025 Slick Digital Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;