import React from 'react'
import Image from 'next/image';
import Cardexp from './Cardexp'
import univalle from '../public/images/univalle.jpg'
import en from '../lang/en.json'
import es from '../lang/es.json'
import { useRouter } from 'next/router';
import { motion } from "framer-motion";

export default function Experience() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : es;
    return (
        <div id='experience' className='w-full'>
            <div className='max-w-[1300px] mx-auto px-2 mb-20'>
                <motion.div className='w-full text-center py-3 mb-10 rounded-lg'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -40 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <p className='font-myFont font-bold text-[3rem] tracking-widest uppercase text-[#09B594]'>{t.experience.title}</p>
                </motion.div>
                <motion.div className='flex flex-col md:flex-row justify-center items-center gap-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    style={{ flexWrap: 'wrap' }} // Add this style
                >
                    <div className="flex-grow p-[2em] w-[90%] md:w-[30%] h-auto m-12 bg-[#002336] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 ">
                        <h4 className="py-2 text-[#09B594] font-bold text-center">{t.experience.card2.charge}</h4>
                        <h4 className="py-2 text-white text-center">{t.experience.card2.date}</h4>
                        <p className="text-base leading-7 text-white font-semibold space-y-4 text-center">{t.experience.card2.location}</p>
                        <p className="text-base leading-7 text-white font-semibold space-y-4 text-center">{t.experience.card2.company}</p>
                        <p className="max-w-md text-sm leading-7 text-slate-300 space-y-4 text-center">{t.experience.card2.taksMessage}</p>
                    </div>
                    <div className="flex-grow p-[2em] w-[90%] md:w-[30%] h-auto m-12 bg-[#002336] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 ">
                        <h4 className="py-2 text-[#09B594] font-bold text-center">{t.experience.card1.charge}</h4>
                        <h4 className="py-2 text-white text-center">{t.experience.card1.date}</h4>
                        <p className="text-base leading-7 text-white font-semibold space-y-4 text-center">{t.experience.card1.location}</p>
                        <p className="text-base leading-7 text-white font-semibold space-y-4 text-center">{t.experience.card1.company}</p>
                        <p className="text-sm leading-7 text-slate-300 space-y-4 text-center">{t.experience.card1.taksMessage}</p>
                    </div>
                    <div className="flex-grow p-[2em] w-[90%] md:w-[30%] h-auto m-12 bg-[#002336] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 ">
                        <h4 className="py-2 text-[#09B594] font-bold text-center">{t.experience.card3.charge}</h4>
                        <h4 className="py-2 text-white text-center">{t.experience.card3.date}</h4>
                        <p className="text-base leading-7 text-white font-semibold space-y-4 text-center">{t.experience.card3.location}</p>
                        <p className="text-base leading-7 text-white font-semibold space-y-4 text-center">{t.experience.card3.company}</p>
                        <p className="text-sm leading-7 text-slate-300 space-y-4 text-center">{t.experience.card3.taksMessage}</p>
                    </div>
                    <div className="flex-grow p-[2em] w-[90%] md:w-[30%] h-auto m-12 bg-[#002336] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 ">
                        <h4 className="py-2 text-[#09B594] font-bold text-center">{t.experience.card4.charge}</h4>
                        <h4 className="py-2 text-white text-center">{t.experience.card4.date}</h4>
                        <p className="text-base leading-7 text-white font-semibold space-y-4 text-center">{t.experience.card4.location}</p>
                        <p className="text-base leading-7 text-white font-semibold space-y-4 text-center">{t.experience.card4.company}</p>
                        <p className="text-sm leading-7 text-slate-300 space-y-4 text-center">{t.experience.card4.taksMessage}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
