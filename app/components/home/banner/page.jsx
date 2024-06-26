import React from 'react'
import Image from 'next/image'
import Banner from '../../../../public/banner.jpg'
import Link from 'next/link'


const banner = () => {
  return (
    <div className=' text-white flex bg-no-repeat flex-col  items-center h-[60vh]  bg-center bg-cover  text-center w-100 md:h-[50vh] ' style={{backgroundImage: `url(${Banner.src})`}}>  
    <div className="flex flex-col justify-center w-full h-auto">
        <span className='mt-20 text-3xl font-bold m md:text-6xl'>Building the Future of Software</span>
        <p className='mt-10 '>we are technology compnay that builds software products and services.our mission is to create the future of
           technology and make it accessible to everyone</p>
      </div>
      {/* <Link href="/pages/learnmore"><button className=" btn btn-warning w-[150px] mt-4">Learn more</button></Link> */}
      <Link href="/components/promotions/freesite"> <button className=" btn btn-warning w-[150px] mt-4">Request free web site </button> </Link>

    </div>
  )
}

export default banner