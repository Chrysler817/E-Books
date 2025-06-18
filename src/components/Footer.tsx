import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => (
  <footer id="contact" className="bg-gray-100 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="mb-4 font-semibold">Follow us on social media</p>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" aria-label="Facebook">
          <Facebook />
        </a>
        <a href="#" aria-label="Instagram">
          <Instagram />
        </a>
        <a href="mailto:info@example.com" aria-label="Email">
          <Mail />
        </a>
      </div>
      <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Jewelry Heaven</p>
    </div>
  </footer>
);

export default Footer;
