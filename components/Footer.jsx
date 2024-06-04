import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import colombia from '../public/images/colombia.png';
import en from '../lang/en.json'
import es from '../lang/es.json'
import {useRouter} from 'next/router';


export default function Footer() {
    const router = useRouter();
	const {locale} = router;
	const t = locale === 'en' ? en : es;
    return (
        <div className='w-full md:h-[220px] h-[500px] py-10 bg-[#002336]'>
            <div className='flex flex-col md:flex-row text-center md:justify-around justify-center gap-10'>
                <div>
                    <p className='text-[#09B594] pb-1 text-[1.2rem]'>{t.footer.socials}</p>
                    <div className='flex gap-10 justify-center'>

                        <Link href='https://www.linkedin.com/in/abraham-trejos-victoria-44b219227/'>
                            <a target="_blank">
                                <FaLinkedinIn size={30} color={'#fff'} className='cursor-pointer' />
                            </a>
                        </Link>

                        <Link href='https://github.com/atrejos80'>
                            <a target="_blank">
                                <FaGithub size={30} color={'#fff'} className='cursor-pointer' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div>
                    <p className='text-[#09B594] pb-1 text-[1.2rem]'>{t.footer.email}</p>
                    <div className='flex gap-2 justify-center'>
                        <AiOutlineMail size={25} color='#fff' />
                        <a className='group-hover:text-cyan-500 text-white hover:underline' href="mailto:atrejos80@misena.edu.co">atrejos80@misena.edu.co</a>
                    </div>
                </div>
                {/* <div>
                    <p className='text-[#09B594] pb-1 text-[1.2rem]'>{t.contact.</p>
                    <div className='flex justify-center gap-2'>
                        <Image src={colombia} alt='colombia image' />
                        <p className='text-white'>Colombian</p>
                    </div>
                </div> */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-center pt-11 text-gray-400 text-sm pb-8 ">
                <span>© 2020 Appy. All rights reserved.</span>
                <span>Terms · Privacy Policy</span>
            </div>
        </div>
    )
}
