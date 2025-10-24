import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Tours = () => {
  return (
    <div className="w-full my-12 md:my-16 lg:my-[80px] flex flex-col px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center text-center mb-8 md:mb-12 lg:my-20">
        <p className="text-green-700 text-xl md:text-2xl lg:text-[25px] font-semibold mb-2 lg:mb-3">
          پکیج های تور
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-gray-800 leading-tight md:leading-[60px] lg:leading-[70px] max-w-4xl">
          مکان های شگفت انگیز در سراسر جهان
        </h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        style={{
          padding: "10px 20px 40px",
        }}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
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
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          // when window width is >= 1536px
          1536: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col gap-3 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 h-full max-h-[380px] sm:max-h-[420px] md:max-h-[460px] lg:max-h-[500px] xl:max-h-[520px]">
            <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 flex-shrink-0">
              <Image
                src="/images/Image (5).png"
                fill
                className="object-cover"
                alt="Prague streets covered in snow"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 p-3 sm:p-4 md:p-5 flex-grow overflow-hidden">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-800 leading-relaxed line-clamp-2">
                در میان خیابان های پر پیچ و خم و پوشیده از برف عاشق شوید
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-1">
                پراگ - چک
              </p>

              <div className="flex justify-end mt-1 sm:mt-2">
                <Image
                  src="/images/star.png"
                  width={80}
                  height={20}
                  className="w-12 "
                  alt="Star rating"
                />
              </div>

              <div className="flex justify-between items-center mt-auto pt-2 sm:pt-3">
                <span className="text-sm sm:text-base md:text-lg text-gray-500">
                  10 روزه
                </span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-green-700 font-semibold">
                  $200
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col gap-3 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 h-full max-h-[380px] sm:max-h-[420px] md:max-h-[460px] lg:max-h-[500px] xl:max-h-[520px]">
            <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 flex-shrink-0">
              <Image
                src="/images/Image (6).png"
                fill
                className="object-cover"
                alt="Beijing historical sites"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 p-3 sm:p-4 md:p-5 flex-grow overflow-hidden">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-800 leading-relaxed line-clamp-2">
                تاریخ درباره گذشته نیست بلکه نقشه ای از گذشته است
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-1">
                پکن - چین
              </p>

              <div className="flex justify-end mt-1 sm:mt-2">
                <Image
                  src="/images/star.png"
                  width={80}
                  height={20}
                  className="w-12 "
                  alt="Star rating"
                />
              </div>

              <div className="flex justify-between items-center mt-auto pt-2 sm:pt-3">
                <span className="text-sm sm:text-base md:text-lg text-gray-500">
                  10 روزه
                </span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-green-700 font-semibold">
                  $450
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col gap-3 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 h-full max-h-[380px] sm:max-h-[420px] md:max-h-[460px] lg:max-h-[500px] xl:max-h-[520px]">
            <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 flex-shrink-0">
              <Image
                src="/images/Image (7).png"
                fill
                className="object-cover"
                alt="Istanbul unique character"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 p-3 sm:p-4 md:p-5 flex-grow overflow-hidden">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-800 leading-relaxed line-clamp-2">
                شخصیت منحصر به فرد به عنوان نماد سلیقه و خودنمایی
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-1">
                استانبول - ترکیه
              </p>

              <div className="flex justify-end mt-1 sm:mt-2">
                <Image
                  src="/images/star.png"
                  width={80}
                  height={20}
                  className="w-12 "
                  alt="Star rating"
                />
              </div>

              <div className="flex justify-between items-center mt-auto pt-2 sm:pt-3">
                <span className="text-sm sm:text-base md:text-lg text-gray-500">
                  10 روزه
                </span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-green-700 font-semibold">
                  $200
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="flex flex-col gap-3 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 h-full max-h-[380px] sm:max-h-[420px] md:max-h-[460px] lg:max-h-[500px] xl:max-h-[520px]">
            <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 flex-shrink-0">
              <Image
                src="/images/image (6).png"
                fill
                className="object-cover"
                alt="Additional tour package"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 p-3 sm:p-4 md:p-5 flex-grow overflow-hidden">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-800 leading-relaxed line-clamp-2">
                در میان خیابان های پر پیچ و خم و پوشیده از برف عاشق شوید
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-1">
                پراگ - چک
              </p>

              <div className="flex justify-end mt-1 sm:mt-2">
                <Image
                  src="/images/star.png"
                  width={80}
                  height={20}
                  className="w-12 "
                  alt="Star rating"
                />
              </div>

              <div className="flex justify-between items-center mt-auto pt-2 sm:pt-3">
                <span className="text-sm sm:text-base md:text-lg text-gray-500">
                  10 روزه
                </span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-green-700 font-semibold">
                  $150
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Tours;
