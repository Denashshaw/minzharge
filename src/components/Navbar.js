import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {FaAlignJustify, FaTimes} from 'react-icons/fa'

// setting url dynamically based on local or prod server
const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/': '/minzharge/assets';
const homePath = process.env.NODE_ENV === 'production' ? '/minzharge': '/';

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
            <NavLink to={homePath} end>
                <img src={assetUrl+"/Brands_Logos/ahrma.jpg"} alt="Minzharge Logo" width={65}/>
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
                {open ? (<>
                    <FaTimes size={25} className='z-10 text-white' onClick={handleOpen}/>
                    <div className={'absolute top-0 left-0 w-full min-h-screen bg-black text-white flex flex-col justify-center items-center text-3xl'}>
                        <NavLink className='navClass' to={homePath} end style={mobNavStyle} onClick={() => setOpen(!open)}>Home</NavLink>
                        <NavLink className='navClass' to='/works' style={mobNavStyle} onClick={() => setOpen(!open)}>How it Works</NavLink>
                        <NavLink className='navClass' to='/buyev' style={mobNavStyle} onClick={() => setOpen(!open)}>Buy EV</NavLink>
                        <NavLink className='navClass' to='/blogs' style={mobNavStyle} onClick={() => setOpen(!open)}>Blogs</NavLink>
                        <NavLink className='navClass' to='/dealers' style={mobNavStyle} onClick={() => setOpen(!open)}>Dealers</NavLink>
                        <NavLink className='navClass' to='/contact' style={mobNavStyle} onClick={() => setOpen(!open)}>Call Us</NavLink>
                        <NavLink className='navClass' to='/products/all' style={mobNavStyle} onClick={() => setOpen(!open)}>Products</NavLink>
                    </div>
                    </>) : <FaAlignJustify size={25} className='z-10 text-black' onClick={handleOpen}/>}
        </div>
    </div>
    </>
  )
}

export default Navbar