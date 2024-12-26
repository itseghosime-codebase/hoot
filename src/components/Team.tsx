import Quote from './../assets/MTT-Quote.png';
import MuffedClouds from './../assets/muffedcloud.png';
import ThreeMuffs from './../assets/threemuffs.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import Member from './../assets/member-bird.png';
import BirdCTS from './../assets/CTS Bird.png';
import CTS from './../assets/CTS.png';
import { FaTwitter } from "react-icons/fa";
import CloudTwo from '../assets/Cloud-two.png'
import { LuCircleChevronDown, LuCircleChevronUp } from 'react-icons/lu';
import { Keyboard, Navigation } from "swiper/modules";
import React from 'react';
import "swiper/css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);



export default function Team() {
  const SlideRef = React.useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  useGSAP(() => {
    gsap.from('.quote', {
      scale: 0,
      scrollTrigger: {
        trigger: '.quote',
        start: 'top 40%'
      },
      ease: 'bounce.inOut',
      duration: 1
    })

    gsap.to(
      '.muffed',
      {
        y: -10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.in",
      }
    )
  }, [])



  return (
    <section className='px-6 md:px-12 xl:px-20 py-16 md:py-24 relative z-30'>
      <div className='grid xl:grid-cols-2 gap-10'>
        <div className='relative flex items-center flex-col justify-center'>
          <img src={Quote} alt="Meet the team" className='quote h-40 xl:h-56 mb-10 mr-20 w-auto shrink-0' />
          <img src={ThreeMuffs} alt="Birds" className='muffed h-44 md:h-56 absolute z-10 bottom-14 shrink-0' />
          <img src={MuffedClouds} alt="Clouds" className='muffed h-52 w-auto shrink-0 relative z-0' />
        </div>
        <div className='max-h-[450px] overflow-hidden flex items-center md:items-start justify-between md:justify-center gap-5 flex-col md:flex-row'>
          <div>
            <Swiper
              ref={SlideRef}
              keyboard={{
                enabled: true,
              }}
              modules={[Keyboard, Navigation]}
              direction={'vertical'}
              slidesPerView={3}
              spaceBetween={20}
              className="mySwiper max-w-500"
            >
              <SwiperSlide className='max-h-24 md:max-h-32'>
                <div className='bg-[#008CF4] border border-[#162936] rounded-2xl pl-5 md:pl-8 pr-4 flex items-center justify-between w-full gap-3'>
                  <img src={Member} alt="Members" className='max-h-32 h-24 md:h-full w-auto' />
                  <div>
                    <h6 className='text-2xl md:text-3xl'>Hoot prime</h6>
                    <p className='text-base md:text-2xl'>Founder</p>
                  </div>
                  <a href="#" className='hover:text-[#F89C2E] transition-colors ease-in-out duration-200'>
                    <span className='h-10 w-10 md:h-16 md:w-16 rounded-full bg-[#63B3EE] relative border border-white flex items-center justify-center'>
                      <FaTwitter className='text-xl md:text-3xl' />
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='max-h-24 md:max-h-32'>
                <div className='bg-[#008CF4] border border-[#162936] rounded-2xl pl-5 md:pl-8 pr-4 flex items-center justify-between w-full gap-3'>
                  <img src={Member} alt="Members" className='max-h-32 h-24 md:h-full w-auto' />
                  <div>
                    <h6 className='text-2xl md:text-3xl'>Hoot prime</h6>
                    <p className='text-base md:text-2xl'>Founder</p>
                  </div>
                  <a href="#" className='hover:text-[#F89C2E] transition-colors ease-in-out duration-200'>
                    <span className='h-10 w-10 md:h-16 md:w-16 rounded-full bg-[#63B3EE] relative border border-white flex items-center justify-center'>
                      <FaTwitter className='text-xl md:text-3xl' />
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='max-h-24 md:max-h-32'>
                <div className='bg-[#008CF4] border border-[#162936] rounded-2xl pl-5 md:pl-8 pr-4 flex items-center justify-between w-full gap-3'>
                  <img src={Member} alt="Members" className='max-h-32 h-24 md:h-full w-auto' />
                  <div>
                    <h6 className='text-2xl md:text-3xl'>Hoot prime</h6>
                    <p className='text-base md:text-2xl'>Founder</p>
                  </div>
                  <a href="#" className='hover:text-[#F89C2E] transition-colors ease-in-out duration-200'>
                    <span className='h-10 w-10 md:h-16 md:w-16 rounded-full bg-[#63B3EE] relative border border-white flex items-center justify-center'>
                      <FaTwitter className='text-xl md:text-3xl' />
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='max-h-24 md:max-h-32'>
                <div className='bg-[#008CF4] border border-[#162936] rounded-2xl pl-5 md:pl-8 pr-4 flex items-center justify-between w-full gap-3'>
                  <img src={Member} alt="Members" className='max-h-32 h-24 md:h-full w-auto' />
                  <div>
                    <h6 className='text-2xl md:text-3xl'>Hoot prime</h6>
                    <p className='text-base md:text-2xl'>Founder</p>
                  </div>
                  <a href="#" className='hover:text-[#F89C2E] transition-colors ease-in-out duration-200'>
                    <span className='h-10 w-10 md:h-16 md:w-16 rounded-full bg-[#63B3EE] relative border border-white flex items-center justify-center'>
                      <FaTwitter className='text-xl md:text-3xl' />
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='max-h-24 md:max-h-32'>
                <div className='bg-[#008CF4] border border-[#162936] rounded-2xl pl-5 md:pl-8 pr-4 flex items-center justify-between w-full gap-3'>
                  <img src={Member} alt="Members" className='max-h-32 h-24 md:h-full w-auto' />
                  <div>
                    <h6 className='text-2xl md:text-3xl'>Hoot prime</h6>
                    <p className='text-base md:text-2xl'>Founder</p>
                  </div>
                  <a href="#" className='hover:text-[#F89C2E] transition-colors ease-in-out duration-200'>
                    <span className='h-10 w-10 md:h-16 md:w-16 rounded-full bg-[#63B3EE] relative border border-white flex items-center justify-center'>
                      <FaTwitter className='text-xl md:text-3xl' />
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='max-h-24 md:max-h-32'>
                <div className='bg-[#008CF4] border border-[#162936] rounded-2xl pl-5 md:pl-8 pr-4 flex items-center justify-between w-full gap-3'>
                  <img src={Member} alt="Members" className='max-h-32 h-24 md:h-full w-auto' />
                  <div>
                    <h6 className='text-2xl md:text-3xl'>Hoot prime</h6>
                    <p className='text-base md:text-2xl'>Founder</p>
                  </div>
                  <a href="#" className='hover:text-[#F89C2E] transition-colors ease-in-out duration-200' >
                    <span className='h-10 w-10 md:h-16 md:w-16 rounded-full bg-[#63B3EE] relative border border-white flex items-center justify-center'>
                      <FaTwitter className='text-xl md:text-3xl' />
                    </span>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className='flex md:flex-col items-center w-full md:w-fit justify-between md:h-full py-14'>
            <button
              className='hover:text-[#F89C2E] transition-colors ease-in-out duration-200'
              onClick={() => handlePrev()}>
              <LuCircleChevronUp className='text-5xl' />
            </button>
            <div className='flex flex-col items-center'>
              <img src={CTS} alt="Click to Scroll" className='h-10 md:h-14 w-auto cloudy' />
              <img src={BirdCTS} alt="Brid in Clouds" className='h-14 md:h-20 lg:h-24 w-auto cloud-nine' />
            </div>
            <button
              className='hover:text-[#F89C2E] transition-colors ease-in-out duration-200'
              onClick={() => handleNext()}>
              <LuCircleChevronDown className='text-5xl' />
            </button>
          </div>
        </div>
      </div>

      <img
        src={CloudTwo}
        alt="Cloud"
        className='h-8 w-auto z-10 absolute top-[15%] left-[5%] cloud-nine'
      />

      <img
        src={CloudTwo}
        alt="Cloud"
        className='h-12 w-auto z-10 absolute top-[30%] left-[35%] cloud-nine hidden md:block'
      />
    </section>
  )
}
