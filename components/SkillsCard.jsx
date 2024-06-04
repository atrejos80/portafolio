import React from 'react'
import Image from 'next/image'

export default function SkillsCard({image, title}) {
  return (
    <div className='w-[30%] md:w-auto p-6 my-2  hover:scale-105 ease-in duration-300 '>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center'>
        <div className='m-auto'>
            <Image 
            src={image} 
            width='55px' 
            height='55px' 
            alt='/' 
            />
        </div>
        <div className='hidden md:flex flex-col items-center justify-center'>
            <h3 className='uppercase text-white'>{title}</h3>
        </div>
    </div>
</div>
  )
}
