import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const Comments = () => {
  return (
    <div className="w-full max-w-[1400px] mb-[50px]">
      <div className="flex w-full flex-col justify-center items-center my-20">
        <p className="text-green-900 font-primary text-[25px] font-semibold">
          نظرات کاربران
        </p>
        <h2 className="text-[72px] max-w-[50%] font-bold font-primary text-gray-800 leading-[90px]">
          مسافران ما در سراسر جهان
        </h2>
      </div>

      <Swiper
        style={{
          padding: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        slidesPerView={3}
        spaceBetween="65px"
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center p-10 max-w-[380px] min-h-[400px] gap-3 shadow-lg rounded-xl relative">
            <Image
              src="/images/Vector.png"
              width={34}
              height={34}
              className="absolute top-0.5 right-10 z-10"
            />
            <div>
              <Image src="/images/Ellipse 1.png" width={80} height={80} />
            </div>
            <h4 className="text-3xl font-semibold font-primary">
              علی یاوری پور
            </h4>
            <p className="text-lg font-primary">پزشک</p>
            <div>
              <Image src="/images/Stars.png" width={80} height={16} />
            </div>
            <p className="font-primary text-lg justify-evenly text-center">
              گواهی‌ها کار می‌کنند، زیرا فروشندگان قوی نیستند، با صدایی
              بی‌طرفانه برخورد می‌کنند و اعتماد ایجاد می‌کنند.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center text-center items-center max-w-[380px] min-h-[400px] gap-3 shadow-xl rounded-xl relative">
            <Image
              src="/images/Vector.png"
              width={34}
              height={34}
              className="absolute top-0.5 right-10 z-10"
            />
            <div>
              <Image src="/images/Ellipse 1.png" width={80} height={80} />
            </div>
            <h4 className="text-3xl font-semibold font-primary">
              علی یاوری پور
            </h4>
            <p className="text-lg font-primary">پزشک</p>
            <div>
              <Image
                src="/images/Stars.png"
                width={80}
                height={16}
                className="w-full"
              />
            </div>
            <p className="font-primary text-lg justify-evenly text-center">
              گواهی‌ها کار می‌کنند، زیرا فروشندگان قوی نیستند، با صدایی
              بی‌طرفانه برخورد می‌کنند و اعتماد ایجاد می‌کنند.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center p-10 max-w-[380px] min-h-[400px] gap-3 shadow-xl rounded-xl relative">
            <Image
              src="/images/Vector.png"
              width={34}
              height={34}
              className="absolute top-0.5 right-10 z-10"
            />
            <div>
              <Image src="/images/Ellipse 1.png" width={80} height={80} />
            </div>
            <h4 className="text-3xl font-semibold font-primary">
              علی یاوری پور
            </h4>
            <p className="text-lg font-primary">پزشک</p>
            <div>
              <Image src="/images/Stars.png" width={80} height={16} />
            </div>
            <p className="font-primary text-lg justify-evenly text-center">
              گواهی‌ها کار می‌کنند، زیرا فروشندگان قوی نیستند، با صدایی
              بی‌طرفانه برخورد می‌کنند و اعتماد ایجاد می‌کنند.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center p-10 max-w-[380px] min-h-[400px] gap-3 shadow-xl rounded-xl relative">
            <Image
              src="/images/Vector.png"
              width={34}
              height={34}
              className="absolute top-0.5 right-10 z-10"
            />
            <div>
              <Image src="/images/Ellipse 1.png" width={80} height={80} />
            </div>
            <h4 className="text-3xl font-semibold font-primary">
              علی یاوری پور
            </h4>
            <p className="text-lg font-primary">پزشک</p>
            <div>
              <Image src="/images/Stars.png" width={80} height={16} />
            </div>
            <p className="font-primary text-lg justify-evenly text-center">
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
