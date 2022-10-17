import React, { useContext } from 'react'
import {BsBatteryCharging} from 'react-icons/bs'
import ProductCarousal from '../components/ProductCarousal';
import ProductVariants from './ProductVariants';
import { NavbarContext } from '../context/NavbarStatus';
const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/': '/minzharge/assets/';

function ProductView() {

    const {expand} = useContext(NavbarContext)
  return (
    <div className='w-full'>
      <div className='md:w-[80%] mx-auto grid md:grid-cols-2 gap-10 mt-5'>
      <div className={expand ? 'hidden': 'p-2'}>
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
                      <p className='text-sm sm:text-2xl md:text-2xl'><BsBatteryCharging /></p>
                  <div className='text-sm md:text-lg'>
                      <p>Battery</p>
                      <p className='whitespace-nowrap'>26.8 kWh</p>
                  </div>
              </div>
              <div className='flex justify-center items-center pr-4 gap-1 sm:gap-10 md:gap-10'>
                      <p className='text-sm sm:text-2xl md:text-2xl'><BsBatteryCharging /></p>
                  <div className='text-sm md:text-lg'>
                      <p>Battery</p>
                      <p className='whitespace-nowrap'>26.8 kWh</p>
                  </div>
              </div>
              <div className='flex justify-center items-center pr-4 gap-1 sm:gap-10 md:gap-10'>
                      <p className='text-sm sm:text-2xl md:text-2xl'><BsBatteryCharging /></p>
                  <div className='text-sm md:text-lg'>
                      <p>Battery</p>
                      <p className='whitespace-nowrap'>26.8 kWh</p>
                  </div>
              </div>
            </div>

            <div className='flex mt-5 mb-5 justify-center md:justify-start'>
              <div className='flex justify-center items-center pr-4 gap-1 sm:gap-10 md:gap-10'>
                      <p className='text-sm sm:text-2xl md:text-2xl'><BsBatteryCharging /></p>
                  <div className='text-sm md:text-lg'>
                      <p>Battery</p>
                      <p className='whitespace-nowrap'>26.8 kWh</p>
                  </div>
              </div>
              <div className='flex justify-center items-center pr-4 gap-1 sm:gap-10 md:gap-10'>
                      <p className='text-sm sm:text-2xl md:text-2xl'><BsBatteryCharging /></p>
                  <div className='text-sm md:text-lg'>
                      <p>Battery</p>
                      <p className='whitespace-nowrap'>26.8 kWh</p>
                  </div>
              </div>
              <div className='flex justify-center items-center pr-4 gap-1 sm:gap-10 md:gap-10'>
                      <p className='text-sm sm:text-2xl md:text-2xl'><BsBatteryCharging /></p>
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
      <ProductVariants />
    </div>
  )
}

export default ProductView