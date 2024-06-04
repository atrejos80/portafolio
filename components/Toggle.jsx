import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router"
import usa from '../public/images/usa.png'
import colombia from '../public/images/colombia.png'
import Image from "next/image";
import en from '../lang/en.json'
import es from '../lang/es.json'

function Toggle() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : es;
    const [toggle, setToggle] = useState(locale);
    const toggleClass = " transform translate-x-5";

    const changeLogEs = (e) => {
        router.push(router.pathname, router.pathname, {
            locale: 'es'
        })
    }

    const changeLogEn = (e) => {
        router.push(router.pathname, router.pathname, {
            locale: 'en'
        })
    }



    return (
        <div className="flex gap-2">
            <p className="uppercase font-semibold text-[#24a48b]">{t.navbar.lang}</p>
            <div className="flex gap-5">
                <button className="flex gap-2 uppercase" value='es' onClick={changeLogEs}>
                    es
                    <Image src={colombia} alt='' />
                </button>
                <button className="flex gap-2 uppercase" value='en' onClick={changeLogEn}>
                    en
                    <Image src={usa} alt='' />
                </button>
            </div>
            {/* <p className="mx-2 uppercase">en</p>
                <div
                    className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-[#a2dfd2] rounded-full p-1 cursor-pointer"
                    onClick={changeLog}>

                    <div
                        className={
                            "bg-[#15a185] md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                            (toggle == 'es' ? toggleClass : 'transform translate-x')
                        }
                    >
                    </div>
                </div>
                <p className="mx-2 uppercase">es</p> */}
        </div>
    );
}

export default Toggle;
