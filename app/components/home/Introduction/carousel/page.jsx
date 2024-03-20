// 'use client'

import Image from 'next/image'
import Cart1 from '@/public/cart1.jpg'

const carousel = ({objectArray}) => {
  if (!objectArray) {
    return <div>No data available</div>;
  }

  return (
    <div className=' w-100 mt-14'>
        {objectArray.map((object, index)=>(
            <div key={index} className='flex flex-row w-full'>
                <p className='absolute w-full mt-10 text-3xl font-bold text-center text-white uppercase md:text-6xl'>{object.description}</p>
                <Image alt={object.description} className='w-screen' width={500} height={500} src={object.imageUrl}/>
            </div>
        ))}
    </div>
  )
}

export default carousel