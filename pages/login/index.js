import React from 'react'
import Form from '@/components/templates/Login/Form/Form'
import Image from 'next/image'

const Login = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center my-[50px]'>
            <div className="w-full max-w-[1500px] flex justify-center items-center">
                <div className='flex-1 flex flex-col gap-10 justify-center items-center'>
                    <h2 className="text-[40px] font-primary font-semibold text-right">خوش آمدید</h2>
                    <Form />
                </div>
                <div className='flex-1 flex justify-center'>
                    <div className='relative w-[565px] h-[675px]'>
                        <Image src="/images/Large.png" className='absolute left-0 top-0' width={440} height={687} />
                        <Image src="/images/Small.png" className='absolute bottom-0 right-0' width={194} height={292} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login