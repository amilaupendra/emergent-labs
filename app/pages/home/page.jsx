import React from 'react'
import Navbar from '../../components/navbar/page'
import Banner from '@/app/components/home/banner/page'
import Intro from '@/app/components/home/Introduction/page'

const homepage = () => {
  return (
    
<div className='container relative px-4 mx-auto'>
    <Navbar/>
    <Banner/>
    <Intro/>
    <h1>hello</h1>
    </div>
  )
}

export default homepage