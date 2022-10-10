import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

function Products() {
    // const [selected, setSelected] = useState(false)
    // useEffect(() => {

    // }, [])

    const navStyle = ({isActive}) => ({
        // color: isActive ? 'green' : 'black',
        backgroundColor: isActive ? 'green' : 'white',
        color: isActive ? 'white' : 'black',
        borderRadius: '50px',
        fontSize: '13px',
        width: '120px',
        height: '35px',
        textAlign: "center"
    })
    
  return (
    <>
    <div className='flex sm:justify-center flex-wrap my-10'>
            <NavLink className='p-2 m-2 md:m-5' to='/products/all' end style={navStyle}>All Brands</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='/products/nexu' end style={navStyle}>NEXU</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='/products/rithul' style={navStyle}>RITHUL FORK</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='/products/dexpress' style={navStyle}>DEXPRESS</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='/products/tarrk' style={navStyle}>TAARK</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='/products/gempai' style={navStyle}>GEMOPAI</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='/products/semzy' style={navStyle}>SEMZY</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='/products/battre' style={navStyle}>Batt:RE</NavLink>
    </div>
        <Outlet />
    <div className='mb-20'></div>
    </>
  )
}

export default Products