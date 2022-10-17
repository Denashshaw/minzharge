import React, { useState } from 'react'
import {BsBatteryCharging} from 'react-icons/bs'
import ProductCarousal from '../components/ProductCarousal';
import ProductVariants from './ProductVariants';

const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/': '/minzharge/assets/';

function ProductView() {
    const [open, setOpen] = useState(false)
  return (
            <div className='w-[100%] mx-auto'>
                {/* <ProductVariants /> */}
                <div className='grid gap-5 md:grid-cols-2'>
            <div className={open ? 'hidden': 'p-2'}>
                <ProductCarousal />
            </div>
            <div className='grid p-2 justify-center'>
                <div className='flex gap-5'>
                    <h1 className='text-3xl'>Nexzu Bazinga Cargo</h1>
                    <div className=''>
                        <label htmlFor="type"></label>
                        <select name="" id="type" className='w-[200px] p-3 border-2 border-black rounded outline-none'>
                            <option value="" disabled>Select Type </option>
                            <option value="lead">Lead</option>
                            <option value="lithium">Lithium</option>
                        </select>
                    </div>
                </div>

                {/* <div className=''> */}
                <div className='flex mt-5 mb-5'>
                    <div className='flex gap-5 justify-center items-center mr-5'>
                            <BsBatteryCharging outline size={32} />
                        <div className='w-[102px]'>
                            <p>Battery</p>
                            <p>26.8 kWh</p>
                        </div>
                    </div>
                    
                    <div className='flex gap-5 justify-center items-center mr-5'>
                            <BsBatteryCharging outline size={32} />
                        <div className='w-[102px]'>
                            <p>Battery</p>
                            <p>26.8 kWh</p>
                        </div>
                    </div>
                    
                    <div className='flex gap-5 justify-center items-center mr-5'>
                            <BsBatteryCharging outline size={32} />
                        <div className='w-[102px]'>
                            <p>Battery</p>
                            <p>26.8 kWh</p>
                        </div>
                    </div>

                    </div>
                {/* </div> */}

                {/* second section with icons */}
                <div className='flex mt-5 mb-5'>
                    <div className='flex gap-5 justify-center items-center mr-5'>
                            <BsBatteryCharging outline size={32} />
                        <div className='w-[102px]'>
                            <p>Range</p>
                            <p>170 km</p>
                        </div>
                    </div>
                    
                    <div className='flex gap-5 justify-center items-center mr-5'>
                            <BsBatteryCharging outline size={32} />
                        <div className='w-[102px]'>
                            <p>Energy Usage</p>
                            <p>159 Wh/km</p>
                        </div>
                    </div>
                    
                    <div className='flex gap-5 justify-center items-center mr-5'>
                            <BsBatteryCharging outline size={32} />
                        <div className='w-[102px]'>
                            <p>Fast Charge</p>
                            <p>33 kW</p>
                        </div>
                    </div>

                    </div>

                <h1 className='text-4xl text-green-600 mb-10'>$ 51,000 <sub className='text-xs text-black'>Avg Ex-showroom price</sub></h1>
                    <hr className='mt-1'/>
                    <div className=''>
                        <button className='bg-yellow-500 px-20 py-3 text-xl rounded text-white mt-8'>Get offers</button>
                    </div>
            </div>
        </div>
            </div>
  )
}

export default ProductView