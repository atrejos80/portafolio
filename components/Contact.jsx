import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ContactImage from '../public/images/contact.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi'
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import Swal from 'sweetalert2';
import en from '../lang/en.json'
import es from '../lang/es.json'
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import contactImg from '../public/images/contactImg.png'

export default function Contact() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : es;

    const [verified, setVerified] = useState(false)

    useEffect(() => {
        formSubmitted(verified)
    }, [verified])

    const onSubmit = async (values, actions) => {
        setVerified(true)
        // console.log(verified)
        // console.log(values)
        // console.log(actions)
        //EmailJs Section
        emailjs.send('service_ifianwe', 'template_p48t27s', values, 'JuTCPJD8FaqSMXMVo').then(() => { });
        await new Promise((resolve) => setTimeout(resolve, 1000))
        actions.resetForm()
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            email: '',
            message: ''
        },
        validationSchema: basicSchema,
        onSubmit,

    })

    const formSubmitted = () => {
        console.log(verified)
        if (verified == true) {
            if (t == 'en') {
                Swal.fire({
                    text: "I'll be in touch with you as soon as posible 👍",
                    icon: 'success',
                    iconColor: '#09B594',
                    confirmButtonColor: '#09B594',
                    confirmButtonText: 'ok'
                })
            } else {
                Swal.fire({
                    text: "Me pondré en contacto con usted lo antes posible 👍",
                    icon: 'success',
                    iconColor: '#09B594',
                    confirmButtonColor: '#09B594',
                    confirmButtonText: 'ok'
                })
            }
        }
        setVerified(false)
    }



    return (
        <div id='contact' className='w-full lg:h-full'>
            <div className='max-w-[1300px] m-auto px-2 py-16 w-full'>
                <motion.div className='w-full flex justify-center text-center gap-5 py-3 mb-10 bg-[#09B594]'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -40 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >

                    <p className='font-myFont font-bold text-4xl md:text-5xl tracking-widest  text-[#002336] uppercase'>{t.contact.title}</p>
                </motion.div>
                <div className='grid lg:grid-cols-5 gap-8'>
                    <motion.div className='col-span-3 lg:col-span-2 w-full bg-[#c8cdd0] shadow-xl shadow-gray-400  p-4'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}>
                        <div className='lg:p-4 h-full flex flex-col justify-center items-center'>
                            <div>
                                <Image src={contactImg} alt='Contact' />
                            </div>
                            <div className='text-center'>
                                <h2 className='py-1 font-myFont font-bold text-4xl text-[#002336]'>Abraham Trejos</h2>
                                <p className='font-myFont text-lg font-semibold text-[#0077B6]'>{t.contact.charge}</p>
                                <p className='font-myFont py-4 font-medium text-xl'>{t.contact.description}</p>
                            </div>
                            <div className='text-center'>
                                <p className='font-myFont text-lg font-semibold text-[#0077B6] pb-4'>{t.contact.connect}</p>
                                <div className='flex items-start justify-between max-w-[300px]'>
                                    <div className='flex justify-center items-center text-center gap-4'>
                                        <AiOutlineMail size={28} color='#0077B6' />
                                        <a className='group-hover:text-cyan-500 hover:underline' href="mailto:atrejos80@misena.edu.co">atrejos80@misena.edu.co</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                    <motion.div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400  lg:p-4 bg-[#d0d3d5]'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, y: -40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className='p-4'>

                            <form onSubmit={formik.handleSubmit} >
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2 '>
                                    <div className='flex flex-col'>
                                        <label
                                            className='uppercase font-myFont font-bold text-sm py-2 text-[#002336]'>{t.contact.name}</label>
                                        <input
                                            className={formik.errors.name && formik.touched.name ? 'border-2 rounded-lg p-3 flex border-red-600' : 'border-2 rounded-lg p-3 flex border-gray-300'}
                                            type='text'
                                            id='name'
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.name && formik.touched.name &&
                                            <p className='text-red-600 text-sm'>
                                                {formik.errors.name}
                                            </p>}
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase font-myFont font-bold text-sm py-2 text-[#002336]'>{t.contact.number}</label>
                                        <input
                                            className={formik.errors.number && formik.touched.number ? 'border-2 rounded-lg p-3 flex border-red-600' : 'border-2 rounded-lg p-3 flex border-gray-300'}
                                            maxLength='10'
                                            type='text'
                                            name='number'
                                            value={formik.values.number}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}

                                        />
                                        {formik.errors.number && formik.touched.number &&
                                            <p className='text-red-600 text-sm'>
                                                {formik.errors.number}
                                            </p>}
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase font-myFont font-bold text-sm py-2 text-[#002336]'>{t.contact.email}</label>
                                    <input
                                        className={formik.errors.email && formik.touched.email ? 'border-2 rounded-lg p-3 flex border-red-600' : 'border-2 rounded-lg p-3 flex border-gray-300'}
                                        type='text'
                                        name='email'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.email && formik.touched.email &&
                                        <p className='text-red-600 text-sm'>
                                            {formik.errors.email}
                                        </p>}
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase font-myFont font-bold text-sm py-2 text-[#002336]'>{t.contact.message}</label>
                                    <textarea
                                        className={formik.errors.message && formik.touched.message ? 'border-2 rounded-lg p-3 flex border-red-600' : 'border-2 rounded-lg p-3 flex border-gray-300'}
                                        type='text'
                                        rows='8'
                                        name='message'
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.message && formik.touched.message &&
                                        <p className='text-red-600 text-sm'>
                                            {formik.errors.message}
                                        </p>}
                                </div>
                                <button
                                    type='submit'
                                    onClick={() => formSubmitted()}
                                    className="w-full px-5 py-2.5 relative rounded-xl group overflow-hidden font-medium bg-[#09B594] text-[#002336] inline-block">
                                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#002336] group-hover:h-full opacity-90"></span>
                                    <span className="flex gap-3 justify-center relative group-hover:text-white uppercase font-bold"> {t.contact.sendMessage} <FiSend size={22} /> </span>
                                </button>

                            </form>

                        </div>
                    </motion.div>
                </div>
                <div className='flex justify-center items-center py-12'>
                    <Link href='/'>
                        <a>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 hover:bg-[#39D08A] first-letter:ease-in duration-200'>
                                <HiOutlineChevronDoubleUp className='text-[#002336]' size={30} />
                            </div>
                        </a>
                    </Link>
                </div>
            </div>

        </div>
    )
}
