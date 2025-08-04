import React from 'react'

export default function Home_landing() {
  return (
    <div className='text-black relative'>
<div>
        {/* image */}
    <img src="/asset/hero/hero_img.jpg" alt="Church Image" className='w-full h-[650px] object-cover'  />
{/* text */}
<div className='absolute bottom-0 mb-[100px] px-[40px] left-0 text-white'>
<h1 className='text-[20px]'>
welcom eto our church
</h1>
<p className='text-[90px] font-bold'>you wante to join us!</p>
<button className='bg-red-300 text-white px-4 py-2 rounded'>connect us!</button>
</div>

</div>

    </div>
  )
}
