import Background from './../assets/faq-background.png';
import BirdGreen from './../assets/BirdGreen.png';


export default function Faq() {
  return (
    <section className='py-16 bg-[#0B90F3] relative xl:min-h-screen px-6 md:px-12 lg:px-20'>
      <img src={Background} alt="Background Image" className='h-full w-full object-cover object-center absolute inset-0 z-0' />
      <div className="relative z-10">
        <h3 className='text-8xl font-medium text-center'>FAQ</h3>
        <div className='mt-16'>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 lg:flex items-center justify-center gap-5 flex-wrap">
            <div className='bg-[#50B0F7] max-w-sm py-10 px-6 space-y-3 rounded-[30px] border-[3px] border-black'>
              <h6 className='text-2xl'>what chain is OwlHoot $HOOT on?</h6>
              <p className='text-lg'>Owl Hoot ($HOOT) will be launched
                on the Solana blockchain, chosen
                for its unmatched speed, scalability,
                and eco-friendly design. </p>
            </div>
            <img src={BirdGreen} alt="Green Bird" className='lg:max-w-sm cloud-nine' />
            <div className='bg-[#50B0F7] max-w-sm py-10 px-6 space-y-3 rounded-[30px] border-[3px] border-black'>
              <h6 className='text-2xl'>what chain is OwlHoot $HOOT on?</h6>
              <p className='text-lg'>Owl Hoot ($HOOT) will be launched
                on the Solana blockchain, chosen
                for its unmatched speed, scalability,
                and eco-friendly design. </p>
            </div>

            <div className="flex items-center justify-center md:-mt-16 relative z-10">
              <div className='bg-[#50B0F7] max-w-sm py-10 px-6 space-y-3 rounded-[30px] border-[3px] border-black'>
                <h6 className='text-2xl'>Where can I buy $HOOT?</h6>
                <p className='text-lg'>CA: will be updated when coin is live</p>
                <p className='text-lg'>You can purchase $HOOT on a DEX
                  (Decentralised Exchange) with a
                  Phantom Wallet </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
