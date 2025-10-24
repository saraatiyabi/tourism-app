import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAngleDown, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'

const Hero = () => {
    return (
        <div className='w-full max-w-[1400px] flex justify-between items-center h-screen'>

            <div className='flex-1 flex flex-col justify-center'>
                <h1 className='text-[80px] font-bold font-primary text-gray-800 leading-[90px]'>جرات داشتن زندگی موردنظر خود را داشته باشید!</h1>
                <span className='text-3xl font-primary text-gray-500 mt-5'>زندگی کوتاه است، و جهان وسیع، پس بهتر است شروع کنید.</span>

                <div className='flex items-center gap-5 w-[510px] rounded-3xl my-10 mx-5 p-5 shadow-md'>
                    <div className='flex-1 flex flex-row items-center justify-between'>
                        <span className='bg-green-900 text-white w-16 h-16 rounded-full flex justify-center items-center'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl text-white' />
                        </span>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-gray-400 font-semibold font-primary text-xl flex items-center gap-2'>
                                <FontAwesomeIcon icon={faAngleDown} />
                                <span>تاریخ</span>
                            </p>
                            <span className='text-gray-900 font-medium'>17 Jul 2023</span>
                        </div>
                        <FontAwesomeIcon icon={faCalendarDays} className='text-2xl mr-3 text-green-900' />
                    </div>
                    |
                    <div className='flex-1 flex flex-row items-center justify-center'>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-gray-400 font-semibold font-primary text-xl flex items-center gap-2'>
                                <FontAwesomeIcon icon={faAngleDown} />
                                <span>موقعیت</span>
                            </p>
                            <span className='text-gray-900 font-medium'>اصفهان - ایران</span>
                        </div>
                        <FontAwesomeIcon icon={faLocationDot} className='text-2xl mr-3 text-green-900' />
                    </div>
                </div>
            </div>

            <div className='flex-1 flex justify-center items-left'>
                <Image src="/images/images.png" width={453} height={579} />
            </div>
        </div>
    )
}

export default Hero