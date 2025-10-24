import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='w-full max-w-[1400px] flex justify-between items-center'>

            <div className='flex-1 flex justify-center'>
                <div className='relative w-[565px] h-[675px]'>
                    <Image src="/images/Back.png" className='absolute left-0 top-0' width={365} height={579} />
                    <Image src="/images/Front.png" className='absolute bottom-0 right-0' width={300} height={428} />
                </div>
            </div>

            <div className='flex-1 flex justify-center'>
                <div className='flex flex-col justify-center max-w-[560px]'>
                    <p className='text-green-900 font-primary text-[25px] font-semibold'>درباره ما</p>
                    <h1 className='text-[72px] font-bold font-primary text-gray-800 leading-[90px]'>هدف ما تحقق آرزوی رویایی شماست!</h1>
                    <span className='text-[26px] font-primary text-gray-500 mt-5 justify-evenly'>
                        فهمیدن برای رسیدن به هر چیزی نیازمند ایمان و باور به خود،
                        بینش، سخت کوشی، عزم راسخ و فداکاری است.
                    </span>

                    <div className='w-full flex flex-row items-center gap-10 mt-10'>
                        <div className='flex-1 flex flex-col'>
                            <h3 className='text-5xl font-bold text-green-900'>4.7</h3>
                            <span className='text-[22px] font-primary font-medium text-gray-400'>نمره کلی</span>
                        </div>
                        <div className='flex-1 flex flex-col'>
                            <h3 className='text-5xl font-bold text-green-900'>8k</h3>
                            <span className='text-[22px] font-primary font-medium text-gray-400'>مشتری خرسند</span>
                        </div>
                        <div className='flex-1 flex flex-col'>
                            <h3 className='text-5xl font-bold text-green-900'>1k</h3>
                            <span className='text-[22px] font-primary font-medium text-gray-400'>سفر موفق</span>
                        </div>
                        <div className='flex-1 flex flex-col'>
                            <h3 className='text-5xl font-bold text-green-900'>3</h3>
                            <span className='text-[22px] font-primary font-medium text-gray-400'>سال تجربه</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About