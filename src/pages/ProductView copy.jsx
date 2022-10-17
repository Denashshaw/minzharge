import React, { useState } from 'react'
import {BsBatteryCharging} from 'react-icons/bs'
import ProductCarousal from '../components/ProductCarousal';
import ProductVariants from './ProductVariants';

const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/': '/minzharge/assets/';

function ProductView() {
  const [clamp, setClamp] = useState(false)
  const [power, setPower] = useState(false)
  const [wheels, setWheels] = useState(false)

  const table_data = [{
        name: "iQube Standard",
        price: "₹ 1,08,268",
        onRoad: "(On-Road Price, Salem)",
        offerLink: '#',
        kms: "100 Km, 78 Kmph, 117 kg, 5 Hrs"
    },
    {
        name: "iQube Standard",
        price: "₹ 1,08,268",
        onRoad: "(On-Road Price, Salem)",
        offerLink: '#',
        kms: "100 Km, 78 Kmph, 117 kg, 5 Hrs"
    },
];

    // const [open, setOpen] = useState(false)
  return (
    <div className='w-full'>
      <div className='md:w-[80%] mx-auto grid md:grid-cols-2 gap-10 mt-5'>
        <div className=''>
          <ProductCarousal />
        </div>

        <div className='md:p-5 text-center md:text-left'>
            <h1 className='text-3xl'>Nexzu Bazinga Cargo</h1>
            <div className='mt-5'>
                {/* <label htmlFor="type"></label> */}
                <select name="" id="type" className='w-[200px] p-3 border-2 border-black rounded outline-none'>
                    <option value="" disabled>Select Type </option>
                    <option value="lead">Lead</option>
                    <option value="lithium">Lithium</option>
                </select>
            </div>

            <div className='flex my-5 justify-center md:justify-start'>
              <div className='flex justify-center items-center pr-4 gap-1 sm:gap-10 md:gap-10'>
                      <p className='text-sm sm:text-2xl md:text-2xl'><BsBatteryCharging outline /></p>
                  <div className='text-sm md:text-lg'>
                      <p>Battery</p>
                      <p className='whitespace-nowrap'>26.8 kWh</p>
                  </div>
              </div>
              <div className='flex justify-center items-center pr-4 gap-1 sm:gap-10 md:gap-10'>
                      <p className='text-sm sm:text-2xl md:text-2xl'><BsBatteryCharging outline /></p>
                  <div className='text-sm md:text-lg'>
                      <p>Battery</p>
                      <p className='whitespace-nowrap'>26.8 kWh</p>
                  </div>
              </div>
              <div className='flex justify-center items-center pr-4 gap-1 sm:gap-10 md:gap-10'>
                      <p className='text-sm sm:text-2xl md:text-2xl'><BsBatteryCharging outline /></p>
                  <div className='text-sm md:text-lg'>
                      <p>Battery</p>
                      <p className='whitespace-nowrap'>26.8 kWh</p>
                  </div>
              </div>
            </div>

            <div className='flex mt-5 mb-5 justify-center md:justify-start'>
              <div className='flex justify-center items-center pr-4 gap-1 sm:gap-10 md:gap-10'>
                      <p className='text-sm sm:text-2xl md:text-2xl'><BsBatteryCharging outline /></p>
                  <div className='text-sm md:text-lg'>
                      <p>Battery</p>
                      <p className='whitespace-nowrap'>26.8 kWh</p>
                  </div>
              </div>
              <div className='flex justify-center items-center pr-4 gap-1 sm:gap-10 md:gap-10'>
                      <p className='text-sm sm:text-2xl md:text-2xl'><BsBatteryCharging outline /></p>
                  <div className='text-sm md:text-lg'>
                      <p>Battery</p>
                      <p className='whitespace-nowrap'>26.8 kWh</p>
                  </div>
              </div>
              <div className='flex justify-center items-center pr-4 gap-1 sm:gap-10 md:gap-10'>
                      <p className='text-sm sm:text-2xl md:text-2xl'><BsBatteryCharging outline /></p>
                  <div className='text-sm md:text-lg'>
                      <p>Battery</p>
                      <p className='whitespace-nowrap'>26.8 kWh</p>
                  </div>
              </div>
            </div>
            <hr className='mb-5'/>
            <button className='mb-5 text-sm font-bold bg-yellow-300 text-white px-20 py-1 rounded-md'>Get Offers</button>
        </div>
      </div>
      
      <div className='w-[80%] mx-auto mt-10'>
      <h3 className='font-sans text-xl mb-8 font-bold'>Variants Price List</h3>
        <div className='overflow-x-auto'>
          <table className='text-sm text-gray-500 w-full'>
                <thead>
                    <tr className='border-b-2 p-8 text-left'>
                        <th scope="col" className="py-3 px-6">VARIANT</th>
                        <th scope="col" className="py-3 px-6">PRICE</th>
                        <th scope="col" className="py-3 px-6">SPECIFICATIONS</th>
                    </tr>
                </thead>
                <tbody>
                        {table_data.map(res => <>
                    <tr className='border-b-2 p-8'>
                        <td scope="row" className="py-5 px-6">{res.name}</td>
                        <td scope="row" className="py-5 px-6">
                            <p><span className='text-black'>{res.price} </span>{res.onRoad}</p>
                            <p className='mt-3'><a href={res.offerLink} target='_blank' className='text-blue-400'>Get Offers</a></p></td>
                        <td scope="row" className="py-5 px-6">{res.kms}</td>
                    </tr>
                        </>)}
                </tbody>
            </table>
          </div>

           <div className='my-10'>
            <h3 className='font-sans text-xl mb-8 font-bold'>About Rompus+</h3>
            <p className={clamp ? "line-clamp-none": "line-clamp-2"}>
                Here's a block of text from a blog post that isn't conveniently three lines long like you designed
                for originally. It's probably like 6 lines on mobile or even on desktop depending on how you have
                things laid out. Truly a big pain in the derriere, and not the sort of thing you expected to be
                wasting your time trying to deal with at 4:45pm on a Friday am I right? You've got tickets to
                SmackDown and you heard there's gonna be a dark match with that local guy from two towns over that
                your cousin went to high school with before the show starts, and you're gonna miss it if you're
                not there early.
            </p>
            <p onClick={() => setClamp(!clamp)} className='text-blue-500 cursor-pointer'>{clamp ? 'Read Less' : 'Read More'}</p>
        </div>

        <hr />

        <div className='my-10'>
            <h3 className='font-sans text-xl mb-8 font-bold'>Colors</h3>
            <div className='flex justify-around flex-wrap gap-5'>
                <div className='flex gap-5'>
                    <div className='w-[30px] h-[30px] bg-red-500'></div>
                    <div className=''>Red</div>
                </div>
                <div className='flex gap-5'>
                    <div className='w-[30px] h-[30px] bg-green-500'></div>
                    <div className=''>Green</div>
                </div>
                <div className='flex gap-5'>
                    <div className='w-[30px] h-[30px] bg-blue-500'></div>
                    <div className=''>Blue</div>
                </div>
                <div className='flex gap-5'>
                    <div className='w-[30px] h-[30px] bg-yellow-500'></div>
                    <div className=''>Yellow</div>
                </div>
            </div>
        </div>

        <hr />

        <div className='flex justify-between my-10 flex-wrap'>
            <h3 className='font-sans text-xl font-bold'>Product Details</h3>
            <div className=''>
                <label htmlFor="type"></label>
                <select name="" id="type" className='w-[200px] p-3 border-2 border-black rounded outline-none'>
                    <option value="" disabled>Select Type </option>
                    <option value="lead">Lead</option>
                    <option value="lithium">Lithium</option>
                </select>
            </div>
            {/* <div></div> */}
        </div>
            
            
            <div className='w-full md:w-[60%] mx-auto my-10'>
                <div className='flex'>
                    <BsBatteryCharging size={32} className='text-gray-400' />
                    <h6 className='text-xl font-semibold pl-5'>Power</h6>
                </div>
                <div className={power ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                </div>
                
                <button className='text-blue-400' onClick={() => setPower(!power)}>{power ? 'Collapse' : 'View More Specs'}</button>
                <br />
                <br />
                <hr />
            </div>
            
            <div className='w-full md:w-[60%] mx-auto my-10'>
                <div className='flex'>
                    <BsBatteryCharging size={32} className='text-gray-400' />
                    <h6 className='text-xl font-semibold pl-5'>Wheels and Suspension</h6>
                </div>
                <div className={wheels ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                </div>
                
                <button className='text-blue-400' onClick={() => setWheels(!wheels)}>{wheels ? 'Collapse' : 'View More Specs'}</button>
                <br />
                <br />
                <hr />
            </div>



            <hr />
      </div>

    </div>
  )
}

export default ProductView