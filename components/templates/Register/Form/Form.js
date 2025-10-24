import { validateEmail, validateFullname, validatePassword, validatePhone, validateRepeatedPass, validateUsername } from '@/utils/validators/validators';
import { faEnvelope, faKey, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Link from 'next/link';
import { fetchData } from '@/utils/fetch/fetch';
import swal from 'sweetalert';

const Form = () => {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [repeatPass, setRepeatPass] = useState('');


    const registerUserHandler = async (e) => {
        e.preventDefault();

        const isValidFullname = validateFullname(fullname);
        const isValidEmail = validateEmail(email);
        const isValidPassword = validatePassword(pass)
        const isValidRepeatedPass = validateRepeatedPass(pass, repeatPass)

        if (!isValidFullname) {
            return swal({
                title: "نام و نام خانوادگی باید حداقل 4 کارامتر باشد!",
                icon: "error",
                button: "تلاش مجدد"
            })
        }

        if (!isValidEmail) {
            return swal({
                title: "ایمیل وارد شده معتبر نمی باشد!",
                icon: "error",
                button: "تلاش مجدد"
            })
        }


        if (!isValidPassword) {
            return swal({
                title: "رمز عبور به اندازه کافی قوی نیست، رمز عبور باید ترکیبی از حروف کوچک و بزرگ، اعداد و یک کاراکتر خاص باشد!",
                icon: "error",
                button: "تلاش مجدد"
            })
        }

        if (!isValidRepeatedPass) {
            return swal({
                title: "رمز عبور و تکرار آن مطابقت ندارند!",
                icon: "error",
                button: "تلاش مجدد"
            })
        }

        //validation of fields that are NOT required

        if (phone) {
            const isValidPhone = validatePhone(phone);
            if (!isValidPhone) {
                return swal({
                    title: "ایمیل وارد شده معتبر نمی باشد!",
                    icon: "error",
                    button: "تلاش مجدد"
                })
            }
        }

        if (username) {
            const isValidUsername = validateUsername(username);
            if (!isValidUsername) {
                return swal({
                    title: "نام کاربری می بایست 8 الی 20 کاراکتر باشد!",
                    icon: "error",
                    button: "تلاش مجدد"
                })
            }
        }

        const newUserInfo = {
            firstName: "Sara",
            lastName: "Atiyabi",
            email,
            phoneNumber: phone,
            username,
            password: pass,
        }

        try {
            const res = await fetch("http://localhost:8000/auth/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "*/*"
                },
                body: JSON.stringify(newUserInfo)
            })
            // const res = await fetchData("http://localhost:8000/auth/registration", "POST", { "Content-Type": "Application/json" }, newUserInfo)
            console.log("res => ", res)
        } catch (err) {
            console.log("error => ", err)
        }
    }


    return (
        <form className="font-primary flex flex-col gap-5">
            <div className="font-primary max-w-[400px] h-[58px] flex justify-between items-center border-2 rounded-3xl px-5">
                <input
                    type='text'
                    placeholder='نام و نام خانوادگی'
                    className='font-primary border-none outline-none w-full text-lg'
                    value={fullname}
                    onChange={e => setFullname(e.target.value)}
                />
            </div>

            <div className="font-primary max-w-[400px] h-[58px] flex justify-between items-center border-2 rounded-3xl px-5">
                <input
                    type='text'
                    placeholder='نام کاربری'
                    className='font-primary border-none outline-none w-full text-lg'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <FontAwesomeIcon icon={faUser} color='#9192a6' />
            </div>

            <div className="font-primary max-w-[400px] h-[58px] flex justify-between items-center border-2 rounded-3xl px-5">
                <input
                    type='text'
                    placeholder='شماره تلفن'
                    className='font-primary border-none outline-none w-full text-lg'
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <FontAwesomeIcon icon={faPhone} color='#9192a6' />
            </div>

            <div className="font-primary max-w-[400px] h-[58px] flex justify-between items-center border-2 rounded-3xl px-5">
                <input
                    type='text'
                    placeholder='ایمیل'
                    className='font-primary border-none outline-none w-full text-lg'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <FontAwesomeIcon icon={faEnvelope} color='#9192a6' />
            </div>

            <div className="font-primary max-w-[400px] h-[58px] flex justify-between items-center border-2 rounded-3xl px-5">
                <input
                    type='password'
                    placeholder='رمز عبور'
                    className='font-primary border-none outline-none w-full text-lg'
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                />
                <FontAwesomeIcon icon={faKey} color='#9192a6' />
            </div>

            <div className="font-primary max-w-[400px] h-[58px] flex justify-between items-center border-2 rounded-3xl px-5">
                <input
                    type='password'
                    placeholder='تکرار رمز عبور'
                    className='font-primary border-none outline-none w-full text-lg'
                    value={repeatPass}
                    onChange={e => setRepeatPass(e.target.value)}
                />
                <FontAwesomeIcon icon={faLock} color='#9192a6' />
            </div>


            <button className='font-primary w-[400px] bg-green-800 text-white font-semibold text-xl py-3 rounded-3xl mt-5' onClick={registerUserHandler}>
                ارسال
            </button>

            <div className="font-primary flex flex-col gap-3">
                <span className="font-primary text-lg text-center">
                    عضو تریپ یاب هستید؟
                    {" "}
                    <Link href="/login" className="font-primary text-green-800 font-bold">
                        ورود
                    </Link>
                </span>
            </div>
        </form>
    )
}

export default Form