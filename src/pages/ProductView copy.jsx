import React, { useState } from 'react'
import {BsBatteryCharging} from 'react-icons/bs'
import ProductCarousal from '../components/ProductCarousal';
import ProductVariants from './ProductVariants';

const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/': '/minzharge/assets/';

function ProductView() {
    const [open, setOpen] = useState(false)
  return (
         <section>
            <div className='p-6 md:p-12'>
                <ProductVariants />
            </div>
        </section>
  )
}

export default ProductView