import React from 'react'

const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/': '/minzharge/assets';

function Categories() {
  return (
    <section>
        <div className='p-6 md:p-12'>
        <h1 className='text-2xl font-bold text-center md:text-left'>TOP CATEGORIES</h1>
            <hr />
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-16 md:ml-[50px] nopadding'>
              <div>
                  <img src={assetUrl +"/Category/image1_1920x.webp"} alt=""/>
              </div>
              <div>
                  <img src={assetUrl +"/Category/image2_1920x.webp"} alt=""/>
              </div>
              <div>
                  <img src={assetUrl +"/Category/image3_1920x.webp"} alt=""/>
              </div>
              
              <div>
                  <img src={assetUrl +"/Category/image1_1920x.webp"} alt=""/>
              </div>
              <div>
                  <img src={assetUrl +"/Category/image2_1920x.webp"} alt=""/>
              </div>
              <div>
                  <img src={assetUrl +"/Category/image3_1920x.webp"} alt=""/>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Categories