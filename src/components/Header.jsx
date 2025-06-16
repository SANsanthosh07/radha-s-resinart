import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import icon from "../assets/file.ico";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Motion animation variants
const menuVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.15 },
  },
};

const toggleVariants = {
  closed: { rotate: 0 },
  open: { rotate: 90 },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Home",
    "Gallery",
    "About",
    "Services",
    "Process",
    "Contact",
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <Link
            to=""
            className="flex items-center space-x-2 hover:cursor-pointer"
          >
            <img className="w-10 h-10 rounded-full" src={icon} alt="icon" />
            <span
              className={`text-2xl font-bold ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              DryPoint-ResinArt
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            variants={toggleVariants}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium hover:text-purple-600 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation (Animated) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              {menuItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
