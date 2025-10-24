import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <section className='w-full bg-green-100 flex flex-row items-center justify-center h-[400px] px-20 py-10 gap-20'>
            <div className='w-full max-w-[1400px] flex items-baseline'>
                <div className='flex-1 flex flex-col'>
                    <h3 className='font-primary text-2xl font-semibold text-green-950 my-3'>خبرنامه</h3>
                    <p className='font-primary text-lg text-gray-600 font-medium max-w-[270px] my-5'>در خبرنامه ما عضو شوید و پیشنهادات هیجان انگیز را دریافت کنید</p>
                    <div className='w-[300px] bg-white rounded-3xl h-14 flex flex-row justify-between items-center px-3'>
                        <input
                            className='border-none outline-none'
                            type='email'
                            placeholder='ایمیل خود را وارد کنید'
                        />
                        <button className='bg-green-800 rounded-full flex justify-center items-center w-10 h-10'>
                            <FontAwesomeIcon icon={faMessage} color='white' />
                        </button>
                    </div>
                </div>

                <div className='flex-[0.5] flex justify-center items-center'>
                    <ul className='flex flex-col gap-4'>
                        <li className='font-priamry font-semibold text-xl'>پشتیبانی</li>
                        <li className='font-primary text-gray-600 text-lg'>حساب</li>
                        <li className='font-primary text-gray-600 text-lg'>مرکز خدمات</li>
                        <li className='font-primary text-gray-600 text-lg'>ارتباط با ما</li>
                    </ul>
                </div>

                <div className='flex-[0.5] flex justify-center items-center'>
                    <ul className='flex flex-col gap-4'>
                        <li className='font-priamry font-semibold text-xl'>شرکت</li>
                        <li className='font-primary text-gray-600 text-lg'>چرا  ما؟</li>
                        <li className='font-primary text-gray-600 text-lg'>مشارکت با ما</li>
                        <li className='font-primary text-gray-600 text-lg'>پرسش و پاسخ</li>
                    </ul>
                </div>

                <div className='flex-[0.5] flex justify-center items-center'>
                    <ul className='flex flex-col gap-4'>
                        <li className='font-priamry font-semibold text-xl'>درباره ما</li>
                        <li className='font-primary text-gray-600 text-lg'>ویژگیها</li>
                        <li className='font-primary text-gray-600 text-lg'>اخبار</li>
                        <li className='font-primary text-gray-600 text-lg'>برنامه ها</li>
                    </ul>
                </div>

                <div className='flex-1 flex flex-col justify-center items-center gap-4'>
                    <img src='/images/TripByte.png' />
                    <span className='font-primary text-gray-600 text-lg'>اصفهان - ایران</span>
                </div>
            </div>
        </section>
    )
}

export default Footer