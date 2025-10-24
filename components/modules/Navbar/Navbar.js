import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Overlay - Placed outside nav */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav className="w-full bg-green-50 shadow-sm border-b border-green-200 relative z-50">
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
                  className="w-20 md:w-[80px]"
                  onClick={() => setIsMenuOpen(false)}
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
                      className={`px-3 lg:px-4 py-2 rounded-lg text-base lg:text-lg font-bold transition-all duration-200 ${
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
                className="bg-green-700 hover:bg-green-800 text-white px-4 lg:px-6 py-2 rounded-2xl text-base lg:text-lg font-bold transition-colors duration-200 shadow-sm hover:shadow-md"
                href="/register"
              >
                ثبت نام
              </Link>
              <Link
                className="text-gray-600 hover:text-green-700 px-3 lg:px-4 py-2 text-base lg:text-lg font-bold transition-colors duration-200"
                href="/login"
              >
                ورود
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3 space-x-reverse">
              <Link
                className="bg-green-700 text-white px-3 py-2 rounded-xl text-sm font-bold"
                href="/register"
              >
                ثبت نام
              </Link>
              <button
                onClick={handleMenuToggle}
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

        {/* Floating Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-4 opacity-0 invisible"
          }`}
        >
          <div className="mx-4 bg-white rounded-lg shadow-2xl border border-green-200 overflow-hidden z-[999]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-bold transition-colors duration-200 ${
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
                  className="block text-center text-gray-600 hover:text-green-700 px-4 py-3 text-base font-bold transition-colors duration-200"
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ورود
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
