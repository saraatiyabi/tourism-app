import {
  validateEmail,
  validateFullname,
  validatePassword,
  validatePhone,
  validateRepeatedPass,
  validateUsername,
} from "@/utils/validators/validators";
import {
  faEnvelope,
  faKey,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Link from "next/link";
import { fetchData } from "@/utils/fetch/fetch";
import swal from "sweetalert";

const Form = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");

  const registerUserHandler = async (e) => {
    e.preventDefault();

    const isValidFullname = validateFullname(fullname);
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(pass);
    const isValidRepeatedPass = validateRepeatedPass(pass, repeatPass);

    if (!isValidFullname) {
      return swal({
        title: "نام و نام خانوادگی باید حداقل 4 کاراکتر باشد!",
        icon: "error",
        button: "تلاش مجدد",
      });
    }

    if (!isValidEmail) {
      return swal({
        title: "ایمیل وارد شده معتبر نمی باشد!",
        icon: "error",
        button: "تلاش مجدد",
      });
    }

    if (!isValidPassword) {
      return swal({
        title:
          "رمز عبور به اندازه کافی قوی نیست، رمز عبور باید ترکیبی از حروف کوچک و بزرگ، اعداد و یک کاراکتر خاص باشد!",
        icon: "error",
        button: "تلاش مجدد",
      });
    }

    if (!isValidRepeatedPass) {
      return swal({
        title: "رمز عبور و تکرار آن مطابقت ندارند!",
        icon: "error",
        button: "تلاش مجدد",
      });
    }

    // Validation of fields that are NOT required
    if (phone) {
      const isValidPhone = validatePhone(phone);
      if (!isValidPhone) {
        return swal({
          title: "شماره تلفن وارد شده معتبر نمی باشد!",
          icon: "error",
          button: "تلاش مجدد",
        });
      }
    }

    if (username) {
      const isValidUsername = validateUsername(username);
      if (!isValidUsername) {
        return swal({
          title: "نام کاربری می بایست 8 الی 20 کاراکتر باشد!",
          icon: "error",
          button: "تلاش مجدد",
        });
      }
    }

    const newUserInfo = {
      firstName: "Sara",
      lastName: "Atiyabi",
      email,
      phoneNumber: phone,
      username,
      password: pass,
    };

    try {
      const res = await fetch("http://localhost:8000/auth/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify(newUserInfo),
      });
      console.log("res => ", res);
    } catch (err) {
      console.log("error => ", err);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full text-center lg:text-right">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-semibold text-gray-800 mb-8">
          ثبت نام
        </h2>
      </div>
      <form
        className="flex flex-col gap-4 md:gap-5 w-full max-w-md"
        onSubmit={registerUserHandler}
      >
        {/* Fullname Input */}
        <div className="w-full h-12 md:h-14 flex justify-between items-center border-2 border-gray-300 rounded-2xl md:rounded-3xl px-4 focus-within:border-green-600 transition-colors duration-200">
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            className="border-none outline-none w-full text-base md:text-lg bg-transparent"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <FontAwesomeIcon
            icon={faUser}
            className="text-gray-500 text-sm md:text-base"
          />
        </div>

        {/* Username Input */}
        <div className="w-full h-12 md:h-14 flex justify-between items-center border-2 border-gray-300 rounded-2xl md:rounded-3xl px-4 focus-within:border-green-600 transition-colors duration-200">
          <input
            type="text"
            placeholder="نام کاربری"
            className="border-none outline-none w-full text-base md:text-lg bg-transparent"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faUser}
            className="text-gray-500 text-sm md:text-base"
          />
        </div>

        {/* Phone Input */}
        <div className="w-full h-12 md:h-14 flex justify-between items-center border-2 border-gray-300 rounded-2xl md:rounded-3xl px-4 focus-within:border-green-600 transition-colors duration-200">
          <input
            type="tel"
            placeholder="شماره تلفن"
            className="border-none text-right outline-none w-full text-base md:text-lg bg-transparent"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faPhone}
            className="text-gray-500 text-sm md:text-base"
          />
        </div>

        {/* Email Input */}
        <div className="w-full h-12 md:h-14 flex justify-between items-center border-2 border-gray-300 rounded-2xl md:rounded-3xl px-4 focus-within:border-green-600 transition-colors duration-200">
          <input
            type="email"
            placeholder="ایمیل"
            className="border-none outline-none w-full text-base md:text-lg bg-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-gray-500 text-sm md:text-base"
          />
        </div>

        {/* Password Input */}
        <div className="w-full h-12 md:h-14 flex justify-between items-center border-2 border-gray-300 rounded-2xl md:rounded-3xl px-4 focus-within:border-green-600 transition-colors duration-200">
          <input
            type="password"
            placeholder="رمز عبور"
            className="border-none outline-none w-full text-base md:text-lg bg-transparent"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
          <FontAwesomeIcon
            icon={faKey}
            className="text-gray-500 text-sm md:text-base"
          />
        </div>

        {/* Repeat Password Input */}
        <div className="w-full h-12 md:h-14 flex justify-between items-center border-2 border-gray-300 rounded-2xl md:rounded-3xl px-4 focus-within:border-green-600 transition-colors duration-200">
          <input
            type="password"
            placeholder="تکرار رمز عبور"
            className="border-none outline-none w-full text-base md:text-lg bg-transparent"
            value={repeatPass}
            onChange={(e) => setRepeatPass(e.target.value)}
            required
          />
          <FontAwesomeIcon
            icon={faLock}
            className="text-gray-500 text-sm md:text-base"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold text-lg md:text-xl py-3 rounded-2xl md:rounded-3xl mt-4 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          ارسال
        </button>

        {/* Login Link */}
        <div className="flex flex-col gap-3 mt-4">
          <span className="text-base md:text-lg text-center text-gray-700">
            عضو تریپ یاب هستید؟{" "}
            <Link
              href="/login"
              className="text-green-700 hover:text-green-800 font-bold transition-colors duration-200"
            >
              ورود
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Form;
