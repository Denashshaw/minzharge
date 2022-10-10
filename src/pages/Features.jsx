import React from 'react'
const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/': '/minzharge/assets';

function Features() {
  return (
    <section>
        <div className='p-5 md:p-10'>
            <h1 className='text-2xl font-bold text-center md:text-left'>FEATURES BRANDS</h1>
            <hr />
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 mt-16 md:ml-[50px]'>
                <div className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/ahrma.jpg"}  alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </div>
                <div className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/aurelios_pizza.jpg"}  alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </div>
                <div className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/bio_bait.png"}  alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </div>
                <div className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/ernies_texas_lunch.png"}  alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </div>
                <div className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/fhra.png"}  alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </div>
                <div className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/finnkino.jpg"}  alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </div>
                <div className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/joskin.png"}  alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </div>
                <div className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/kawasaki_racing.jpg"}  alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </div>
                <div className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/ktp-basket.png"} alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </div>
                <div className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/los_rolling_tacos.png"}  alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </div>
                <div className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/mirrolure.png"}  alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </div>
                <div className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/pinos.png"}  alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features