import React from "react";
import Image from "next/image";
import Form from "@/components/templates/Register/Form/Form";

const Register = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-8 md:py-12 lg:my-[10px] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 xl:gap-16">
        {/* Images Section - Hidden on mobile, visible on medium screens and up */}
        <div className={`hidden md:flex-1 md:flex md:justify-center`}>
          <div className="relative w-full 2xl:h-[675px] xl:h-[600px] lg:h-[500px] flex justify-center items-center">
            <Image
              src="/images/Front (1).png"
              className="hidden absolute md:flex top-0 right-0 z-10 w-[10vw] lg:w-[14vw] xl:w-[15vw] 2xl:w-[12vw]"
              width={184}
              height={263}
            />
            <Image
              src="/images/Back (1).png"
              className="hidden absolute md:flex w-[15vw] lg:w-[25vw] xl:w-[25vw] 2xl:w-[20vw]"
              width={450}
              height={579}
            />
            <Image
              src="/images/Front (2).png"
              className="hidden absolute md:flex bottom-0 left-0 lg:w-[15vw] xl:w-[16vw] 2xl:w-[13vw]"
              width={300}
              height={428}
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 justify-center items-center w-full max-w-md lg:max-w-none">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Register;
