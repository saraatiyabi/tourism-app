import React, { useState } from "react";
import { faKey, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  validatePassword,
  validatePhone,
  validateEmail,
} from "@/utils/validators/validators";
import Link from "next/link";
import swal from "sweetalert";
import { fetchData } from "@/utils/fetch/fetch";

const Form = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();

    const userInfo = { loginProperty: identifier, password };

    const isValidPhone = validatePhone(identifier);
    const isValidEmail = validateEmail(identifier);
    const isValidPassword = validatePassword(password);

    const isValidIdentifier = isValidEmail || isValidPhone;

    if (!isValidIdentifier || !isValidPassword) {
      return swal({
        title: "اطلاعات وارد شده معتبر نمی باشد!",
        icon: "error",
        button: "تلاش مجدد",
      });
    }

    try {
      const res = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(userInfo),
      });

      // const res = await fetchData("http://localhost:8000/auth/login", "POST", { "Content-Type": "Application/json" }, userInfo)

      if (res.status === 200) {
        swal({
          title: "کاربر با موفقیت لاگین شد!",
          icon: "success",
          button: "اوکی!",
        });
      }
      if (res.status === 404) {
        return swal({
          title: "کاربری با این ایمیل و پسورد یافت نشد!",
          icon: "error",
          button: "تلاش مجدد",
        });
      }
    } catch (error) {
      console.log("Login error:", error);
      swal({
        title: "خطا در ارتباط با سرور!",
        icon: "error",
        button: "تلاش مجدد",
      });
    }
  };

  return (
    <form
      className="flex flex-col gap-6 md:gap-8 w-full max-w-md"
      onSubmit={loginHandler}
    >
      {/* Form Title */}
      <label className="text-xl sm:text-2xl md:text-[25px] font-bold text-gray-800 text-center lg:text-right">
        ورود
      </label>

      {/* Identifier Input */}
      <div className="w-full h-12 md:h-14 flex justify-between items-center border-2 border-gray-300 rounded-2xl md:rounded-3xl px-4 focus-within:border-green-600 transition-colors duration-200">
        <input
          type="text"
          placeholder="ایمیل یا شماره همراه"
          className="border-none outline-none w-full text-base md:text-lg bg-transparent placeholder-gray-500"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
        />
        <FontAwesomeIcon
          icon={faPhone}
          className="text-gray-500 text-sm md:text-base flex-shrink-0"
        />
      </div>

      {/* Password Input */}
      <div className="w-full h-12 md:h-14 flex justify-between items-center border-2 border-gray-300 rounded-2xl md:rounded-3xl px-4 focus-within:border-green-600 transition-colors duration-200">
        <input
          type="password"
          placeholder="رمز عبور"
          className="border-none outline-none w-full text-base md:text-lg bg-transparent placeholder-gray-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <FontAwesomeIcon
          icon={faKey}
          className="text-gray-500 text-sm md:text-base flex-shrink-0"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold text-lg md:text-xl py-3 rounded-2xl md:rounded-3xl mt-2 transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        ارسال
      </button>

      {/* Links Section */}
      <div className="flex flex-col gap-3 md:gap-4 mt-2">
        {/* Forgot Password */}
        <span className="text-base md:text-lg text-center text-gray-700">
          رمز عبور خود را فراموش کرده اید؟{" "}
          <Link
            href="/forget-password"
            className="text-green-700 hover:text-green-800 font-bold transition-colors duration-200"
          >
            بازیابی رمز عبور
          </Link>
        </span>

        {/* Register Link */}
        <span className="text-base md:text-lg text-center text-gray-700">
          حساب کاربری ندارید؟{" "}
          <Link
            href="/register"
            className="text-green-700 hover:text-green-800 font-bold transition-colors duration-200"
          >
            ثبت نام
          </Link>
        </span>
      </div>
    </form>
  );
};

export default Form;
