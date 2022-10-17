import React, { useState } from 'react'
import {BsBatteryCharging} from 'react-icons/bs'

function ProductVariants() {
    const [clamp, setClamp] = useState(false)
    const [expand, setExpand] = useState(false)

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

  return (
    <div className='my-20 w-[80%] px-5 mx-auto'>
        <h3 className='font-sans text-xl mb-8 font-bold'>Variants Price List</h3>
        <table className='table-auto w-full text-sm text-gray-500'>
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

        <div className='my-20'>
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

        <div className='my-20'>
            <h3 className='font-sans text-xl mb-8 font-bold'>Colors</h3>
            <div className='flex justify-around'>
                <div className='flex'>
                    <div className='mx-5 w-[30px] h-[30px] bg-red-500'></div>
                    <div>Red</div>
                </div>
                <div className='flex'>
                    <div className='mx-5 w-[30px] h-[30px] bg-green-500'></div>
                    <div>Green</div>
                </div>
                <div className='flex'>
                    <div className='mx-5 w-[30px] h-[30px] bg-blue-500'></div>
                    <div>Blue</div>
                </div>
                <div className='flex'>
                    <div className='mx-5 w-[30px] h-[30px] bg-yellow-500'></div>
                    <div>Yellow</div>
                </div>
            </div>
        </div>

        <hr />

        <div className='flex justify-between my-20'>
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
            
            {[1,2,3,4].map(res => 
            <>
            <div className='mt-5 text-center'>
                <div className='flex'>
                    <BsBatteryCharging size={32} className='text-gray-400' />
                    <h6 className='text-xl font-semibold pl-5'>Power {JSON.stringify(res)}</h6>
                </div>
                <div className={expand === res ? 'grid md:grid-cols-2 p-5 overflow-none' : 'grid md:grid-cols-2 p-5 w-full h-[100px] overflow-hidden'}>
                    <p className='p-2 mx-2 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='p-2 mx-2 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='p-2 mx-2 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='p-2 mx-2 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='p-2 mx-2 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='p-2 mx-2 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='p-2 mx-2 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='p-2 mx-2 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                </div>
                
                {/* Logic used for handling the current expanded div */}
                {expand === res ? 
                <button className='text-blue-400' onClick={() => setExpand(0)}>Collapse</button>: 
                <button className='text-blue-400' onClick={() => setExpand(res)}>View More Specs</button> }
            </div>
            <br />
            <br />
            <hr />
            </>)}
            <br />
            <br />
    </div>
  )
}

export default ProductVariants