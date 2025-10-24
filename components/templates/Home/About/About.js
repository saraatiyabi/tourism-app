import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full  flex justify-between gap-x-16 items-center">
      <div className="flex-1 flex justify-between">
        <div className="relative w-full h-[600px]">
          <Image
            src="/images/Back.png"
            className="absolute left-0 top-0 w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[25vw] h-auto"
            width={340}
            height={500}
          />
          <Image
            src="/images/Front.png"
            className="absolute bottom-0 right-0 w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[18vw] h-auto"
            width={280}
            height={418}
          />
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="flex flex-col justify-center max-w-[560px]">
          <p className="text-green-900 font-primary text-[25px] font-semibold">
            درباره ما
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-[60px] font-bold font-primary text-gray-800 leading-tight md:leading-[70px]">
            هدف ما تحقق آرزوی رویایی شماست!
          </h1>
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-xl font-primary text-gray-500 mt-5 justify-evenly">
            فهمیدن برای رسیدن به هر چیزی نیازمند ایمان و باور به خود، بینش، سخت
            کوشی، عزم راسخ و فداکاری است.
          </span>

          <div className="w-full flex flex-row items-center gap-10 mt-10">
            <div className="flex-1 flex flex-col">
              <h3 className="2xl:text-5xl lg:text-3xl xl:text-4xl font-bold text-green-900">
                4.7
              </h3>
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-xl font-primary font-medium text-gray-400">
                نمره کلی
              </span>
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="2xl:text-5xl lg:text-3xl xl:text-4xl font-bold text-green-900">
                8k
              </h3>
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-xl font-primary font-medium text-gray-400">
                مشتری خرسند
              </span>
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="2xl:text-5xl lg:text-3xl xl:text-4xl font-bold text-green-900">
                1k
              </h3>
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-xl font-primary font-medium text-gray-400">
                سفر موفق
              </span>
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="2xl:text-5xl lg:text-3xl xl:text-4xl font-bold text-green-900">
                3
              </h3>
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-xl font-primary font-medium text-gray-400">
                سال تجربه
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
