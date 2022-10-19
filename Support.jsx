import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faGlobe, faArrowRight,faGears } from '@fortawesome/free-solid-svg-icons'
import custspt from '../assets/customer_support.jpg'
const Support =() => {
  return (
    <div name='support' className=' scrollbar-hide w-screen mt-24 overflow-x-hidden'>
         <div className='  w-full h-[700px] bg-gray-900/90 absolute'>
           <img src={custspt} alt='' className=' w-full h-full object-cover mix-blend-overlay'></img>
         </div>
         <div className=' max-w-[1240px] mx-auto text-white relative'>
            <div className=' px-4 py-12'>
               <h2 className=' pt-8 text-slate-300 uppercase text-center font-bold text-5xl'>Support</h2>
               <h3 className=' text-3xl font-bold text-center text-slate-300 pt-3'> Finding the right team</h3>
               <p className='pt-3 text-2xl text-slate-300'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
                   ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?
               </p>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 relative gap-x-2 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
               <div className=' bg-white rounded-xl shadow-2xl'>
                   <div className='p-8'>
                      <FontAwesomeIcon icon={faPhone}  className=' mt-[-4rem] bg-indigo-600 p-3 text-white rounded-md'/>
                      <h3 className=' font-bold text-2xl my-6'>Sales</h3>
                      <p className=' text-gray-500 text-xl'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                         incididunt ut labore et dolore magna aliqua ?
                      </p>
                   </div> 
                   <div className='mx-6 bg-slate-100 pl-2 py-4'>
                       <p className=' text-indigo-700 cursor-pointer'> Contact Us <FontAwesomeIcon icon={faArrowRight}/></p>
                   </div>
               </div>
               <div className=' bg-white rounded-xl shadow-2xl'>
                   <div className='p-8'>
                      <FontAwesomeIcon icon={faGears}  className=' mt-[-4rem] bg-indigo-600 p-3 text-white rounded-md'/>
                      <h3 className=' font-bold text-2xl my-6'>Media Quries</h3>
                      <p className=' text-gray-500 text-xl'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                         incididunt ut labore et dolore magna aliqua ?
                      </p>
                   </div> 
                   <div className='mx-6 bg-slate-100 pl-2 py-4'>
                       <p className=' text-indigo-700 cursor-pointer'> Contact Us <FontAwesomeIcon icon={faArrowRight}/></p>
                   </div>
               </div>
               <div className=' bg-white rounded-xl shadow-2xl'>
                   <div className='p-8'>
                      <FontAwesomeIcon icon={faGlobe}  className=' mt-[-4rem] bg-indigo-600 p-3 text-white rounded-md'/>
                      <h3 className=' font-bold text-2xl my-6'>Technical Support</h3>
                      <p className=' text-gray-500 text-xl'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                         incididunt ut labore et dolore magna aliqua ?
                      </p>
                   </div> 
                   <div className='mx-6 bg-slate-100 pl-2 py-4'>
                       <p className=' text-indigo-700 cursor-pointer'> Contact Us <FontAwesomeIcon icon={faArrowRight}/></p>
                   </div>
               </div>
            </div>
         </div>
    </div>
  );
}

export default Support;
