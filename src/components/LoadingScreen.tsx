import { TypeAnimation } from 'react-type-animation'
import NoiseBackground from '../assets/noise_texture.png'
import CoinLabel from '../assets/coin_label.png'
import CloudOne from '../assets/Cloud-one.png'
import CloudTwo from '../assets/Cloud-two.png'
import React from 'react'
import BlackBird from './../assets/blackbird.png';
import PurpleBird from './../assets/purple-bird.png';
import PinkBird from './../assets/pink-bird.png';

function LoadingScreen() {
    const [progress, setProgress] = React.useState(10)

    React.useEffect(() => {

        const increaseProgress = () => {
            setProgress(prev => {
                if (prev >= 100) {
                    return 100;
                }
                setTimeout(() => {
                    setProgress(prev + 5);
                }, 500)


                return prev;
            });
        };

        const interval = setInterval(increaseProgress, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`fixed  bg-[#50B0F7] h-dvh w-screen ${progress === 100 ? 'hidden' : 'block'} flex items-center justify-center overflow-hidden z-50`}>
            <img
                src={NoiseBackground}
                alt="Noise Background Image"
                className='h-full w-full absolute object-center object-cover z-10 opacity-70'
            />

            <div className='relative z-30 flex flex-col items-center'> 
                <TypeAnimation
                    sequence={[
                        'Loading',
                        500,
                        'Loading.',
                        100,
                        'Loading..',
                        100,
                        'Loading...',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className='text-stroke-class uppercase inline-block font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
                    repeat={Infinity}
                />
                <div className='min-w-80 sm:min-w-96 lg:min-w-[420px] mt-8 h-12 sm:h-14'>
                    <div className="progress_bar">
                        <div className={`progress_bar_fill ${progress < 100 ? 'after:border-2 after:sm:border-[2.67px] after:border-l-0 after:sm:border-l-0' : ''}`}
                            style={{
                                width: progress + '%'
                            }}>
                            <div className="progress_bar_label absolute right-0.5 sm:right-1 sm:top-1 top-px shrink-0">
                                <img src={CoinLabel} alt="Coin"
                                    className='h-10 w-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="clouds z-20 inset-0 absolute">
                {/* First Fly */}
                <div className="cloud-nine flex">
                    <img src={BlackBird} alt="Black Bird" className='h-14 w-auto absolute top-28 left-24 z-20' />
                    <img
                        src={CloudOne}
                        alt="Cloud"
                        className='h-40 w-auto z-10 absolute top-14 -left-20'
                    />
                </div>

                <div className="cloud">
                    <img
                        src={CloudTwo}
                        alt="Cloud"
                        className='h-20 w-auto z-10 absolute top-20 left-1/4'
                    />
                </div>

                {/* Second Fly */}
                <div className="cloud-nine">
                    <img src={PurpleBird} alt="Black Bird" className='h-14 w-auto absolute top-28 right-[18%] z-20' />
                    <img
                        src={CloudTwo}
                        alt="Cloud"
                        className='h-20 w-auto z-10 absolute top-32 right-[15%]'
                    />
                </div>

                <div className='cloudy'>
                    <img
                        src={CloudOne}
                        alt="Cloud"
                        className='h-32 w-auto z-10 absolute top-60 -right-24'
                    />
                </div>

                <div className="cloud">
                    <img
                        src={CloudTwo}
                        alt="Cloud"
                        className='h-20 w-auto z-10 absolute top-80 left-[15%]'
                    />
                </div>

                <div className="cloud-nine">
                    <img
                        src={CloudTwo}
                        alt="Cloud"
                        className='h-20 w-auto z-10 absolute bottom-60 left-[2%]'
                    />
                </div>

                <div className="cloudy">
                    <img
                        src={CloudTwo}
                        alt="Cloud"
                        className='h-20 w-auto z-10 absolute top-[65%] right-[5%]'
                    />
                </div>

                {/* Third Fly */}
                <div className="cloudy">
                    <img src={PinkBird} alt="Black Bird" className='h-14 w-auto absolute bottom-20 left-[28%] z-20' />
                    <img
                        src={CloudTwo}
                        alt="Cloud"
                        className='h-20 w-auto z-10 absolute bottom-10 left-[25%]'
                    />
                </div>

            </div>
        </section>
    )
}

export default LoadingScreen