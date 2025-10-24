import React from "react";
import Image from "next/image";
import Form from "@/components/templates/Register/Form/Form";

const Register = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-[60px]">
      <div className="w-full max-w-[1500px] flex justify-center items-center">
        <div className="flex-1 flex justify-center">
          <div className="relative w-[565px] h-[675px]">
            <Image
              src="/images/Front (1).png"
              className="absolute top-[-40px] right-[-100px] z-10"
              width={184}
              height={263}
            />
            <Image
              src="/images/Back (1).png"
              className="absolute"
              width={365}
              height={579}
            />
            <Image
              src="/images/Front (2).png"
              className="absolute bottom-0 left-0"
              width={300}
              height={428}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5 justify-center items-center">
          <div className="w-full max-w-[400px] text-right">
            <h2 className="text-[35px] font-primary font-semibold text-right">
              ثبت نام
            </h2>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Register;
