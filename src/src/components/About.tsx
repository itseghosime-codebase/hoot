import Raydium from '../assets/Raydium.png'
import Pump from '../assets/pump.png'
import CoinLabel from '../assets/coin_label.png'
import HotBird from '../assets/hot_bird.png'
import Marquee from './ui/marquee'
import GM from './../assets/Gm.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function About() {

    useGSAP(() => {
        gsap.from('.gm', {
            scale: 0,
            scrollTrigger: {
                trigger: '.gm',
                start: '50%'
            },
            ease: 'bounce.out',
            duration: 1
        })
    }, [])


    return (
        <>
            <section className='px-6 md:px-12 xl:px-20 pt-20 pb-40' id='about'>
                <div className='grid lg:grid-cols-5 gap-4'>
                    <div className='lg:col-span-3 p-9 bg-[#88CDFF] rounded-3xl border-[3px] border-black space-y-3'>
                        <h5 className='text-2xl md:text-4xl font-medium uppercase'>About hoot</h5>
                        <p className='text-sm md:text-base xl:text-lg'>
                            Hoot isn’t just a token; it’s a fragment of Owlpha Prime’s extraordinary essence. Forged with purpose, Hoot empowers its holders to embark on a shared mission of exploration, guardianship, and universal prosperity.
                            <br />
                            <br />
                            By owning Hoot, you join the next generation of cyborg owls, each designed to protect and govern the cosmos. You’re not just a holder—you’re a protector of the stars.
                        </p>
                    </div>
                    <div className='lg:col-span-2 p-9 bg-[#88CDFF] rounded-3xl border-[3px] border-black space-y-4'>
                        {
                            [{
                                icon: Raydium,
                                label: 'Raydium',
                                target: ''
                            }, {
                                icon: Pump,
                                label: 'Pump.Fun',
                                target: 'https://pump.fun/coin/AA1qD7GPmND9BVLYaRWLdakbZvfzkU8MG64ne7Sepump'
                            }].map((items, index) => (
                                <a key={index} href={items.target} className='inline-block'>
                                    <div className='flex items-center gap-5'>
                                        <img src={items.icon} alt={items.label} className='h-16 w-16 xl:h-28 xl:w-28 object-center justify-center' />
                                        <h5 className='text-3xl md:text-4xl xl:text-5xl text-[#162936] font-medium'>{items.label}</h5>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className='bg-[#008CF4] border-y-4 border-[#162936] relative h-24 flex items-center'>
                <div className="w-screen overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:10s] w-full">
                        {[new Array(20)].map((_, index) => (
                            <div key={index} className='flex items-center gap-12'>
                                <h5 className='text-2xl md:text-4xl'>
                                    HOOT !
                                </h5>
                                <img src={CoinLabel} alt="Coin"
                                    className='h-7 w-auto md:h-8' />
                            </div>
                        ))}
                    </Marquee>
                </div>
                <div className='absolute right-0 lg:right-14 bottom-0'>
                    <div className="relative">
                        <img src={HotBird} alt="Red Hot Bird" className='object-fit object-bottom object-contain h-36 md:h-44 w-auto' />
                        <img src={GM} alt="GM" className='absolute h-20 w-auto -top-10 -left-10 gm' />
                    </div>
                </div>
            </section>
        </>



    )
}


