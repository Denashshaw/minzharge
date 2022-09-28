import React from 'react'

function Categories() {
  return (
    <section>
        <div className='p-6 md:p-12'>
        <h1 className='text-2xl font-bold'>TOP CATEGORIES</h1>
            <hr />
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-16 md:ml-[50px] nopadding'>
              <div className=''>
                  <img src="/assets/Category/image1_1920x.webp" alt="" className=''/>
              </div>
              <div className=''>
                  <img src="/assets/Category/image2_1920x.webp" alt="" className=''/>
              </div>
              <div className=''>
                  <img src="/assets/Category/image3_1920x.webp" alt="" className=''/>
              </div>
              
              <div className=''>
                  <img src="/assets/Category/image1_1920x.webp" alt="" className=''/>
              </div>
              <div className=''>
                  <img src="/assets/Category/image2_1920x.webp" alt="" className=''/>
              </div>
              <div className=''>
                  <img src="/assets/Category/image3_1920x.webp" alt="" className=''/>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Categories