import React from 'react'
import Image from 'next/image'
import en from '../lang/en.json'
import es from '../lang/es.json'
import { useRouter } from 'next/router';


export default function Cardexp({charge, company, tasks ,date, location, logo}) {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : es;
    return (
        <div className='bg-[#ffffff] flex justify-center items-center gap-16 p-6  shadow-xl shadow-gray-400 hover:scale-105 ease-in duration-300'>
            <div className='flex flex-col gap-1  text-gray-700'>
                <div className='flex flex-col mb-2 text-md md:text-xl font-semibold'>
                    <p className='uppercase text-[#24a48b]'> {charge} </p>
                </div>
                <div className='flex flex-col mb-2 text-base md:text-base'>
                    <p className=''>{company}</p>
                </div>
                <div className='flex flex-col  text-base md:text-base'>
                    <p className='font-semibold text-[#24a48b]'>{t.experience.card1.task}</p>
                </div>
                <div className='max-w-sm flex flex-col mb-2 text-base md:text-base'>
                    <p className=''>{tasks}</p>
                </div>
                <div className='flex flex-col mb-2 text-base'>
                    <p className=''>{date}</p>
                    <p className=''>{location}</p>
                </div>
            </div>
            <div className='max-w-[100px] mx-h-[150px]'>
                <Image src={logo} layout='intrinsic' alt='' width={210} height={310} />
            </div>
        </div>
    )
}
