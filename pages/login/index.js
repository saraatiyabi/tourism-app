import React from "react";
import Form from "@/components/templates/Login/Form/Form";
import Image from "next/image";

const Login = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-[50px]">
      <div className="w-full max-w-[80vw] flex justify-center items-center">
        <div className="flex-1 flex flex-col gap-6 md:gap-8 justify-center items-center w-full max-w-md lg:max-w-none">
          <h2 className="text-[40px] font-primary font-semibold text-right">
            خوش آمدید
          </h2>
          <Form />
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <div className="relative  w-full 2xl:h-[675px] xl:h-[600px] lg:h-[450px] flex justify-center items-center">
            <Image
              src="/images/Large.png"
              className="absolute left-0 top-0 w-[20vw] lg:w-[30vw] xl:w-[26vw] 2xl:w-[25vw] h-auto"
              width={440}
              height={687}
            />
            <Image
              src="/images/Small.png"
              className="absolute bottom-0 lg:right-10 2xl:right-20 lg:w-[15vw] xl:w-[15vw] 2xl:w-[14vw] h-auto"
              width={194}
              height={292}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
