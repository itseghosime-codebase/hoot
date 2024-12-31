import Board from '../assets/Notice_Board.png'
import HTB from './../assets/HTB.png';
import WalletDownload from '../assets/download_wallet.svg'
import CreateWallet from '../assets/create-wallet.svg'
import BuySol from '../assets/buy-sol.svg'
import SFH from '../assets/SFH.svg'
import BirdBrain from './../assets/birdbrain.png';
import CloudTwo from '../assets/Cloud-two.png'
import CloudOne from '../assets/Cloud-one.png'
import VerticalBoard from './../assets/verticalboard.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Htb() {
  useGSAP(() => {
    gsap.from('.birdbrain', {
        rotate: 0,
        scrollTrigger: {
            trigger: '.birdbrain',
            start: 'top 50%'
        },
        ease: 'expo.out',
        duration: 1
    })
}, [])

  return (
    <section className='px-6 md:px-12 xl:px-20 p-16 pt-20 relative' id='htb'>
      <div className='md:min-h-[450px] lg:min-h-[500px] max-w-[1000px] relative'>
        <img src={Board} alt="Notice Board" className='h-full w-full object-contain object-top absolute z-10 hidden md:block' />
        <img src={VerticalBoard} alt="Notice Board" className='h-full w-full object-contain object-top absolute z-10 md:hidden' />
        <div className="relative z-10 h-full w-full p-10 flex flex-col items-center justify-center">
          <div className="max-w-[250px]">
            <img src={HTB} alt="How to Buy" className='h-full w-full object-contain object-center' />
          </div>
          <div className='grid md:grid-cols-2 gap-5 mt-5 max-w-xl xl:max-w-2xl '>
            <div>
              <img src={WalletDownload} alt="Install phantom wallet" />
            </div>
            <div>
              <img src={CreateWallet} alt="Create you wallet" />
            </div>
            <div>
              <img src={BuySol} alt="Buy Sol" />
            </div>
            <div>
              <img src={SFH} alt="Swao for Hoot" />
            </div>
          </div>
        </div>
        <img src={BirdBrain} alt="Bird Brain" className='birdbrain absolute bottom-0 rotate-[25deg] -right-[120px] w-[350px] h-auto z-0' />
      </div>
 
        <img
          src={CloudTwo}
          alt="Cloud"
          className='h-16 w-auto z-10 absolute top-[15%] right-[5%] cloud-nine'
        /> 
         <img
          src={CloudTwo}
          alt="Cloud"
          className='h-8 w-auto z-10 absolute top-[35%] right-[20%] cloud-nine'
        /> 
         <img
          src={CloudOne}
          alt="Cloud"
          className='h-14 w-auto z-10 absolute bottom-0 right-[40%] cloud-nine'
        /> 
    </section>
  )
}
