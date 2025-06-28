"use client";

import { useState, useEffect } from "react";
import Popup from "./Popup";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Palette,
  Briefcase,
  User,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Products = [
    {
      name: "Appliances",
      href: "/#",
      children: [
        { name: "Elica", href: "/#" },
        { name: "Hindware", href: "/#" },
        { name: "Hafele", href: "/#" },
      ],
    },
    {
      name: "Wood Floor",
      href: "/#",
      children: [
        { name: "Green Laminate", href: "/#" },
        { name: "Laminum", href: "/#" },
      ],
    },
    {
      name: "Decor",
      href: "/#",
      children: [],
    },
  ];

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/#", icon: User },
    {
      name: "Products",
      href: "/#",
      icon: Palette,
      dropdown: Products,
    },
    { name: "Portfolio", href: "/#", icon: Briefcase },
    { name: "Contact", href: "/#", icon: Phone },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#18191b] backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-white"
              >
                <span className="text-amber-600">HURLA</span> INTERIO
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setActiveSubDropdown(null);
                  }}
                >
                  <div
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
                      isScrolled
                        ? "text-white hover:text-amber-600"
                        : "text-white hover:text-amber-300"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </div>

                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                      {item.dropdown.map((product) => (
                        <div
                          key={product.name}
                          className="relative"
                          onMouseEnter={() => setActiveSubDropdown(product.name)}
                          onMouseLeave={() => setActiveSubDropdown(null)}
                        >
                          <Link
                            href={product.href}
                            className="flex justify-between items-center px-2 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                          >
                            {product.name}
                            {product.children.length > 0 && (
                              <ChevronDown className="w-4 h-4 ml-2" />
                            )}
                          </Link>

                          {product.children.length > 0 && activeSubDropdown === product.name && (
                            <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-md border border-gray-200 z-30">
                              {product.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden md:block">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-600 text-white px-6 py-2 rounded-md font-medium hover:bg-amber-700 transition-colors duration-200"
                >
                  Talk to Us
                </motion.button>
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <Popup />
    </>
  );
};

export default Navbar;
