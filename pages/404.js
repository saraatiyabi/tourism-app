// pages/404.js or app/not-found.js (for Next.js 13+)
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faArrowRight,
  faMapMarkerAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Custom404 = () => {
  const popularDestinations = [
    {
      name: "تور استانبول",
      image: "/images/destination-1.jpg",
      url: "/tours/istanbul",
    },
    {
      name: "تور دبی",
      image: "/images/destination-2.jpg",
      url: "/tours/dubai",
    },
    {
      name: "تور آنتالیا",
      image: "/images/destination-3.jpg",
      url: "/tours/antalya",
    },
    {
      name: "تور بانکوک",
      image: "/images/destination-4.jpg",
      url: "/tours/bangkok",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl w-full text-center">
          {/* Animated 404 Number */}
          <div className="relative mb-8">
            <div className="text-9xl sm:text-[12rem] lg:text-[15rem] font-bold text-green-800 opacity-10 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl sm:text-8xl lg:text-9xl font-bold text-green-700">
                404
              </div>
            </div>
          </div>

          {/* Lost Traveler Illustration */}
          <div className="relative mb-8 max-w-md mx-auto">
            <div className="w-48 h-48 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-green-300 rounded-full opacity-30 animate-pulse delay-75"></div>
              <div className="absolute inset-8 bg-green-400 rounded-full opacity-40 animate-pulse delay-150"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faCompass}
                  className="text-6xl text-green-600 animate-spin-slow"
                />
              </div>
            </div>
          </div>

          {/* Main Message */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              گم شده‌اید؟
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-2">
              به نظر می‌رسد مسیر را گم کرده‌اید!
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              نگران نباشید، حتی بهترین مسافران هم گاهی راه را گم می‌کنند. بیایید
              شما را به مقصد درست هدایت کنیم.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/"
              className="group bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faHome} className="text-xl" />
              بازگشت به خانه
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xl transform rotate-180 group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>

            <Link
              href="/tours"
              className="group border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
              مشاهده تورها
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xl transform rotate-180 group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Search Section */}
          <div className="mb-12 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="جستجو در سایت..."
                className="w-full px-6 py-4 pr-12 border-2 border-green-200 rounded-2xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-lg shadow-sm"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500 text-xl"
              />
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
              مقاصد محبوب برای کشف
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDestinations.map((destination, index) => (
                <Link
                  key={destination.name}
                  href={destination.url}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-green-100 overflow-hidden"
                >
                  <div className="h-32 bg-gradient-to-br from-green-400 to-blue-400 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-white text-2xl opacity-80"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 text-lg group-hover:text-green-700 transition-colors duration-300">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-green-600 text-sm font-medium">
                        کشف کنید
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-green-600 text-xs transform rotate-180"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-green-200 p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              نیاز به کمک دارید؟
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <Link
                href="/contact"
                className="text-green-700 hover:text-green-800 font-medium flex items-center gap-2"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transform rotate-180 text-xs"
                />
                تماس با پشتیبانی
              </Link>
              <Link
                href="/faq"
                className="text-green-700 hover:text-green-800 font-medium flex items-center gap-2"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transform rotate-180 text-xs"
                />
                سوالات متداول
              </Link>
              <Link
                href="/blog"
                className="text-green-700 hover:text-green-800 font-medium flex items-center gap-2"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transform rotate-180 text-xs"
                />
                راهنمای سفر
              </Link>
              <Link
                href="/about"
                className="text-green-700 hover:text-green-800 font-medium flex items-center gap-2"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transform rotate-180 text-xs"
                />
                درباره ما
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="fixed top-10 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-float"></div>
      <div className="fixed top-20 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-float delay-1000"></div>
      <div className="fixed bottom-20 left-20 w-12 h-12 bg-green-300 rounded-full opacity-40 animate-float delay-2000"></div>
      <div className="fixed bottom-10 right-10 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-float delay-1500"></div>
    </div>
  );
};

export default Custom404;
