import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const Navbar = () =>{
     const [nav, setNav] = useState(false)
     const handleClick = () => setNav(!nav)
     const handleClose = () => setNav(!nav)
  return (
    <div className=' scrollbar-none w-screen h-[80px] z-10 bg-indigo-700 text-white drop-shadow-lg '>
       <div className=' px-2 flex justify-between items-center w-full h-full scrollbar-hide'>
            <div className= 'flex items-center'>
                <h1 className=' text-3xl font-bold mr-4 sm:text-4xl cursor-pointer'> technoloGY. </h1>
                <ul className='hidden md:flex cursor-pointer mx-36'>
                     <li className=' hover:font-bold'>
                          <Link onClick={handleClose}  to="home"  smooth={true} offset={50} duration={500}>Home</Link>
                     </li>
                     <li className=' hover:font-bold'>
                          <Link onClick={handleClose}  to="about"  smooth={true} offset={50} duration={500}>About Us</Link>
                     </li>
                     <li className=' hover:font-bold'>
                          <Link  onClick={handleClose} to="support"  smooth={true} offset={50} duration={500}>Support</Link>
                     </li>
                     <li className=' hover:font-bold'>
                          <Link  onClick={handleClose} to="service"  smooth={true} offset={50} duration={500}>Services</Link>
                     </li>
                     <li className=' hover:font-bold'>
                          <Link  to="price"  smooth={true} offset={50} duration={500}>Pricing</Link>
                     </li>
                    
                </ul>
            </div>   
            <div className=' hidden md:flex p-10'>
                 <button className=' px-4 bg-transparent text-white hover:font-bold border-none'>Sign In</button> 
                 <button className=' px-4 rounded-full bg-white  hover:bg-slate-100 text-gray-900'> Register</button>
            </div> 
            <div className=' md:hidden cursor-pointer w-10' onClick={handleClick}>
                 {!nav ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} /> }
            </div>   
       </div>
       <ul className={!nav ? 'hidden' : ' absolute bg-indigo-700 w-full pz-8 md:hidden'}>
                <li className=' hover:font-bold border-b-2 border-zinc-300 w-full cursor-pointer'>
                      <Link onClick={handleClose}  to="home"  smooth={true}  duration={500}>Home</Link>
                </li>
                <li className=' hover:font-bold border-b-2 border-zinc-300 w-full cursor-pointer'>
                      <Link onClick={handleClose}  to="about"  smooth={true} offset={-200} duration={500}>About Us</Link>
                </li>
                <li className=' hover:font-bold border-b-2 border-zinc-300 w-full cursor-pointer'>
                      <Link onClick={handleClose}  to="support"  smooth={true} offset={-50} duration={500}>Support</Link>
                </li>
                <li className=' hover:font-bold border-b-2 border-zinc-300 w-full cursor-pointer'>
                      <Link onClick={handleClose}  to="service"  smooth={true} offset={-100} duration={500}>Services</Link>
                </li>
                <li className=' hover:font-bold border-b-2 border-zinc-300 w-full cursor-pointer'>
                      <Link  to="price"  smooth={true} offset={-50} duration={500}>Pricing</Link>
                </li>
             <div className=' flex my-4 mx-3'>
                 <button className=' px-4 rounded-full  bg-white text-black hover:bg-slate-100'> Register</button>
             </div>
       </ul>
    </div>
  );
}

export default Navbar;
