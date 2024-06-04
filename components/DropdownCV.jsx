import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaFileDownload } from 'react-icons/fa';
import en from '../lang/en.json'
import es from '../lang/es.json'
import { useRouter } from "next/router"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropDownCV() {

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : es;

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    className="mt-8 px-5 py-2.5 relative rounded-2xl group overflow-hidden font-medium bg-[#09B594] text-[#fff] inline-block focus:bg-[#002336]">
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#002336] group-hover:h-full opacity-90"></span>
                    <span className=" flex gap-3 relative group-hover:text-white uppercase font-bold"><FaFileDownload size={20} color='#fff' /> {t.main.button_cv}</span>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-5 z-10 mt-2 w-[80%] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    download='Abraham_Trejos'
                                    href='hojadevida.pdf'
                                    className={classNames(
                                        active ? 'uppercase block px-4 py-2 cursor-pointer text-[#089C7E] hover:bg-[#089C7E] hover:text-white ease-in duration-75' : 'text-gray-700',
                                        'uppercase block px-4 py-2 text-sm'
                                    )}
                                >
                                    {t.main.OptionEs}
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    download='Abraham_Trejos_CV'
                                    href='CV.pdf'
                                    className={classNames(
                                        active ? 'uppercase block px-4 py-2 cursor-pointer text-[#089C7E] hover:bg-[#089C7E] hover:text-white ease-in duration-75' : 'text-gray-700',
                                        ' uppercase block px-4 py-2 text-sm'
                                    )}
                                >
                                    {t.main.OptionEn}
                                </a>
                            )}
                        </Menu.Item>

                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
