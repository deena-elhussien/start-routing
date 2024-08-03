import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
    return (


    
    <div className='row  bg-[#2C3E50] fixed top-0 left-0 right-0 p-[30px] '>
    
        
        <div className="left-side ps-5">
            <Link className= 'text-4xl font-bold'>Start FrameWork</Link>
        </div>
            
            <ul className='row w-1/3 pe-5  '>
                <li className='font-bold'>
                    <NavLink to='about'>About</NavLink>
                </li >
                <li  className='font-bold'>
                    <NavLink to='portfolio'>Portfolio</NavLink>
                </li>
                <li  className='font-bold'>
                    <NavLink to='contact'>Contact</NavLink>
                </li>
            </ul>
            
            {/* <button onClick={toggleMenu} className="text-white lg:hidden focus:outline-none">
                <i className='fa-solid fa-bars'></i>
            </button> */}
        

            
            
    </div>


    
    
  )
}
