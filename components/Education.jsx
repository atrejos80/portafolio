import React from 'react'
import Image from 'next/image'
import studyImg from '../public/images/studies.svg'
import en from '../lang/en.json'
import es from '../lang/es.json'
import { useRouter } from 'next/router';
import { FaCalendarAlt, FaUniversity } from 'react-icons/fa'
import { motion } from "framer-motion";

export default function Education() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : es;
    return (
        <div id='education' className='bg-[#002336] w-full'>
            <div className='max-w-[1300px] mx-auto p-10 mb-20'>
                <motion.div className='w-full text-center py-3 mb-10 '
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -40 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <p className='font-bold text-[3rem] tracking-widest uppercase text-[#09B594]'>{t.education.title}</p>
                </motion.div>

                <div className='flex justify-center items-center'>

                    <ol className="relative md:left-[14%] border-l-2 border-[#09B594] ">
                        <li
                            className="mb-10 ml-4 ">

                            <div className="absolute w-3 h-3 bg-[#09B594] rounded-full mt-1.5 -left-[1px] border border-[#002336]">
                                <span className=" absolute flex items-center justify-center w-6 h-6 bg-[#002336] rounded-full -left-3 ring-8 ring-white ">
                                    <svg aria-hidden="true" className="w-3 h-3 text-[#09B594] " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                </span>
                            </div>
                            <motion.div
                                className='relative lg:-right-5 left-5'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: -40 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >

                                <time className="mb-1 text-base font-normal leading-none text-[#ecf0f3] ">{t.education.carda2.time}</time>
                                <h3 className="text-xl font-semibold text-white ">{t.education.carda2.title_card}</h3>
                                <p className="mb-4 text-base font-normal text-[#ecf0f3]">{t.education.carda2.Institution}</p>
                            </motion.div>
                        </li>
                        <li className="mb-10 ml-4 ">
                            <div className='relative lg:right-80 lg:text-right'>
                                <div className="relative top-5 w-3 h-3 bg-[#09B594] rounded-full mt-1.5 -left-[1.5rem] lg:left-[18.9rem] border border-[#002336]">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-[#002336] rounded-full -left-3 ring-8 ring-white  ">
                                        <svg aria-hidden="true" className="w-3 h-3 text-[#09B594] " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </span>
                                </div>
                                <motion.div
                                    className='relative lg:right-16 -right-5'
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 10 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <time className="mb-1 text-base font-normal leading-none text-[#ecf0f3] ">{t.education.carda1.time}</time>
                                    <h3 className="text-xl font-semibold text-white ">{t.education.carda1.title_card}</h3>
                                    <p className="text-base font-normal text-[#ecf0f3] ">{t.education.carda1.Institution}</p>
                                </motion.div>
                            </div>
                        </li>
                        <li
                            className="mb-10 ml-4 ">

                            <div className="absolute w-3 h-3 bg-[#09B594] rounded-full mt-1.5 -left-[1px] border border-[#002336]">
                                <span className=" absolute flex items-center justify-center w-6 h-6 bg-[#002336] rounded-full -left-3 ring-8 ring-white ">
                                    <svg aria-hidden="true" className="w-3 h-3 text-[#09B594] " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                </span>
                            </div>
                            <motion.div
                                className='relative lg:-right-5 left-5'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: -40 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >

                                <time className="mb-1 text-base font-normal leading-none text-[#ecf0f3] ">{t.education.carda3.time}</time>
                                <h3 className="text-xl font-semibold text-white ">{t.education.carda3.title_card}</h3>
                                <p className="mb-4 text-base font-normal text-[#ecf0f3]">{t.education.carda3.Institution}</p>
                            </motion.div>
                        </li>
                        <li className="mb-10 ml-4 ">
                            <div className='relative lg:right-80 lg:text-right'>
                                <div className="relative top-5 w-3 h-3 bg-[#09B594] rounded-full mt-1.5 -left-[1.5rem] lg:left-[18.9rem] border border-[#002336]">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-[#002336] rounded-full -left-3 ring-8 ring-white  ">
                                        <svg aria-hidden="true" className="w-3 h-3 text-[#09B594] " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </span>
                                </div>
                                <motion.div
                                    className='relative lg:right-16 -right-5'
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 10 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <time className="mb-1 text-base font-normal leading-none text-[#ecf0f3] ">{t.education.carda4.time}</time>
                                    <h3 className="text-xl font-semibold text-white ">{t.education.carda4.title_card}</h3>
                                    <p className="text-base font-normal text-[#ecf0f3] ">{t.education.carda4.Institution}</p>
                                </motion.div>
                            </div>
                        </li>

                    </ol>

                </div>
            </div>
        </div>
    )
}
