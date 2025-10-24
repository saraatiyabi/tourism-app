import React, { useState } from 'react'
import { faKey, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { validatePassword, validatePhone, validateEmail } from '@/utils/validators/validators'
import Link from 'next/link'
import swal from 'sweetalert'
import { fetchData } from '@/utils/fetch/fetch'

const Form = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (e) => {
        e.preventDefault();

        const userInfo = { loginProperty: identifier, password };

        const isValidPhone = validatePhone(identifier);
        const isValidEmail = validateEmail(identifier);
        const isValidPassword = validatePassword(password)

        const isValidIdentifier = isValidEmail || isValidPhone;

        if (!isValidIdentifier || !isValidPassword) {
            return swal({
                title: "اطلاعات وارد شده معتبر نمی باشد!",
                icon: "error",
                button: "تلاش مجدد"
            })
        }

        const res = await fetch("http://localhost:8000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(userInfo)
        })

        // const res = await fetchData("http://localhost:8000/auth/login", "POST", { "Content-Type": "Application/json" }, userInfo)

        if (res.status === 200) {
            swal({
                title: "کاربر با موفقیت لاگین شد!",
                icon: "success",
                button: "اوکی!"
            })
        }
        if (res.status === 404) {
            return swal({
                title: "کاربری با این ایمیل و پسورد یافت نشد!",
                icon: "error",
                button: "تلاش مجدد"
            })
        }
    }

    return (
        <form className="flex flex-col gap-10">
            <label className="text-[25px] text-primary font-bold">ورود</label>
            <div className="max-w-[400px] h-[58px] flex justify-between items-center border-2 rounded-3xl px-5">
                <input
                    type='text'
                    placeholder='شماره همراه'
                    className='border-none outline-none w-full'
                    value={identifier}
                    onChange={e => setIdentifier(e.target.value)}
                />
                <FontAwesomeIcon icon={faPhone} color='#9192a6' />
            </div>

            <div className="max-w-[400px] h-[58px] flex justify-between items-center border-2 rounded-3xl px-5">
                <input
                    type='password'
                    placeholder='رمز عبور'
                    className='border-none outline-none w-full'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <FontAwesomeIcon icon={faKey} color='#9192a6' />
            </div>

            <button className='w-[400px] bg-green-800 text-white font-semibold text-xl py-3 rounded-3xl' onClick={loginHandler}>
                ارسال
            </button>

            <div className="flex flex-col gap-3">
                <span className="text-lg font-primary text-center">
                    رمز عبور خود را فراموش کرده اید؟
                    {" "}
                    <Link href="/forget-passsword" className="text-green-800 font-bold">
                        بازیابی رمز عبور
                    </Link>
                </span>
                <span className="text-lg font-primary text-center">
                    حساب کاربری ندارید؟
                    {" "}
                    <Link href="/register" className="text-green-800 font-bold">
                        ثبت نام
                    </Link>
                </span>
            </div>
        </form>
    )
}

export default Form