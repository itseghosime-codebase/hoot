import React from 'react';
import CoinLabel from '../assets/coin_label.png'
import { FaBarsStaggered, FaDiscord, FaTwitter } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import MobileLogo from './../assets/mobile-logo.png';
import { RiTelegram2Fill } from 'react-icons/ri';

export default function Navbar() {
    const [clicked, setClicked] = React.useState(true);
    const changeToggle = () => {
        setClicked(!clicked);
    };

    return (
        <header className='fixed z-40 top-0 md:top-10 inset-x-0 flex items-center md:justify-center'>
            <nav className="max-w-3xl w-full md:bg-white/20 md:py-2 md:px-4 md:backdrop-blur-xl md:rounded-full md:flex items-center justify-between">
                <div className='flex items-center justify-between py-4 md:py-0 bg-[#008CF4] md:bg-transparent px-6 md:px-0 relative z-10'>
                    <a href="#" className='md:hidden'>
                        <img src={MobileLogo} alt="Coin"
                            className='w-auto h-12' />
                    </a>
                    <a href="#" className='hidden md:block'>
                            <img src={CoinLabel} alt="Coin"
                                className='h-7 w-auto md:h-14' />
                        </a>
                    <button
                    className='md:hidden'
                        onClick={changeToggle}
                    >
                        {!clicked ? <IoClose className="text-2xl" /> :
                            <FaBarsStaggered className="text-xl" />}
                    </button>
                </div>
                <ul className={`flex flex-col md:flex-row fixed transition-all ease-in-out duration-500 ${clicked
                    ? "-translate-x-[100vh] md:translate-x-0"
                    : "translate-x-0"
                    } top-0 left-0 -z-0 w-screen items-center justify-center gap-10 h-screen bg-[#008CF4] md:relative md:bg-transparent md:w-auto md:h-auto`}>
                    <li>
                        <a href="#about" onClick={changeToggle}>
                            <span className='text-4xl md:text-lg text-[#162936]'>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#htb" onClick={changeToggle}>
                            <span className='text-4xl md:text-lg text-[#162936]'>How to buy</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={changeToggle}>
                            <span className='text-4xl md:text-lg text-[#162936]'>Gallery</span>
                        </a>
                    </li>
                    <li>
                        <a href="#socials" onClick={changeToggle}>
                            <span className='text-4xl md:text-lg text-[#162936]'>Socials</span>
                        </a>
                    </li>
                    <div className='flex items-center gap-4 lg:gap-2 md:hidden'>
                    <a href="https://x.com/Hootsol_" className='flex items-center bg-[#F89C2E] border border-white p-2 justify-center rounded-full'>
                        <FaTwitter className='text-xl text-white' />
                    </a>
                    <a href="https://t.me/hootsol" className='flex items-center bg-[#F89C2E] border border-white p-2 justify-center rounded-full'>
                        <RiTelegram2Fill className='text-xl text-white' />
                    </a>
                    <a href="" className='flex items-center bg-[#F89C2E] border border-white p-2 justify-center rounded-full'>
                        <FaDiscord className='text-xl text-white' />
                    </a>
                </div>
                </ul>

                <div className='items-center gap-4 lg:gap-2 hidden md:flex'>
                    <a href="https://x.com/Hootsol_" className='flex items-center bg-[#F89C2E] border border-white p-2 justify-center rounded-full'>
                        <FaTwitter className='text-xl text-white' />
                    </a>
                    <a href="https://t.me/hootsol" className='flex items-center bg-[#F89C2E] border border-white p-2 justify-center rounded-full'>
                        <RiTelegram2Fill className='text-xl text-white' />
                    </a>
                    <a href="" className='flex items-center bg-[#F89C2E] border border-white p-2 justify-center rounded-full'>
                        <FaDiscord className='text-xl text-white' />
                    </a>
                </div>
            </nav>
        </header>
    )
}
