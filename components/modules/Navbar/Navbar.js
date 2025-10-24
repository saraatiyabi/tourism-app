import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full bg-green-100 flex flex-row justify-evenly gap-5 items-center p-4'>
            <div className='w-[30%] flex justify-center items-center'>
                <Image src="/images/TripByte.png" width={93} height={23} />
            </div>

            <div className='w-[40%]'>
                <ul className='w-full flex flex-row justify-evenly items-center'>
                    <li className='text-gray-800 py-3 font-primary max-w-[150px] text-2xl font-medium border-b-4 border-b-green-900'>صفحه اصلی</li>
                    <li className='text-gray-500 py-3 font-primary max-w-[150px] text-2xl font-medium'>ارتباط با ما</li>
                    <li className='text-gray-500 py-3 font-primary max-w-[150px] text-2xl font-medium'>قیمت ها</li>
                    <li className='text-gray-500 py-3 font-primary max-w-[150px] text-2xl font-medium'>سرویس ها</li>
                    <li className='text-gray-500 py-3 font-primary max-w-[150px] text-2xl font-medium'>درباره ما</li>
                </ul>
            </div>

            <div className='flex flex-row w-[30%] justify-center items-center gap-4'>
                <Link className='bg-green-900 font-primary text-2xl font-medium text-white px-4 py-3 rounded-3xl flex justify-center items-center' href="/register">ثبت نام</Link>
                <Link className='text-gray-500 font-primary text-2xl font-medium p-3' href="/login">ورود</Link>
            </div>
        </div>
    )
}

export default Navbar