import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("صفحه اصلی");

  const menuItems = [
    { name: "صفحه اصلی", href: "/" },
    { name: "ارتباط با ما", href: "/contact" },
    { name: "قیمت ها", href: "/pricing" },
    { name: "سرویس ها", href: "/services" },
    { name: "درباره ما", href: "/about" },
  ];

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-green-50 shadow-sm border-b border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/TripByte.png"
                width={93}
                height={23}
                alt="TripByte Logo"
                className="w-20 md:w-[80px] "
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <ul className="flex items-center space-x-1 lg:space-x-2 xl:space-x-4 space-x-reverse">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`px-3 lg:px-4 py-2 rounded-lg text-base lg:text-lg font-medium transition-all duration-200 ${
                      activeItem === item.name
                        ? "text-green-800 bg-green-100 border-b-2 border-b-green-600"
                        : "text-gray-600 hover:text-green-700 hover:bg-green-50"
                    }`}
                    onClick={() => handleItemClick(item.name)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4 space-x-reverse">
            <Link
              className="bg-green-700 hover:bg-green-800 text-white px-4 lg:px-6 py-2 rounded-2xl text-base lg:text-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
              href="/register"
            >
              ثبت نام
            </Link>
            <Link
              className="text-gray-600 hover:text-green-700 px-3 lg:px-4 py-2 text-base lg:text-lg font-medium transition-colors duration-200"
              href="/login"
            >
              ورود
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3 space-x-reverse">
            <Link
              className="bg-green-700 text-white px-3 py-2 rounded-xl text-sm font-medium"
              href="/register"
            >
              ثبت نام
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-green-700 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-200 transition-colors duration-200"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-green-25 border-t border-green-200 shadow-inner">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                activeItem === item.name
                  ? "text-green-800 bg-green-100 border-r-2 border-r-green-600"
                  : "text-gray-600 hover:text-green-700 hover:bg-green-50"
              }`}
              onClick={() => handleItemClick(item.name)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-green-200">
            <Link
              className="block text-center text-gray-600 hover:text-green-700 px-4 py-3 text-base font-medium transition-colors duration-200"
              href="/login"
              onClick={() => setIsMenuOpen(false)}
            >
              ورود
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
