import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const Pricing = () => {
  return (
    <div name='price' className=' scrollbar-none w-full text-white my-24 overflow-x-hidden'>
        <div className=' scrollbar-hide w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'> </div>
        <div className=' max-w-1240px mx-auto py-12'>
           <div className=' text-center py-8 text-slate-300'>
              <h2 className=' font-bold text-5xl text-white uppercase'> Pricing</h2>
              <h3 className=' mt-3 font-bold text-3xl text-white'> The exact price of your product</h3>
              <p className=' mt-2 text-white'> 
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                 incididunt ut labore et dolore magna aliqua.
              </p>
           </div> 
           <div className=' scrollbar-none grid md:grid-cols-2'>
               <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl '>
                  <div className=' uppercase px-3 py-2 cursor-pointer'>
                     <span className=' bg-indigo-400 rounded-2xl p-2  text-indigo-800 text-sm relative'>Standard</span>
                  </div>
                  <div>
                       <p className=' text-3xl font-bold py-4 flex '> $90 <span className=' text-xl flex flex-col justify-end'>/mo</span></p>
                  </div>
                      <p className='uppercase text-slate-400'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className=' cursor-pointer'>
                       <p> <FontAwesomeIcon icon={faCheck} className=' text-indigo-400'/> Lorem ipsum dolor sit amet.</p>
                       <p> <FontAwesomeIcon icon={faCheck} className=' text-indigo-400'/> Lorem ipsum dolor sit.</p>
                       <p> <FontAwesomeIcon icon={faCheck} className=' text-indigo-400'/> Lorem ipsum dolor.</p>
                       <p> <FontAwesomeIcon icon={faCheck} className=' text-indigo-400'/> Lorem ipsum dolor sit amet.</p>
                       <p> <FontAwesomeIcon icon={faCheck} className=' text-indigo-400'/> Lorem ipsum dolor sit amet.</p>
                       <button className=' w-full py-4 my-4 rounded-md bg-indigo-500 hover:bg-indigo-900 cursor-pointer'> Get Started</button>
                  
                  </div> 
               </div>
               <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl '>
                  <div className=' uppercase px-3 py-2 cursor-pointer'>
                     <span className=' bg-indigo-400 rounded-2xl p-2  text-indigo-800 text-sm relative'>Premium</span>
                  </div>
                  <div>
                       <p className=' text-3xl font-bold py-4 flex '> $50 <span className=' text-xl flex flex-col justify-end'>/yearly</span></p>
                  </div>
                      <p className='uppercase text-slate-400'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className=' cursor-pointer'>
                       <p> <FontAwesomeIcon icon={faCheck} className=' text-indigo-400'/> Lorem ipsum dolor sit amet.</p>
                       <p> <FontAwesomeIcon icon={faCheck} className=' text-indigo-400'/> Lorem ipsum dolor sit.</p>
                       <p> <FontAwesomeIcon icon={faCheck} className=' text-indigo-400'/> Lorem ipsum dolor.</p>
                       <p> <FontAwesomeIcon icon={faCheck} className=' text-indigo-400'/> Lorem ipsum dolor sit amet.</p>
                       <p> <FontAwesomeIcon icon={faCheck} className=' text-indigo-400'/> Lorem ipsum dolor sit amet.</p>
                       <button className=' w-full py-4 my-4 rounded-md bg-indigo-500 hover:bg-indigo-900 cursor-pointer'> Get Started</button>
                  </div> 
               </div>
           </div>
        </div>
    </div>
  );
}

export default Pricing;
