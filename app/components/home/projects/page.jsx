import React from 'react'
import Image from 'next/image'

const projects = () => {
  return (
    <div>
      <h1 className='pt-12 pb-6 text-3xl font-bold'>Want new ideas?</h1>
        <div className="carousel rounded-box">
  <div className="p-3 carousel-item">
    <Image className='hover:scale-125' src="/cake.WEBP" width={500} height={500} alt="Burger" />
  </div>
  <div className="p-3 carousel-item">
    <Image className='hover:scale-125' src="/furniture.WEBP" width={500} height={500} alt="Burger" />
  </div> 
  <div className="p-3 carousel-item">
    <Image className='hover:scale-125' src="/craft.WEBP" width={500} height={500} alt="Burger" />
  </div> 
  <div className="p-3 carousel-item">
    <Image className='hover:scale-125' src="/portfolio.WEBP"  width={500} height={500} alt="Burger" />
  </div> 
  <div className="p-3 carousel-item">
    <Image className='hover:scale-125' src="/coffee.WEBP" width={500} height={500} alt="Burger" />
  </div> 
  <div className="p-3 carousel-item">
    <Image className='hover:scale-125' src="/crafts2.WEBP" width={500} height={500} alt="Burger" />
  </div> 
  
</div>
    </div>
  )
}

export default projects