import Quote from './../assets/MTT-Quote.png';
import MuffedClouds from './../assets/muffedcloud.png';
import ThreeMuffs from './../assets/threemuffs.png';
import CloudTwo from '../assets/Cloud-two.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);



export default function Team() {
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
      <div className='grid xl:grid-cols-2 gap-10 items-center'>
        <div className='relative flex items-center flex-col justify-center'>
          <img src={Quote} alt="Meet the team" className='quote h-40 xl:h-56 mb-10 mr-20 w-auto shrink-0' />
          <img src={ThreeMuffs} alt="Birds" className='muffed h-44 md:h-56 absolute z-20 bottom-14 shrink-0' />
          <img src={MuffedClouds} alt="Clouds" className='muffed h-52 w-auto shrink-0 relative z-0' />
        </div>
        <div className='overflow-hidden flex items-center md:items-start justify-between md:justify-center gap-5 flex-col md:flex-row'>
          <div className='bg-[#008CF4] border border-[#162936] rounded-2xl pr-4 w-full gap-3 max-w-md md:py-10 md:pl-10 py-8 pl-8'>
            <p className='max-w-2xl text-lg md:text-2xl text-stroke font-semibold'>
              $HOOT is a memecoin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is for entertainment purposes only.
            </p>
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
