import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Tours = () => {
  return (
    <div className="w-full my-[80px]  flex flex-col">
      <div className="flex flex-col justify-center my-20">
        <p className="text-green-900 font-primary text-[25px] font-semibold">
          پکیج های تور
        </p>
        <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-[60px] font-bold font-primary text-gray-800 leading-tight md:leading-[70px]">
          مکان های شگفت انگیز در سراسر جهان
        </h2>
      </div>

      <Swiper
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        slidesPerView={3}
        spaceBetween="50px"
        pagination={true}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="flex flex-col gap-3 shadow-md rounded-xl max-w-[400px]">
            <Image src="/images/Image (5).png" width={550} height={450} />
            <div className="flex flex-col gap-3 p-5">
              <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl font-semibold font-primary">
                در میان خیابان های پر پیچ و خم و پوشیده از برف عاشق شوید
              </h3>
              <p className="text-lg font-primary text-gray-500">پراگ - چک</p>

              <div className="flex justify-end">
                <Image src="/images/star.png" width={50} height={25} />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-primary text-gray-500">
                  10 روزه
                </span>
                <span className="2xl:text-3xl xl:text-2xl lg:text-xl font-primary text-green-800 font-semibold">
                  $200
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-3 shadow-md rounded-xl max-w-[400px]">
            <Image src="/images/Image (6).png" width={550} height={450} />
            <div className="flex flex-col gap-3 p-5">
              <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl font-semibold font-primary">
                تاریخ درباره گذشته نیست بلکه نقشه ای از گذشته است
              </h3>
              <p className="text-lg font-primary text-gray-500">پکن - چین</p>

              <div className="flex justify-end">
                <Image src="/images/star.png" width={50} height={25} />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-primary text-gray-500">
                  10 روزه
                </span>
                <span className="2xl:text-3xl xl:text-2xl lg:text-xl font-primary text-green-800 font-semibold">
                  $450
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-3 shadow-md rounded-xl max-w-[400px]">
            <Image src="/images/Image (7).png" width={550} height={450} />
            <div className="flex flex-col gap-3 p-5">
              <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl font-semibold font-primary">
                شخصیت منحصر به فرد به عنوان نماد سلیقه و خودنمایی
              </h3>
              <p className="text-lg font-primary text-gray-500">
                استانبول - ترکیه
              </p>

              <div className="flex justify-end">
                <Image src="/images/star.png" width={50} height={25} />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-primary text-gray-500">
                  10 روزه
                </span>
                <span className="2xl:text-3xl xl:text-2xl lg:text-xl font-primary text-green-800 font-semibold">
                  $200
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-3 shadow-md rounded-xl max-w-[400px]">
            <Image src="/images/image (6).png" width={550} height={450} />
            <div className="flex flex-col gap-3 p-5">
              <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl font-semibold font-primary">
                در میان خیابان های پر پیچ و خم و پوشیده از برف عاشق شوید
              </h3>
              <p className="text-lg font-primary text-gray-500">پراگ - چک</p>

              <div className="flex justify-end">
                <Image src="/images/star.png" width={50} height={25} />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-primary text-gray-500">
                  10 روزه
                </span>
                <span className="2xl:text-3xl xl:text-2xl lg:text-xl font-primary text-green-800 font-semibold">
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
