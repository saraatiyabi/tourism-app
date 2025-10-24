// components/modules/Footer/Footer.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faPaperPlane,
  faShieldAlt,
  faMobileAlt,
  faCreditCard,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-50 to-green-100 border-t border-green-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/images/TripByte.png"
                width={120}
                height={30}
                alt="TripByte Logo"
                className="w-28 lg:w-32"
              />
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-md">
              سفرهای رویایی خود را با تریپ بایت تجربه کنید. ما بهترین مقاصد
              گردشگری را با خدمات استثنایی برای شما فراهم می‌کنیم.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 space-x-reverse">
              {[
                {
                  name: "Instagram",
                  icon: faInstagram,
                  url: "#",
                  color: "text-pink-500",
                },
                {
                  name: "Telegram",
                  icon: faTelegram,
                  url: "#",
                  color: "text-blue-500",
                },
                {
                  name: "Twitter",
                  icon: faTwitter,
                  url: "#",
                  color: "text-sky-400",
                },
                {
                  name: "LinkedIn",
                  icon: faLinkedin,
                  url: "#",
                  color: "text-blue-600",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:bg-green-50 border border-green-200"
                  aria-label={social.name}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className={`text-lg ${social.color}`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              لینک های سریع
            </h3>
            <ul className="space-y-3">
              {[
                { name: "صفحه اصلی", href: "/" },
                { name: "تورهای داخلی", href: "/domestic-tours" },
                { name: "تورهای خارجی", href: "/international-tours" },
                { name: "پکیج های ویژه", href: "/special-packages" },
                { name: "مقالات گردشگری", href: "/blog" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-green-700 text-lg transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-300 rounded-full ml-3 group-hover:bg-green-600 transition-colors duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-800 mb-6">خدمات ما</h3>
            <ul className="space-y-3">
              {[
                { name: "رزرو هتل", href: "/hotel-booking" },
                { name: "بلیط هواپیما", href: "/flight-tickets" },
                { name: "تور لحظه آخری", href: "/last-minute-tours" },
                { name: "ویزای گردشگری", href: "/visa-services" },
                { name: "تورهای ماه عسل", href: "/honeymoon-tours" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-green-700 text-lg transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-300 rounded-full ml-3 group-hover:bg-green-600 transition-colors duration-200"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              اطلاعات تماس
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-green-700 text-sm"
                  />
                </div>
                <div>
                  <p className="text-gray-600 text-lg">
                    تهران، خیابان ولیعصر، پلاک ۱۲۳۴
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-green-700 text-sm"
                  />
                </div>
                <div>
                  <p className="text-gray-600 text-lg">۰۲۱-۱۲۳۴۵۶۷۸</p>
                  <p className="text-gray-500 text-sm">پشتیبانی ۲۴/۷</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-green-700 text-sm"
                  />
                </div>
                <div>
                  <p className="text-gray-600 text-lg">info@tripbyte.com</p>
                  <p className="text-gray-500 text-sm">
                    پاسخگویی در کمتر از ۲ ساعت
                  </p>
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  عضویت در خبرنامه
                </h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    className="flex-1 px-4 py-3 border border-green-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  />
                  <button
                    className="bg-green-700 hover:bg-green-800 text-white p-3 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center min-w-[52px] hover:scale-105"
                    aria-label="عضویت در خبرنامه"
                    title="عضویت در خبرنامه"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-200 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-green-100 text-lg text-center md:text-right">
              <p>
                © {new Date().getFullYear()} تریپ بایت. تمام حقوق محفوظ است.
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-green-200">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors duration-200 text-lg"
              >
                حریم خصوصی
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-200 text-lg"
              >
                شرایط استفاده
              </Link>
              <Link
                href="/faq"
                className="hover:text-white transition-colors duration-200 text-lg"
              >
                سوالات متداول
              </Link>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <div className="text-green-100 text-lg ml-3">پرداخت امن با:</div>
              <div className="flex gap-2">
                {[
                  { icon: faCreditCard, label: "کارت اعتباری" },
                  { icon: faUniversity, label: "درگاه بانکی" },
                  { icon: faShieldAlt, label: "پرداخت امن" },
                  { icon: faMobileAlt, label: "موبایل بانک" },
                ].map((method, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200 group"
                    title={method.label}
                  >
                    <FontAwesomeIcon
                      icon={method.icon}
                      className="text-green-100 text-sm group-hover:text-white"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
