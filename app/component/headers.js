import React from 'react'

export default function Headers() {
  return (
    <div className='flex flex-row px-[40px] bg-black py-[10px] justify-between  items-center  shadow-md  w-full'>
      <div className='flex flex-wrap justify-between items-center '>
        <h1 className='text-3xl font-bold text-center p-4'>My Church</h1>
      <div className='flex gap-10 list-none  flex-row justify-between items-center ml-[100px] p-4 bg-gray-800 text-white'>
        <li  className='hover:text-green-700 '>
          <a href="/">Home</a>
        </li>
        <li className='hover:text-green-700 '>
          <a href="/about">About</a>
        </li>
        <li className='hover:text-green-700 '>
          <a href="/contact">Contact</a>
        </li>
        <li className='hover:text-green-700 '>
          <a href="/blog">Blog</a>
        </li>
      </div>
      </div>
<div className=''>
  <button className='bg-blue-500 text-white px-4 py-2 rounded'>Contact Us!</button>
</div>
    </div>
  )
}
