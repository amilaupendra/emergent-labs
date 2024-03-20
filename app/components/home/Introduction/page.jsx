import React from 'react'
import Carousel from '@/app/components/home/Introduction/carousel/page'
import Image from 'next/image'


const page = () => {
   
  return (
    <div className='mt-5 w-100'>
        <h1 className='text-4xl font-bold'>What we Do</h1>
        <p>We are a digital innovation company that helps businessess and organizations create the future through software, data, and emerging technology.</p>
    <div>
        <Carousel/>
        <h1>hello from intro</h1>
    </div>
    
    </div>
  )
}

export default page