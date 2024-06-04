import React from 'react'
import imageMain from '../public/images/Me.png';
import Image from 'next/image';
import Link from 'next/link';
import DropDownCV from './DropdownCV';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion"
import en from '../lang/en.json'
import es from '../lang/es.json'
import { useRouter } from 'next/router';




export default function Main() {

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : es;


    return (
        <div id='home' className='w-full flex items-center justify-center text-center py-[8rem] relative'>
            <div className='mt-2 max-w-[1240px] w-full h-full mx-auto lg:flex gap-20 justify-center items-center px-10 '>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -40 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className='w-full text-center lg:text-left'>
                    <p className='font-title uppercase text-5xl  tracking-widest text-[#09B594]'>{t.main.title}</p>
                    <h1 className='font-sans text-4xl py-4 text-gray-700'>{t.main.subtitle} <span className='text-[#00659C]'>Abraham Trejos</span></h1>
                    <p className='text-lg md:text-2xl py-4 text-gray-700'>{t.main.Intro}</p>
                    <h1 className='font-sans text-4xl py-10  text-[#00659C]'>{t.main.message}</h1>
                    <div className='hidden lg:flex items-start justify-between max-w-[300px]'>
                        <Link href='https://www.linkedin.com/in/abraham-trejos-victoria-44b219227/'>
                            <a target="_blank">
                                <div className='bg-white text-[#0077B6] rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer  hover:scale-x-105 hover:bg-[#0077B6] hover:text-white ease-in duration-200'>
                                    <FaLinkedinIn size={20} />
                                </div>
                            </a>
                        </Link>
                        <Link href='https://github.com/atrejos80'>
                            <a target="_blank">
                                <div className='bg-white text-[#0077B6] rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer  hover:scale-x-105 hover:bg-[#0077B6] hover:text-white ease-in duration-200'>
                                    <FaGithub size={20} />
                                </div>
                            </a>
                        </Link>
                        <a href="mailto:atrejos80@misena.edu.co">
                            <div className='bg-white text-[#0077B6] rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer  hover:scale-x-105 hover:bg-[#0077B6] hover:text-white ease-in duration-200'>
                                <AiOutlineMail size={20} />
                            </div>
                        </a>
                    </div>
                    <div className='grid justify-center lg:justify-start items-center pb-32 lg:py-0 relative ease-out'>
                        <DropDownCV />
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className='w-full items-center relative'>
                    <div className='w-[95%] h-[90%] object-cover z-1 overflow-hidden rounded-xl'>
                        <Image src={imageMain} alt='Image of Abraham Trejos' />
                    </div>
                </motion.div>
            </div>

        </div>
    )
}
