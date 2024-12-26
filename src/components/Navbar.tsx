import React from 'react';
import CoinLabel from '../assets/coin_label.png'
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

export default function Navbar() {
    const [clicked, setClicked] = React.useState(true);
    const changeToggle = () => {
        setClicked(!clicked);
    };

    return (
        <header className='fixed z-40 top-0 md:top-10 inset-x-0 flex items-center md:justify-center'>
            <nav className="max-w-2xl w-full md:bg-white/20 md:py-2 md:px-16 md:backdrop-blur-xl md:rounded-full">
                <div className='md:hidden flex items-center justify-between py-4 bg-[#008CF4] px-6 relative z-10'>
                    <a href="#">
                        <img src={CoinLabel} alt="Coin"
                            className='w-auto h-12' />
                    </a>
                    <button
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
                        <a href="#" onClick={changeToggle}>
                            <span className='text-4xl md:text-lg text-[#162936]'>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={changeToggle}>
                            <span className='text-4xl md:text-lg text-[#162936]'>How to buy</span>
                        </a>
                    </li>
                    <li className='hidden md:block'>
                        <a href="#">
                            <img src={CoinLabel} alt="Coin"
                                className='h-7 w-auto md:h-14 cloud-nine' />
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={changeToggle}>
                            <span className='text-4xl md:text-lg text-[#162936]'>Gallery</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={changeToggle}>
                            <span className='text-4xl md:text-lg text-[#162936]'>Socials</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
