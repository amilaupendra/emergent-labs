import React from 'react'
import Carousel from '@/app/components/home/Introduction/carousel/page'
import Image from 'next/image'


const page = () => {
   
  return (
    <div className='mt-5 w-100'>
        <h1 className='text-3xl font-bold'>What we do</h1>
        <p>We are a digital innovation company that helps businessess and organizations create the future through software, data, and emerging technology.</p>
    <div>
        <Carousel/>
    </div>
    
    </div>
  )
}

export default page