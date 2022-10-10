import React, { useState, useEffect, useRef } from "react";
import Categories from "./Categories";
import Features from "./Features";

const featuredProducts = [
  {
    image: "https://via.placeholder.com/240/771796",
    header1: "Front original",
    header2: "design cap",
    price: "$49",
    description: "As well as being game-changers when it comes to techinal innovation, Front has some of the best selling cap in its locker"
  },
  {
    image: "https://via.placeholder.com/240/24f355",
    header1: "Front original2",
    header2: "design cap2",
    price: "$59",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat hic esse sapiente, nisi deserunt sit fugiat quis facilis cumque libero quae in fuga distinctio qui! Sint vitae est non corporis!"
  },
  {
    image: "https://via.placeholder.com/240/92c951",
    header1: "Front original3",
    header2: "design cap3",
    price: "$69",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eligendi ab quidem dolore corrupti? Libero, dicta sequi mollitia fugit beatae eos molestiae porro illo, iste corporis cumque assumenda dignissimos reprehenderit?"
  }
];

let count = 0;
let slideInterval;
export default function Home({data:open}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      // handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full select-none">
      <div className="flex-row sm:flex gap-5 bg-slate-300 p-12">
        {/* extra div for space consuption in responsiveness */}
        <div className="md:w-1/2 sm:w-2/12 w-0"></div>
        
        <div className="md:w-1/2 sm:w-1/3 w-100 flex justify-center">
          <img src={featuredProducts[currentIndex].image} className='w-[250px] h-[250px] object-cover' alt="" />
        </div>
        <div className="md:w-1/2 sm:w-1/2 w-100 sm:text-left text-center">

        <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">{featuredProducts[currentIndex].header1}
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{featuredProducts[currentIndex].header2}
            </h1>
            <p className="mb-8 leading-relaxed">{featuredProducts[currentIndex].description}</p>
            <div className="">
              <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-3xl text-xs">{featuredProducts[currentIndex].price} - Add to Cart</button>
            </div>
        </div>

        {/* extra div for space consuption in responsiveness */}
      <div className="md:w-1/3 sm:w-2/12 w-0"></div>
      </div>

      {/* slidebar change button */}
      <div className={open ? 'hidden' : 'absolute w-full top-52 px-5 flex justify-between items-center'}>
        <button
          className="bg-white text-slate-500 p-2 rounded-full cursor-pointer z-0"
          onClick={handleOnPrevClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

          <button
            className="bg-white text-slate-500 p-2 rounded-full cursor-pointer z-0"
            onClick={handleOnNextClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
      </div>

      
      <Features/>
      {/* Header 3 column layout */}
      <div className="sm:flex justify-center gap-16 items-start p-12 bg-blue-100">
          <div className="flex w-64">
            <div className="pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>

            </div>
            <div className="">
                <h1 className="font-medium">Secure checkout</h1>
                <span className="text-xs text-slate-500 break-words">Guaranted safe checkout</span>
            </div>
          </div>
          
          <div className="flex w-64">
            <div className="pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>

            </div>
            <div className="">
            <h1 className="font-medium">30 Days return</h1>
                <span className="text-xs text-slate-500 break-words">We offer you a full refund within 30 days of purchase</span>
            </div>
          </div>
          
          <div className="flex w-64">
            <div className="pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>

            </div>
            <div className="">
            <h1 className="font-medium">Free Shipping</h1>
                <span className="text-xs text-slate-500 break-words">Automatically receive free standard shipping on every order.</span>
            </div>
          </div>
      </div>
      <Categories/>
    </div>
  );
}