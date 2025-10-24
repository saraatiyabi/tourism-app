import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const Comments = () => {
  return (
    <div className="w-full mb-12 md:mb-16 lg:mb-[50px] px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex w-full flex-col justify-center items-center text-center mb-8 md:mb-12 lg:my-20">
        <p className="text-green-700 text-xl md:text-2xl lg:text-[25px] font-semibold mb-2 lg:mb-3">
          نظرات کاربران
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-gray-800 leading-tight md:leading-[60px] lg:leading-[70px] max-w-4xl">
          مسافران ما در سراسر جهان
        </h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        style={{
          padding: "20px 10px 60px",
        }}
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1.2,
            spaceBetween: 25,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 1536px
          1536: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 max-w-[380px] mx-auto h-full min-h-[320px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[400px] max-h-[320px] sm:max-h-[350px] md:max-h-[380px] lg:max-h-[400px] gap-3 shadow-lg rounded-xl relative bg-white hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/Vector.png"
              width={34}
              height={34}
              className="absolute top-2 right-4 sm:right-6 md:right-10 z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              alt="Quote icon"
            />
            <div className="flex-shrink-0">
              <Image
                src="/images/Ellipse 1.png"
                width={80}
                height={80}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                alt="User avatar"
              />
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 text-center">
              علی یاوری پور
            </h4>
            <p className="text-base sm:text-lg md:text-lg text-gray-600">
              پزشک
            </p>
            <div className="flex-shrink-0">
              <Image
                src="/images/Stars.png"
                width={80}
                height={16}
                className="w-16 sm:w-20 md:w-24"
                alt="Star rating"
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center leading-relaxed line-clamp-4 sm:line-clamp-5">
              گواهی‌ها کار می‌کنند، زیرا فروشندگان قوی نیستند، با صدایی
              بی‌طرفانه برخورد می‌کنند و اعتماد ایجاد می‌کنند.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 max-w-[380px] mx-auto h-full min-h-[320px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[400px] max-h-[320px] sm:max-h-[350px] md:max-h-[380px] lg:max-h-[400px] gap-3 shadow-lg rounded-xl relative bg-white hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/Vector.png"
              width={34}
              height={34}
              className="absolute top-2 right-4 sm:right-6 md:right-10 z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              alt="Quote icon"
            />
            <div className="flex-shrink-0">
              <Image
                src="/images/Ellipse 1.png"
                width={80}
                height={80}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                alt="User avatar"
              />
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 text-center">
              علی یاوری پور
            </h4>
            <p className="text-base sm:text-lg md:text-lg text-gray-600">
              پزشک
            </p>
            <div className="flex-shrink-0">
              <Image
                src="/images/Stars.png"
                width={80}
                height={16}
                className="w-16 sm:w-20 md:w-24"
                alt="Star rating"
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center leading-relaxed line-clamp-4 sm:line-clamp-5">
              گواهی‌ها کار می‌کنند، زیرا فروشندگان قوی نیستند، با صدایی
              بی‌طرفانه برخورد می‌کنند و اعتماد ایجاد می‌کنند.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 max-w-[380px] mx-auto h-full min-h-[320px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[400px] max-h-[320px] sm:max-h-[350px] md:max-h-[380px] lg:max-h-[400px] gap-3 shadow-lg rounded-xl relative bg-white hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/Vector.png"
              width={34}
              height={34}
              className="absolute top-2 right-4 sm:right-6 md:right-10 z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              alt="Quote icon"
            />
            <div className="flex-shrink-0">
              <Image
                src="/images/Ellipse 1.png"
                width={80}
                height={80}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                alt="User avatar"
              />
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 text-center">
              علی یاوری پور
            </h4>
            <p className="text-base sm:text-lg md:text-lg text-gray-600">
              پزشک
            </p>
            <div className="flex-shrink-0">
              <Image
                src="/images/Stars.png"
                width={80}
                height={16}
                className="w-16 sm:w-20 md:w-24"
                alt="Star rating"
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center leading-relaxed line-clamp-4 sm:line-clamp-5">
              گواهی‌ها کار می‌کنند، زیرا فروشندگان قوی نیستند، با صدایی
              بی‌طرفانه برخورد می‌کنند و اعتماد ایجاد می‌کنند.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 max-w-[380px] mx-auto h-full min-h-[320px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[400px] max-h-[320px] sm:max-h-[350px] md:max-h-[380px] lg:max-h-[400px] gap-3 shadow-lg rounded-xl relative bg-white hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/Vector.png"
              width={34}
              height={34}
              className="absolute top-2 right-4 sm:right-6 md:right-10 z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              alt="Quote icon"
            />
            <div className="flex-shrink-0">
              <Image
                src="/images/Ellipse 1.png"
                width={80}
                height={80}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                alt="User avatar"
              />
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 text-center">
              علی یاوری پور
            </h4>
            <p className="text-base sm:text-lg md:text-lg text-gray-600">
              پزشک
            </p>
            <div className="flex-shrink-0">
              <Image
                src="/images/Stars.png"
                width={80}
                height={16}
                className="w-16 sm:w-20 md:w-24"
                alt="Star rating"
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center leading-relaxed line-clamp-4 sm:line-clamp-5">
              گواهی‌ها کار می‌کنند، زیرا فروشندگان قوی نیستند، با صدایی
              بی‌طرفانه برخورد می‌کنند و اعتماد ایجاد می‌کنند.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Comments;
