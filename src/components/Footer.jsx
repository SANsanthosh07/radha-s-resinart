import React from "react";
import { Palette, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold">ResinCraft</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Creating stunning resin art pieces that capture the beauty of
              liquid colors and bring unique artistic vision to life.
            </p>
            <div className="flex items-center text-gray-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 mx-1" />
              <span>for art lovers everywhere</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Gallery", "About", "Services"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>drypointresinart@gmail.com</p>
              <p>+91 89393 33642</p>

              <p> 15/1,3rd Street,Nehrunagar, Ambattur,Chennai-53</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Drypoint-ResinArt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
