import React, { useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'

function ProductBrands() {
    const {brand} = useParams();

    /* useEffect(() => {
    //     if(brand == 'all') get all Products
    //     else get the specific product details
    alert(brand)
    }, [brand]) */


    const product_data = [
        {
            id: 1,
            name: "Nexu Rompus Plus",
            price: "33,000",
            image_url: "http://test.minzharge.com/img/Rompus_Black.jpg"
    },
        {
            id: 2,
            name: "Rithul Fork",
            price: "31,000",
            image_url: "http://test.minzharge.com/img/Rompus_Black.jpg"
    },
        {
            id: 3,
            name: "Dexpress",
            price: "12,900",
            image_url: "http://test.minzharge.com/img/Rompus_Black.jpg"
    },
        {
            id: 4,
            name: "Semxy",
            price: "43,000",
            image_url: "http://test.minzharge.com/img/Rompus_Black.jpg"
    },
        {
            id: 5,
            name: "Gemopai",
            price: "23,000",
            image_url: "https://3.img-dpreview.com/files/p/E~TS590x0~articles/8692662059/8283897908.jpeg"
    },
        {
            id: 6,
            name: "Taark",
            price: "53,000",
            image_url: "https://3.img-dpreview.com/files/p/E~TS590x0~articles/8692662059/8283897908.jpeg"
    }
    ]
    return (
        <>
        <div className='grid sm:grid-cols-3 md:grid-cols-4 gap-5 md:justify-start justify-center px-8'>
            {product_data.map(data => (
            <Link to={'/product/'+data.id} key={data.id} className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src={data.image_url} alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>{data.name}</h6>
                    <p className='text-red-500 font-bold'>$ {data.price}</p>
                </div>
            </Link>
            ))}
        </div>
        {brand !== 'all' ? <div className='m-12'>
            <h3 className='text-xl font-bold'>About {brand}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque repudiandae neque? Magnam qui quaerat corporis doloremque aspernatur. Labore dolores voluptatibus nisi facere debitis beatae vero ducimus in exercitationem consectetur!</p>
        </div> : ''}
        </>
    )
}

export default ProductBrands