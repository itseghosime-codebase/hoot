import NoiseBackground from '../assets/noise_texture.png'
import CoinLabel from '../assets/loading-gif.gif'
import React from 'react'

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
        <section className={`fixed  bg-[#41A5F0] h-dvh w-screen ${progress === 100 ? 'hidden' : 'block'} flex items-center justify-center overflow-hidden z-50`}>
            <img
                src={NoiseBackground}
                alt="Noise Background Image"
                className='h-full w-full absolute object-center object-cover z-10 opacity-70'
            />

            <div className='relative z-30 flex items-center'>

                <h2 className='text-stroke-class relative z-10 uppercase inline-block font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>Loading</h2>

                <img src={CoinLabel} alt="Coin"
                    className='h-60 lg:h-96 w-auto -ml-10 lg:-ml-16 relative z-0 mb-10' />

            </div>

        </section>
    )
}

export default LoadingScreen