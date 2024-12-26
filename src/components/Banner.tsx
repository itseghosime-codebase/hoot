import Welcome from '../assets/welcome.svg'
import WoodLog from './../assets/woodlog.png';
import CoinLabel from '../assets/coin_label.png'
import PurpleBird from './../assets/purple-bird.png';
import GreenBird from './../assets/green-bird.png';
import EvilBird from './../assets/evil-bird.png';
import OrangeBird from './../assets/orange-bird.png';
import PinkBird from './../assets/pink-bird.png';
import CloudOne from '../assets/Cloud-one.png'
import CloudTwo from '../assets/Cloud-two.png'
import Cloudzi from './../assets/cloudzi.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);



export default function Banner() {
  useGSAP(()=>{
    gsap.to('.bouncing-bird',{
      y:-20,
      stagger:0.1,
      duration: 1,         
      repeat: -1,          
      yoyo: true,          
      ease: "sine.in",
    })
  },[])
  return (
    <section className='pb-10 pt-48 px-6 md:px-12 lg:px-20 relative'>
      <div className="relative z-20">
        <div className="mb-6  flex flex-col items-center justify-center space-y-4 text-center">
          <img src={Welcome} alt="Welcome to the universe of hoot" />
          <p className='max-w-2xl text-lg md:text-2xl text-stroke font-semibold'>In the boundless cosmos, one name echoes across
            galaxies: Owlpha Prime, the legendary cyborg owl. </p>
        </div>
        <div className="flex items-center justify-between gap-2.5 relative z-10 max-w-4xl mx-auto">
          {
            [PurpleBird, GreenBird, EvilBird, OrangeBird, PinkBird].map((items, index) => (
              <div key={index} className="relative">
                <img src={items} alt="Birds" className='h-auto w-14 md:w-28 lg:w-36 max-w-40 bouncing-bird' />
                <div className="h-4 w-full absolute bg-black bottom-0 blur-xl" />
              </div>
            ))
          }
        </div>
        <div className='flex items-center justify-center -mt-9 md:-mt-16 lg:-mt-28 relative'>
          <img src={WoodLog} alt="Wood Log" className='max-h-48 h-full w-auto' />
        </div>
        <div className='flex items-center justify-center mt-10 gap-2 md:gap-5'>
          <a href="#">
            <div className='flex items-center gap-2 h-14 md:h-16 px-8 border-[3px] border-[#162936] rounded-full bg-[#F89C2E] hover:bg-transparent transition-colors ease-linear duration-300'>
              <img src={CoinLabel} alt="Coin"
                className='h-7 w-auto md:h-8' />
              <span className='text-[#162936] text-sm md:text-lg'>
                Buy Hoot
              </span>
            </div>
          </a>
          <a href="#">
            <div className='flex items-center gap-2 h-14 md:h-16 px-8 border-[3px] bg-[#162936]/10 transition-colors ease-linear duration-300 hover:bg-[#F89C2E] border-[#162936] rounded-full '>
              <span className='text-[#162936] text-sm md:text-lg'>
                Learn more
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="clouds z-10 inset-0 absolute overflow-hidden">
        {/* First Fly */}
        <div className="cloud-nine">
          <img
            src={CloudOne}
            alt="Cloud"
            className='h-24 md:h-40 w-auto z-10 absolute top-14 -left-20'
          />
        </div>

        <div className="cloud">
          <img
            src={CloudTwo}
            alt="Cloud"
            className='h-14 md:h-20 w-auto z-10 absolute top-20 left-1/4'
          />
        </div>

        {/* Second Fly */}
        <div className="cloud-nine hidden md:block">
          <img
            src={CloudTwo}
            alt="Cloud"
            className='h-14 md:h-20 w-auto z-10 absolute top-32 right-[15%]'
          />
        </div>

        <div className='cloudy'>
          <img
            src={CloudOne}
            alt="Cloud"
            className='h-20 md:h-32 w-auto z-10 absolute top-60 -right-24'
          />
        </div>

        <div className="cloud ">
          <img
            src={CloudTwo}
            alt="Cloud"
            className='h-14 md:h-20 w-auto z-10 absolute top-80 left-[15%]'
          />
        </div>

        <div className="cloud-nine hidden md:block">
          <img
            src={CloudTwo}
            alt="Cloud"
            className='h-14 md:h-20 w-auto z-10 absolute bottom-60 left-[2%]'
          />
        </div>

        <div className="cloudy hidden md:block">
          <img
            src={CloudTwo}
            alt="Cloud"
            className='h-14 w-auto z-10 absolute top-[45%] right-[15%]'
          />
        </div>

        <div className="cloudy">
          <img
            src={Cloudzi}
            alt="Cloud"
            className='h-20 md:h-32 w-auto z-10 absolute top-40 right-[35%]'
          />
        </div>

        <div className="cloudy">
          <img
            src={Cloudzi}
            alt="Cloud"
            className='h-20 md:h-32 w-auto z-10 absolute top-24 left-[30%]'
          />
        </div>
      </div>
    </section>
  )
}
