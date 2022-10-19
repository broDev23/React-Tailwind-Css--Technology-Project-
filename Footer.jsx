import React from 'react';
const Footer = () => {
  return (
    <div className=' w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2 overflow-x-hidden'>
        <div className='scrollbar-hide max-w-[1240px] mx-auto grid lg:grid-cols-6 sm-grid-cols-2 md:grid-cols-2 border-b-2 border-gray-600 py-8'>
           <div>
              <h4 className=' font-bold uppercase pt-2'> Solutions</h4>
              <ul>
                 <li className='py-1'>Marketing</li>
                 <li className='py-1'>Analytics</li>
                 <li className='py-1'>Data Control</li>
                 <li className='py-1'>Cloud Control</li>
              </ul>
           </div>
           <div>
              <h4 className=' font-bold uppercase pt-2'> Support</h4>
              <ul>
                 <li className='py-1'>Pricing</li>
                 <li className='py-1'>Documentation</li>
                 <li className='py-1'>Guides</li>
                 <li className='py-1'>Api Standard</li>
              </ul>
           </div>
           <div>
              <h4 className=' font-bold uppercase pt-2'> Company</h4>
              <ul>
                 <li className='py-1'>About</li>
                 <li className='py-1'>Blog</li>
                 <li className='py-1'>Jobs</li>
                 <li className='py-1'>Partners</li>
              </ul>
           </div>
           <div>
              <h4 className=' font-bold uppercase pt-2'> Legals</h4>
              <ul>
                 <li className='py-1'>Conditions</li>
                 <li className='py-1'>Privacy</li>
                 <li className='py-1'>Terms</li>
                 <li className='py-1'>Policies</li>
              </ul>
           </div>
           <div className=' col-span-2 pt-8 md:pt-2'>
               <p className=' font-bold uppercase'> Subscribe to our newsletter</p>
               <p className=' py-4'>The lates movies, articles and resources, sent to your weekly</p>
               <form className=' flex flex-col sm:flex-row'>
                   <input type='email' className=' rounded-lg w-full p-2 mr-4 mb-4'/>
                   <button className=' bg-green-700 hover:bg-green-900 p-2 mb-4'>Subscribe</button>
               </form>
           </div>
        </div>
        <div className=' text-center mt-3 '>
           <p>2022 technoloGY workflow, LLC. All rights reserved</p>
        </div>   
    </div>
  );
}

export default Footer;
