import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { TbLanguage } from 'react-icons/tb';
import { useRouter } from "next/router"
import Toggle from './Toggle';
import en from '../lang/en.json'
import es from '../lang/es.json'


export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    // const [activeLink, setActiveLink] = useState('#home')
    // console.log(activeLink)
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : es;
    //console.log(router)
    const handNav = () => {
        setNav(!nav);
    }

    const changeLog = (e) => {
        // console.log(e.target.value);
        router.push(router.pathname, router.pathname, {
            locale: e.target.value
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop
        // setActiveLink(target)

        window.scrollTo({
            left: 0,
            top: location - 64,
        })
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[1000] bg-[#002336] text-white transition ease-in-out' : 'fixed w-full h-20 z-[1000]'}>
            <div className='flex xs:justify-end sm:justify-end lg:justify-center items-center w-full h-full px-2 2xl:px-16'>
                <div>
                    <ul className='font-myFont font-bold hidden lg:flex  gap-20'>

                        < div className='flex justify-center items-center'>

                            <a className='uppercase mx-[42px] hover:text-[#09B594] ' href='#home' onClick={handleClick}>
                                {t.navbar.home}
                            </a>
                            <a className='uppercase mx-[42px] hover:text-[#09B594] ' href='#education' onClick={handleClick}>
                                {t.education.title}
                            </a>
                            <a className='uppercase mx-[42px] hover:text-[#09B594] ' href='#experience' onClick={handleClick}>
                                {t.experience.title}
                            </a>
                            <a className='uppercase mx-[42px] hover:text-[#09B594] ' href='#skills' onClick={handleClick}>
                                {t.skills.title}
                            </a>
                            <a className='uppercase mx-[42px] hover:text-[#09B594] ' href='#projects' onClick={handleClick}>
                                {t.proyects.title}
                            </a>
                            <a className='uppercase mx-[42px] hover:text-[#09B594] ' href='#contact' onClick={handleClick}>
                                {t.navbar.contact}
                            </a>

                            <DropdownLan />

                        </div>


                    </ul>
                    <div onClick={handNav} className='lg:hidden  '>
                        <AiOutlineMenu size={30} />
                    </div>
                </div>
            </div >
            <div className={nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] lg:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500'}>
                    <div className='flex w-full justify-end'>
                        <div onClick={handNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose className='text-[#002336]' size={25} />
                        </div>
                    </div>
                    <div className=' flex flex-col'>
                        <ul className='items-start my-5 uppercase text-[#002336]'>
                            <div className='flex flex-col justify-start text-start items-start gap-9'>
                                <a className='uppercase  hover:text-[#09B594]' href='#home' onClick={handleClick}>
                                    {t.navbar.home}
                                </a>
                                <a className='uppercase  hover:text-[#09B594]' href='#education' onClick={handleClick}>
                                    {t.education.title}
                                </a>
                                <a className='uppercase  hover:text-[#09B594]' href='#experience' onClick={handleClick}>
                                    {t.experience.title}
                                </a>
                                <a className='uppercase  hover:text-[#09B594]' href='#skills' onClick={handleClick}>
                                    {t.skills.title}
                                </a>
                                <a className='uppercase  hover:text-[#09B594]' href='#projects' onClick={handleClick}>
                                    {t.proyects.title}
                                </a>
                                <a className='uppercase  hover:text-[#09B594]' href='#contact' onClick={handleClick}>
                                    {t.navbar.contact}
                                </a>
                                <Toggle />
                            </div>
                        </ul>
                        <div className='pt-10'>
                            <p className='uppercase text-center tracking-widest text-[#09B594]'> {t.contact.connect} </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <Link href='https://www.linkedin.com/in/abraham-trejos-victoria-44b219227/'>
                                    <div className='text-[#002336] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                        <FaLinkedinIn />
                                    </div>
                                </Link>
                                <a href="mailto:atrejos80@misena.edu.co">
                                    <div className='text-[#002336] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                        <AiOutlineMail />
                                    </div>
                                </a>
                                <Link href='https://github.com/atrejos80'>
                                    <div className='text-[#002336] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                        <FaGithub />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

const DropdownLan = () => {
    const [isOpen, setOpen] = useState(false)
    const [shadow, setShadow] = useState(false);
    const router = useRouter();

    const changeLog = (e) => {
        //console.log(e.target.value);
        router.push(router.pathname, router.pathname, {
            locale: e.target.value
        })
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])
    const menuRefEs = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRefEs.current.contains(e.target)) {
                setOpen(false)
                //console.log(menuRefEs.current)
            }

        }

        document.addEventListener("mousedown", handler)
    })



    return (
        <div className={shadow ? '  text-white mx-2 flex justify-center lg:justify-start items-center pb-32 lg:py-0 relative ease-out hover:text-[#09B594]' : 'text-[#002336] mx-2 flex justify-center lg:justify-start items-center pb-32 lg:py-0 relative ease-out hover:text-[#09B594]'}>
            <div className='flex gap-2 items-center cursor-pointer hover:text-[#09B594]'>

                <a onClick={() => setOpen(!isOpen)} className={shadow ? '  uppercase flex' : ' uppercase flex'}><TbLanguage  size={30} />Lang</a>
        
            </div>
            <div ref={menuRefEs} className={isOpen ? 'flex flex-col justify-center m-auto mt-2 lg:m-2 w-12 py-2 uppercase text-sm bg-white rounded-lg shadow-2xl absolute left-0 right-0 lg:left-0 top-[2rem]'
                : 'hidden ease-out'}>
                <button
                    value='es'
                    onClick={changeLog}
                    className=' uppercase block p-2 cursor-pointer text-[#089C7E] hover:bg-[#089C7E] hover:text-white ease-in duration-75'
                >
                    Es
                </button>
                <button
                    value='en'
                    onClick={changeLog}
                    className=' uppercase block p-2 cursor-pointer text-[#089C7E] hover:bg-[#089C7E] hover:text-white ease-in duration-75'
                >
                    EN
                </button>
            </div>
        </div>
    );
};
