import React from "react";
import TourCard from "../TourCard/TourCard";

const AllTours = () => {
  return (
    <div className="w-full mb-12 md:mb-16 lg:mb-[50px] px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex w-full flex-col justify-center items-center gap-4 md:gap-6 mt-8 md:mt-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold text-gray-800 leading-tight sm:leading-[45px] md:leading-[55px] lg:leading-[68px] max-w-4xl">
          اگر به اندازه کافی به آن پایبند باشیم، می توانیم هر کاری که بخواهیم
          انجام دهیم.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-[20px] max-w-2xl">
          آنچه را که می توانید، با آنچه دارید، جایی که هستید انجام دهید.
        </p>
      </div>

      {/* Cards Section */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 mt-8 md:mt-12 lg:mt-16">
        {/* Left Large Card - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block flex-shrink-0">
          <TourCard
            image="image (8).png"
            width={236}
            height={192}
            className="w-full max-w-[200px] xl:max-w-[236px]"
          />
        </div>

        {/* Center Section */}
        <div className="flex-1 w-full flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
          {/* Button - Centered on all devices */}
          <div className="flex justify-center items-center w-full">
            <button className="bg-green-700 hover:bg-green-800 text-white text-base sm:text-lg md:text-xl lg:text-xl py-2 sm:py-3 px-4 sm:px-5 rounded-2xl lg:rounded-3xl transition-colors duration-200 shadow-md hover:shadow-lg">
              مشاهده کلیه تور ها
            </button>
          </div>

          {/* Small Cards Grid */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-6">
            {/* Top Small Cards for mobile, side by side for larger screens */}
            <div className="flex flex-row items-center justify-center gap-4 md:gap-5 lg:gap-6 w-full max-w-md sm:max-w-none">
              <TourCard
                image="image (10).png"
                width={177}
                height={144}
                className="w-full max-w-[140px] sm:max-w-[150px] md:max-w-[160px] lg:max-w-[177px]"
              />
              <TourCard
                image="image (11).png"
                width={177}
                height={144}
                className="w-full max-w-[140px] sm:max-w-[150px] md:max-w-[160px] lg:max-w-[177px]"
              />
            </div>
          </div>
        </div>

        {/* Right Large Card - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block flex-shrink-0">
          <TourCard
            image="image (9).png"
            width={236}
            height={192}
            className="w-full max-w-[200px] xl:max-w-[236px]"
          />
        </div>

        {/* Mobile Layout - Show all cards in column */}
        <div className="lg:hidden w-full flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
          {/* Large cards for mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 w-full">
            <TourCard
              image="image (8).png"
              width={236}
              height={192}
              className="w-full max-w-[280px] sm:max-w-[200px] md:max-w-[220px]"
            />
            <TourCard
              image="image (9).png"
              width={236}
              height={192}
              className="w-full max-w-[280px] sm:max-w-[200px] md:max-w-[220px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllTours;
