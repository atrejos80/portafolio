import React from 'react'
import MrLocksmith from '../public/images/MrLocksmith.jpg';
import Mkaly from '../public/images/Mkaly.jpg';
import TaskList from '../public/images/tasklist.jpg'
import VinkgrSaga from '../public/images/VinkgrSaga.png'
import Portafolio from '../public/images/portafolio.png'
import ProjectItem from './ProjectItem';
import { FaGithub } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import en from '../lang/en.json'
import es from '../lang/es.json'
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};


const Project = ({ imageIcon, title, technologies, linkProject, linkGit }) => {
    const tecUsed = (technologiesUsed) => {
        let arr = technologiesUsed.split(',')
        return arr
    }

    const arrTec = tecUsed(technologies)

    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 bg-[#09B594] transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;


    return (
        <motion.div variants={projectVariant} className="relative ">
            <div className={overlayStyles}>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-[1.6rem] text-white font-bold text-center'>{title}</p>
                    <div className='flex my-2'>
                        {arrTec.map((arrTec, index) => {
                            return <p key={index} className='p-1 mx-1 text-white bg-[#2ba88fdd] '>{arrTec}</p>
                        })}
                    </div>
                    <div className='flex gap-5'>
                        <Link href={linkProject}>
                            <a target="_blank">
                                <div className='flex justify-center items-center p-2 bg-white rounded-full cursor-pointer transition-all ease-out duration-200 hover:scale-110'>
                                    <AiFillEye size={28} />

                                </div>
                            </a>
                        </Link>
                        <Link href={linkGit}>
                            <a target="_blank">
                                <div className='flex justify-center items-center p-2 bg-white rounded-full cursor-pointer transition-all ease-out duration-200 hover:scale-110'>
                                    <FaGithub size={28} />

                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <Image src={imageIcon} alt={title} width={400} height={200} />
        </motion.div>
    );
};


export default function Proyects() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : es;
    return (
        <section id="projects" className=" my-32">
            {/* HEADINGS */}

            <motion.div
                className='max-w-[1300px] flex justify-center mx-auto px-1'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -40 },
                    visible: { opacity: 1, y: 0 },
                }}
            >

                <div className='w-[100%] text-center py-3 mb-10 rounded-lg'>
                    <p className='font-title md:text-[5rem] text-[2.8rem] tracking-widest uppercase text-[#3abca2]'>{t.proyects.title}</p>
                </div>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="max-w-[1300px] grid lg:grid-cols-3 grid-flow-row gap-2 p-10"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* ROW 1 */}

                    <Project
                        imageIcon={MrLocksmith}
                        title="Mr. Locksmith"
                        technologies='ReactJS,Sass'
                        linkProject='https://mrlocksmithutah.com/'
                        linkGit='https://github.com/atrejos80/Mr.Locksmith'
                    />
                    <Project
                        imageIcon={Mkaly}
                        title='Mkaly'
                        technologies='NextJS ,DJango,Tailwind,MaterialUI'
                        linkProject='https://mkaly.vercel.app/'
                        linkGit='https://github.com/andrew921as/Mkaly' />

                    <Project
                        imageIcon={TaskList}
                        title='Task list'
                        technologies='PostgresSQL,Express,React,NodeJS'
                        linkProject='https://task-list-bay-eight.vercel.app/'
                        linkGit='https://github.com/atrejos80/TaskList' />

                    <Project
                        imageIcon={VinkgrSaga}
                        title='Vikingr Saga'
                        technologies='MERN stack, React Three Fiber'
                        linkProject='https://vikingr-saga.vercel.app/'
                        linkGit='https://github.com/camyj2010/Vikingr-Saga' />

                    <Project
                        imageIcon={Portafolio}
                        title='Portafolio'
                        technologies='NextJs'
                        linkProject='https://carloscacerescampo.vercel.app/'
                        linkGit='https://github.com/atrejos80/portafolio' />



                    {/* <Project title="Project 2" /> */}

                    {/* ROW 2 */}
                    {/* <Project title="Project 3" />
                    <Project title="Project 4" />
                    <Project title="Project 5" /> */}

                    {/* ROW 3 */}
                    {/* <Project title="Project 6" />
                    <Project title="Project 7" /> */}


                </motion.div>
            </div>
        </section>
        // <div id='projects' className=' w-full'>
        //   <div className='max-w-[1240px] mx-auto px-2 py-40'>
        //     <div className='w-full bg-[#002336] text-center py-3 mb-10 rounded-lg'>
        //       <p className='font-myFont font-bold text-4xl tracking-widest uppercase text-[#09B594]'>{t.proyects.title}</p>
        //     </div>

        //     <div className='grid md:grid-cols-2 gap-8'>
        //         <Project title='test'/>
        //       {/* <ProjectItem
        //         imageIcon={MrLocksmith}
        //         title='Mr Locksmith Website'
        //         technologies='ReactJS,Sass'
        //         linkProject='https://mrlocksmithutah.com/'
        //         linkGit='https://github.com/atrejos80/Mr.Locksmith' />

        //       <ProjectItem
        //         imageIcon={Mkaly}
        //         title='Mkaly'
        //         technologies='NextJS ,DJango,Tailwind,MaterialUI'
        //         linkProject='https://mkaly.vercel.app/'
        //         linkGit='https://github.com/andrew921as/Mkaly' />

        //       <ProjectItem
        //         imageIcon={TaskList}
        //         title='Task list'
        //         technologies='PostgresSQL,Express,React,NodeJS'
        //         linkProject='https://task-list-bay-eight.vercel.app/'
        //         linkGit='https://github.com/atrejos80/TaskList' /> */}
        //     </div>
        //   </div>
        // </div>
    )
}
