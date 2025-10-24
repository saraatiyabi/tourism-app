import Image from 'next/image'
import React from 'react'

const TourCard = ({ image, width, height }) => {
    return (
        <div className='flex-1 flex flex-col justify-center items-center'>
            <div className='shadow-lg px-2 py-5 rounded-xl'>
                <div>
                    <Image src={`/images/${image}`} alt="amesterdam" width={width} height={height} />
                </div>
                <div>
                    <span className='font-primary text-black font-bold text-xl py-3 px-2'>آمستردام - هلند</span>
                </div>
                <div className='flex flex-row justify-between items-center px-3 pt-3'>
                    <span className='font-primary text-gray-500 text-md'>10 روزه</span>
                    <span className='font-primary text-green-800 font-semibold text-xl'>150$</span>
                </div>
            </div>
        </div>
    )
}

export default TourCard