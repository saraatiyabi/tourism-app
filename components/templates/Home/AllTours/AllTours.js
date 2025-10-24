import React from "react";
import TourCard from "../TourCard/TourCard";

const AllTours = () => {
  return (
    <div className="w-full max-w-[1400px] mb-[50px]">
      <div className="flex w-full flex-col justify-center items-center gap-6 mt-10">
        <h2 className="text-[50px] max-w-[768px] font-bold font-primary text-gray-800 leading-[68px] text-center">
          اگر به اندازه کافی به آن پایبند باشیم، می توانیم هر کاری که بخواهیم
          انجام دهیم.
        </h2>
        <p className="text-gray-500 font-primary text-[20px]">
          آنچه را که می توانید، با آنچه دارید، جایی که هستید انجام دهید.
        </p>
      </div>

      <section className="w-full flex flex-row items-center justify-center">
        <TourCard image="image (8).png" width={236} height={192} />

        <div className="flex-1 w-full flex flex-col justify-center">
          <div className="flex justify-center items-center my-10">
            <button className="font-primary bg-green-800 text-white text-xl py-3 px-5 rounded-3xl ">
              مشاهده کلیه تور ها
            </button>
          </div>

          <div className="flex flex-row items-center justify-between">
            <TourCard image="image (10).png" width={177} height={144} />
            <TourCard image="image (11).png" width={177} height={144} />
          </div>
        </div>

        <TourCard image="image (9).png" width={236} height={192} />
      </section>
    </div>
  );
};

export default AllTours;
