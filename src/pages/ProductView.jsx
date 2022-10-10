import React, { useState } from 'react'
import {BsBatteryCharging} from 'react-icons/bs'

function ProductView() {
    const [open, setOpen] = useState(false)
  return (
    <div className='m-12 grid w-[80%] justify-center'>
        <div className='grid gap-5 grid-cols-2'>
            <div className=''>
                <img src="http://test.minzharge.com/img/Nexzu/Bazinga/BazingaCargo_1.jpg" alt="" />
            </div>
            <div className=''>
                <h1 className='text-3xl mb-5'>Nexzu Bazinga Cargo</h1>
                <div className='mb-5'>
                    <label htmlFor="type"></label>
                    <select name="" id="type" className='w-[200px] p-3 border-2 border-black rounded outline-none'>
                        <option value="" disabled>Select Type </option>
                        <option value="lead">Lead</option>
                        <option value="lithium">Lithium</option>
                    </select>
                </div>

                <h1 className='text-3xl text-green-600 mb-5'>$ 51,000 <sub className='text-xs text-black'>Avg Ex-showroom price</sub></h1>

                <div className='flex gap-5 justify-items-center items-center mb-5'>
                    <div className='w-[30px] h-[30px] bg-red-500'></div>
                    <div>Red</div>
                    <div className='w-[30px] h-[30px] bg-green-500'></div>
                    <div>Green</div>
                    <div className='w-[30px] h-[30px] bg-yellow-500'></div>
                    <div>Yellow</div>
                </div>

                {/* <div className=''> */}
                    <div className='flex'>
                        <div className='flex gap-5 justify-center items-center mr-5'>
                                <BsBatteryCharging outline size={32} />
                            <div>
                                <p>Battery</p>
                                <p>26.8 kWh</p>
                            </div>
                        </div>
                        
                        <div className='flex gap-5 justify-center items-center mr-5'>
                                <BsBatteryCharging outline size={32} />
                            <div>
                                <p>Battery</p>
                                <p>26.8 kWh</p>
                            </div>
                        </div>
                        
                        <div className='flex gap-5 justify-center items-center mr-5'>
                                <BsBatteryCharging outline size={32} />
                            <div>
                                <p>Battery</p>
                                <p>26.8 kWh</p>
                            </div>
                        </div>

                    </div>
                {/* </div> */}

                {/* second section with icons */}
                <div className='flex mt-5'>
                        <div className='flex gap-5 justify-center items-center mr-5'>
                                <BsBatteryCharging outline size={32} />
                            <div>
                                <p>Range</p>
                                <p>170 km</p>
                            </div>
                        </div>
                        
                        <div className='flex gap-5 justify-center items-center mr-5'>
                                <BsBatteryCharging outline size={32} />
                            <div>
                                <p>Energy Usage</p>
                                <p>159 Wh/km</p>
                            </div>
                        </div>
                        
                        <div className='flex gap-5 justify-center items-center mr-5'>
                                <BsBatteryCharging outline size={32} />
                            <div>
                                <p>Fast Charge</p>
                                <p>33 kW</p>
                            </div>
                        </div>

                    </div>
                    <hr className='mt-10'/>
            </div>
        </div>
    </div>
  )
}

export default ProductView