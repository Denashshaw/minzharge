import React, { createContext, useContext, useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import {FaAlignJustify, FaTimes} from 'react-icons/fa'
import { NavbarContext } from '../context/NavbarStatus';

// setting url dynamically based on local or prod server
const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/': '/minzharge/assets';
const homePath = process.env.NODE_ENV === 'production' ? '/minzharge': '/';

function Navbar() {
    const {expand, setExpand} = useContext(NavbarContext)

    const navStyle = ({isActive}) => ({
        color: isActive ? 'green' : 'black'
    })
    
    const mobNavStyle = ({isActive}) => ({
        color: isActive ? 'yellow' : 'white'
    })

    const handleOpen = () => {
        setExpand(!expand);
    }
    console.log('navbar', expand);

  return (
    <>
    <div className='flex justify-between'>
        <div className='ml-5 md:ml-12'>
            <NavLink to={homePath} end>
                <img src={assetUrl+"/logo-small.png"} alt="Minzharge Logo" width={200}/>
            </NavLink>
        </div>
        {/* For Larger screens laptop and desktops */}
        <div className='hidden md:flex'>
            <NavLink className='navClass' to={homePath} end style={navStyle}>Home</NavLink>
            <NavLink className='navClass' to='/works' style={navStyle}>How it Works</NavLink>
            <NavLink className='navClass' to='/buyev' style={navStyle}>Buy EV</NavLink>
            <NavLink className='navClass' to='/blogs' style={navStyle}>Blogs</NavLink>
            <NavLink className='navClass' to='/dealers' style={navStyle}>Dealers</NavLink>
            <NavLink className='navClass' to='/products/all' style={navStyle}>Products</NavLink>
        </div>
        <div className='hidden md:flex'>
        <NavLink className='navClass' to='/contact' style={navStyle}>Call Us</NavLink>
        </div>

        {/* For Smaller screens mobiles and ipads */}
        <div className='flex md:hidden justify-center items-center p-4'>
                {expand ? (<>
                    <FaTimes size={25} className='z-10 text-white' onClick={handleOpen}/>
                    <div className={'absolute top-0 left-0 w-full min-h-screen bg-black text-white flex flex-col justify-center items-center text-3xl'}>
                        <NavLink className='navClass' to={homePath} end style={mobNavStyle} onClick={() => setExpand(!expand)}>Home</NavLink>
                        <NavLink className='navClass' to='/works' style={mobNavStyle} onClick={() => setExpand(!expand)}>How it Works</NavLink>
                        <NavLink className='navClass' to='/buyev' style={mobNavStyle} onClick={() => setExpand(!expand)}>Buy EV</NavLink>
                        <NavLink className='navClass' to='/blogs' style={mobNavStyle} onClick={() => setExpand(!expand)}>Blogs</NavLink>
                        <NavLink className='navClass' to='/dealers' style={mobNavStyle} onClick={() => setExpand(!expand)}>Dealers</NavLink>
                        <NavLink className='navClass' to='/contact' style={mobNavStyle} onClick={() => setExpand(!expand)}>Call Us</NavLink>
                        <NavLink className='navClass' to='/products/all' style={mobNavStyle} onClick={() => setExpand(!expand)}>Products</NavLink>
                    </div>
                    </>) : <FaAlignJustify size={25} className='z-10 text-black' onClick={handleOpen}/>}
        </div>
    </div>
    </>
  )
}

export default Navbar