// 'use client'

import Image from 'next/image'
import Cart1 from '@/public/cart1.jpg'

const carousel = ({objectArray}) => {

  return (
    <div className=' w-100 mt-14'>
        {objectArray.map((object, index)=>(
            <div key={index} className='flex flex-row w-full'>
                <p className='absolute w-full mt-10 text-3xl font-bold text-center text-white uppercase md:text-6xl'>{object.description}</p>
                <Image alt="images" className='w-screen' src={object.imageUrl}></Image>
            </div>
        ))}
    </div>
  )
}

export default carousel