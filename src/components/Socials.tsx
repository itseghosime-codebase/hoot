import HeadingTitle from '../assets/GET YOUR $SOLS READY.svg'
import TrafficRight from './../assets/traffic-right.png';
import TrafficLeft from './../assets/traffic-left.png';
import Raydium from '../assets/Raydium.png'
import Pump from '../assets/pump.png'
import { FaDiscord, FaTwitter } from 'react-icons/fa6';
import { RiTelegram2Fill } from 'react-icons/ri';

export default function Socials() {
    return (
        <section className='px-6 md:px-12 lg:px-20 py-20' id='socials'>
            <div className="md:bg-[#7EC7FD] md:p-10 xl:p-14 xl:pb-0 md:pb-0 md:border-4 border-black rounded-[40px]">
                <div className="bg-[#0089EE] p-8 border-4 border-black rounded-[45px] flex flex-col items-center justify-center gap-4">
                    <img src={HeadingTitle} alt="GET YOUR $SOLS READY" className='max-h-14' />
                    <p className='max-w-3xl text-base text-center'>Be part of the adventure. By holding Hoot, you’re not just joining a community,
                        you’re becoming a guardian of the stars.</p>
                    <div className='mt-12 mb-5 w-full'>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-end">
                            <div className='hidden md:block'>
                                <img src={TrafficRight} alt="Bird Guard" className='cloud-nine' />
                            </div>
                            <div className="flex justify-center">
                            <div className='flex flex-col gap-3 -rotate-2 max-w-[300px] w-full '>
                                {
                                    [{
                                        icon: Raydium,
                                        label: 'Raydium'
                                    }, {
                                        icon: Pump,
                                        label: 'Pump.Fun'
                                    }].map((items, index) => (
                                        <a href="" key={index}>
                                            <div className='flex items-center gap-3 xl:gap-5 w-full bg-[#7EC7FD] border-4 border-[#162936] py-4 justify-center rounded-2xl xl:rounded-3xl'>
                                                <img src={items.icon} alt={items.label} className='h-7 w-7 xl:h-11 xl:w-11 object-center justify-center' />
                                                <h5 className='text-xl xl:text-3xl text-[#162936] font-medium'>{items.label}</h5>
                                            </div>
                                        </a>
                                    ))
                                }
                                <div className='flex items-center justify-between gap-4 lg:gap-2'>
                                    <a href="https://x.com/Hootsol_" className='flex items-center gap-5 bg-[#7EC7FD] border-4 border-[#162936] p-4 justify-center rounded-2xl'>
                                        <FaTwitter className='text-3xl text-[#162936]' />
                                    </a>
                                    <a href="https://t.me/hootsol" className='flex items-center gap-5 bg-[#7EC7FD] border-4 border-[#162936] p-4 justify-center rounded-2xl'>
                                        <RiTelegram2Fill className='text-3xl text-[#162936]' />
                                    </a>
                                    <a href="" className='flex items-center gap-5 bg-[#7EC7FD] border-4 border-[#162936] p-4 justify-center rounded-2xl'>
                                        <FaDiscord className='text-3xl text-[#162936]' />
                                    </a>
                                </div>
                            </div>
                            </div>
                            <div className='hidden lg:block'>
                                <img src={TrafficLeft} alt="Bird Guard" className='cloud-nine' />
                            </div>
                        </div>
                    </div>
                </div>
                <ul className='hidden md:flex items-center justify-center gap-16 py-8'>
                    <li>
                        <a href="#about" className='text-[#162936]'>
                            <span className='text-lg'>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#htb" className='text-[#162936]'>
                            <span className='text-lg'>How to buy</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='text-[#162936]'>
                            <span className='text-lg'>Gallery</span>
                        </a>
                    </li>
                    <li>
                        <a href="#socials" className='text-[#162936]'>
                            <span className='text-lg'>Socials</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}