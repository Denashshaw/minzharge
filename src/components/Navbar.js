import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {FaAlignJustify, FaTimes} from 'react-icons/fa'

function Navbar({getMenuData}) {
    const [open, setOpen] = useState(false)
    const navStyle = ({isActive}) => ({
        color: isActive ? 'green' : 'black'
    })
    
    const mobNavStyle = ({isActive}) => ({
        color: isActive ? 'yellow' : 'white'
    })

    const handleOpen = () => {
        setOpen(!open)
        getMenuData({open})
    }

  return (
    <>
    <div className='flex justify-between'>
        <div className='ml-5 md:ml-12'>
            <img src="/assets/Brands_Logos/ahrma.jpg" alt="Minzharge Logo" width={65}/>
        </div>
        {/* For Larger screens laptop and desktops */}
        <div className='hidden md:flex'>
            <NavLink className='navClass' to='/' end style={navStyle}>Home</NavLink>
            <NavLink className='navClass' to='/works' style={navStyle}>How it Works</NavLink>
            <NavLink className='navClass' to='/buyev' style={navStyle}>Buy EV</NavLink>
            <NavLink className='navClass' to='/blogs' style={navStyle}>Blogs</NavLink>
            <NavLink className='navClass' to='/dealers' style={navStyle}>Dealers</NavLink>
        </div>
        <div className='hidden md:flex'>
        <NavLink className='navClass' to='/contact' style={navStyle}>Call Us</NavLink>
        </div>

        {/* For Smaller screens mobiles and ipads */}
        <div className='flex md:hidden justify-center items-center p-4'>
                {open ? (<>
                    <FaTimes size={25} className='z-10 text-white' onClick={handleOpen}/>
                    <div className={'absolute top-0 left-0 w-full min-h-screen bg-black text-white flex flex-col justify-center items-center text-3xl'}>
                        <NavLink className='navClass' to='/' end style={mobNavStyle}>Home</NavLink>
                        <NavLink className='navClass' to='/works' style={mobNavStyle}>How it Works</NavLink>
                        <NavLink className='navClass' to='/buyev' style={mobNavStyle}>Buy EV</NavLink>
                        <NavLink className='navClass' to='/blogs' style={mobNavStyle}>Blogs</NavLink>
                        <NavLink className='navClass' to='/dealers' style={mobNavStyle}>Dealers</NavLink>
                        <NavLink className='navClass' to='/contact' style={mobNavStyle}>Call Us</NavLink>
                    </div>
                    </>) : <FaAlignJustify size={25} className='z-10 text-black' onClick={handleOpen}/>}
        </div>
    </div>
    </>
  )
}

export default Navbar