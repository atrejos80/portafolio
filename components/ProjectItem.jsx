import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import en from '../lang/en.json'
import es from '../lang/es.json'
import { useRouter } from 'next/router';

export default function ProjectItem({ imageIcon, linkProject, title, technologies, linkGit }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : es;


  const tecUsed = (technologiesUsed) => {
    let arr = technologiesUsed.split(',')
    return arr
  }

  const arrTec = tecUsed(technologies)


  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-5 group transition-all duration-100 ease-in bg-white hover:bg-gradient-to-r from-[#06755F] to-[#089C7E] '>
      <Image className='rounded-xl group-hover:opacity-10' src={imageIcon} alt='/' />
      <div className='hidden group-hover:block absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]  duration-100 ' >
        <div className='flex flex-col justify-center items-center w-[100%] gap-2'>
          <h3 className='text-[1.6rem] text-white font-bold text-center'>{title}</h3>
          <div className='flex my-2'>
            {arrTec.map((arrTec, index) => {
              return <p key={index} className='p-1 mx-1 text-white bg-[#2ba88fdd] rounded-lg'>{arrTec}</p>
            })}
          </div>
          <div className='flex gap-5'>
            <Link href={linkProject}>
                <div className='flex justify-center items-center px-2 bg-white rounded-lg cursor-pointer transition-all ease-out duration-200 hover:scale-110'>
                  <AiFillEye size={28} />
                  <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg'>{t.proyects.buttonView}</p>
                </div>
            </Link>
            <Link href={linkGit}>
              <div className='flex justify-center items-center px-2 bg-white rounded-lg cursor-pointer transition-all ease-out duration-200 hover:scale-110'>
                <FaGithub size={28} />
                <p className='text-center p-3 rounded-lg text-gray-700 font-bold text-lg '>{t.proyects.buttonGit}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
