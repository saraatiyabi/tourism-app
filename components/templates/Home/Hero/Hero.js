import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleDown,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const Hero = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center h-auto md:h-screen py-8 md:py-0">
      <div className="flex-1 mt-10 flex flex-col justify-center text-center md:text-right mb-8 md:mb-0">
        <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-[60px] font-bold font-primary text-gray-800 leading-tight md:leading-[70px]">
          جرات داشتن زندگی موردنظر خود را داشته باشید!
        </h1>
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-xl font-primary text-gray-500 mt-5">
          زندگی کوتاه است، و جهان وسیع، پس بهتر است شروع کنید.
        </span>

        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto rounded-3xl my-10 mx-auto sm:mx-5 p-5 shadow-md max-w-[510px]">
          <div className="flex-1 flex flex-row items-center justify-between w-full mb-4 sm:mb-0">
            <span className="bg-green-900 text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-xl sm:text-2xl text-white"
              />
            </span>
            <div className="flex flex-col justify-center items-center">
              <p className="text-gray-400 font-semibold font-primary text-lg sm:text-xl flex items-center gap-2">
                <FontAwesomeIcon icon={faAngleDown} />
                <span>تاریخ</span>
              </p>
              <span className="text-gray-900 font-medium text-sm sm:text-base">
                17 Jul 2023
              </span>
            </div>
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="text-xl sm:text-2xl mr-3 text-green-900"
            />
          </div>
          <div className="hidden sm:block">|</div>
          <div className="flex-1 flex flex-row items-center justify-center w-full">
            <div className="flex flex-col justify-center items-center">
              <p className="text-gray-400 font-semibold font-primary text-lg sm:text-xl flex items-center gap-2">
                <FontAwesomeIcon icon={faAngleDown} />
                <span>موقعیت</span>
              </p>
              <span className="text-gray-900 font-medium text-sm sm:text-base">
                اصفهان - ایران
              </span>
            </div>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-xl sm:text-2xl mr-3 text-green-900"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/images/images.png"
          width={453}
          height={579}
          className="w-full h-auto max-w-[453px]"
        />
      </div>
    </div>
  );
};

export default Hero;
