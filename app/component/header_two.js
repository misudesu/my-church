import Link from 'next/link'
import React from 'react'

export default function Header_two() {
  return (
    <div className=' pl-[40px] pr-[40px] flex flex-row justify-between items-center text-white h-[80px] w-full bg-black'>
        {/* text */}
       <div className='flex flex-row gap-[80px] list-none'>
<h1>
    my church 
</h1>

 {/* nav */}
       <div className='flex flex-row gap-[40px]'>
        <Link href="/home">
<li>
Home
</li>
</Link>

<li>
About us
</li>
<li>
Sermon
</li>
<li>
    Blog
</li>
       </div>
       </div>
      
       {/* contact us  */}
       <div>
<button className='bg-red-200 h-[50px] w-[150px] rounded-[10px]'> Contact Us!</button>
       </div>
    </div>
  )
}
