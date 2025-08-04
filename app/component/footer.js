import React from 'react'

export default function Footer() {
  return (
    <div className=' items-center h-[300px] w-full bg-black text-white flex flex-row justify-between px-[40px]'>
{/* col-1 */}
        <div>
            <h1>
                my church 
            </h1>
        </div>
        {/* col-2 */}
        <div className='flex flex-row gap-[80px]'>
<div>
<p>quiklinks</p>
</div>
<div>
<p>Connect </p>
</div>
        </div>
        {/* col-3 */}
        <div>
<h1>subscrips </h1>
        </div>
    </div>
  )
}
