import React from 'react'

export default function Hero() {
  return (
    <div  className='text-black relative'>
        <div>
            <img  src="/asset/hero/hero_img.jpg" alt="Hero Image" className='w-full h-[640px] object-cover' />
        </div>
        <div className=' text-white absolute top-0 left-0 w-[50%] flex flex-col justify-end  h-full ml-[80px]'>
          
            <h1 className='text-lg font-bold text-start mt-8'>Welcome to My Church</h1>
            <p className='text-start  mt-4 text-wrap text-6xl font-bold'>Join us in our journey of faith, community, and service. Together, we can make a difference.</p>    
            <button className='bg-blue-500 text-white px-6 py-3 rounded mt-6 hover:bg-blue-600 transition duration-300  w-[200px] mb-[100px]'>
start now
            </button>
            </div>
    </div>
  )
}
