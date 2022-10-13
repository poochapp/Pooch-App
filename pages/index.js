// import Image from 'next/image'
// import poochPic from '../public/pooch-icon.png'
// import qrCode from '../public/qrcode.png'
// import iPhoneImg from '../public/iphone.png'

export default function Home() {
  return (
    <main className='text-center md:text-left md:flex md:justify-evenly md:max-w-6xl md:mx-auto md:items-center flex-1'>
      <img className='mt-6 mx-auto md:hidden' src="/pooch-icon.png" width={224} height={161} alt="Pooch Icon" />
      <div className='md:flex md:flex-col md:pb-9'>
        <h1 className='text-5xl pt-14 mx-6 md:mx-0 font-Museo-Sans-Rounded-900'>Search, Book and Manage</h1>
        <h2 className='text-3xl	pt-10 mx-12 md:mx-0 font-Museo-Sans-Rounded-300'>Marketplace for all</h2>
        <h2 className='text-3xl mx-18 font-Museo-Sans-Rounded-700' style={{ color: '#077997' }}>Groomers, Daycares, Boarding and more!</h2>
        <section className='md:mt-16'>
          <h4 className='md:hidden text-xl pt-12 pb-5 font-Museo-Sans-Rounded-500' style={{ color: '403f41' }}>Coming soon to:</h4>
          <div className='flex justify-center gap-x-4 gap-y-4 flex-wrap md:items-center md:justify-start'>
            <div className="self-baseline">
              <h4 className='hidden md:block text-base font-Museo-Sans-Rounded-500' style={{ color: '#403f41' }}>Coming soon to:</h4>
              <img className='md:mt-4' src="/apps-store.png" />
            </div>
            <div className="self-baseline">
              <h4 className='hidden md:block invisible text-base font-Museo-Sans-Rounded-500'>Coming soon to:</h4>
              <img className="md:mt-4 self-baseline md:self-center" src="/google-play.png" />
            </div>
            <div className='hidden md:block'>
              <img src="/qrcode.png" width={144} height={144} />
            </div>
          </div>
          <img className="mt-16 mx-auto md:hidden" src="/qrcode.png" />
          <img className='mt-9 mx-auto self-center md:hidden' src="/iphone.png" />
        </section>
      </div>
      <div className='hidden md:block'>
        <img src="/iphone.png" style={{height: '600px'}}/>
      </div>
      {/* <section>
        <h1 className='text-5xl pt-12'>Search, Book and Manage</h1>
        <div>
          <h2 className='text-3xl	mt-5'>Marketplace for all </h2>
          <h2 className='text-3xl md:mt-1'><span style={{ color: '#077997' }}>Groomers, Daycares, Boarding and more!</span></h2>
        </div>
        <h4 className='text-xl self-start mt-16 relative top-6'>Coming soon to:</h4>
        <div className='flex items-center'>
          <img src="/apps-store.png" />
          <img src="/google-play.png" className='mx-4' />
          <img src="/qrcode.png" width={144} height={144} className='ml-5' />
        </div>
      </section>
      <div>
        <Image src={iPhoneImg} />
      </div> */}

    </main>
  )
}
