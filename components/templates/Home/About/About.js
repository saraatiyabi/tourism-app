import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      {/* Images Section */}
      <div className="flex-1 flex justify-center lg:justify-start w-full order-2 lg:order-1">
        <div className="relative w-full max-w-[500px] lg:max-w-none h-[400px] sm:h-[500px] md:h-[550px] lg:h-[550px] xl:h-[650px]">
          <Image
            src="/images/Back.png"
            className="absolute left-0 top-0 w-[60vw] max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:w-[320px] xl:w-[350px] 2xl:w-[380px] h-auto"
            width={340}
            height={500}
            alt="Background illustration"
          />
          <Image
            src="/images/Front.png"
            className="absolute bottom-0 right-0 w-[35vw] max-w-[200px] sm:max-w-[280px] md:max-w-[320px] lg:w-[170px] xl:w-[220px] 2xl:w-[300px] h-auto"
            width={280}
            height={418}
            alt="Foreground illustration"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex justify-center items-center order-1 lg:order-2 w-full">
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-right max-w-[560px]">
          {/* Section Title */}
          <p className="text-green-700 text-xl md:text-2xl lg:text-[25px] font-semibold mb-3 lg:mb-4">
            درباره ما
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-gray-800 leading-tight sm:leading-[50px] md:leading-[60px] lg:leading-[70px] mb-4 lg:mb-6">
            هدف ما تحقق آرزوی رویایی شماست!
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-xl text-gray-600 leading-relaxed mb-6 lg:mb-8">
            فهمیدن برای رسیدن به هر چیزی نیازمند ایمان و باور به خود، بینش، سخت
            کوشی، عزم راسخ و فداکاری است.
          </p>

          {/* Stats Section */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-6 lg:mt-10">
            {/* Rating */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-green-700">
                4.7
              </h3>
              <span className="text-base sm:text-lg md:text-xl lg:text-lg text-gray-500 font-medium mt-1">
                نمره کلی
              </span>
            </div>

            {/* Happy Customers */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-green-700">
                8k
              </h3>
              <span className="text-base sm:text-lg md:text-xl lg:text-lg text-gray-500 font-medium mt-1">
                مشتری خرسند
              </span>
            </div>

            {/* Successful Trips */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-green-700">
                1k
              </h3>
              <span className="text-base sm:text-lg md:text-xl lg:text-lg text-gray-500 font-medium mt-1">
                سفر موفق
              </span>
            </div>

            {/* Years Experience */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-green-700">
                3
              </h3>
              <span className="text-base sm:text-lg md:text-xl lg:text-lg text-gray-500 font-medium mt-1">
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
