import React from 'react';

const About = () => {
  return (
    <div name='about' className=' scrollbar-none w-full my-32 '>
        <div className=' max-w-[1240px] mx-auto scrollbar-hide overflow-x-hidden'>
          <div className=' text-center'>
             <h2 className='text-5xl font-bold'> Trusted by people across the world</h2>
             <p className=' text-3xl py-6 text-gray-700'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                 ut labore et dolore magna aliqua.
             </p>
          </div>
          <div className='scrollbar-none grid md:grid-cols-3 gap-1 px-2 text-center'>
             <div className=' border py-8 rounded-xl shadow-xl '>
                 <p className=' text-6xl font-bold text-indigo-600'>100%</p>
                 <p className=' text-gray-400 mt-2'> Completion</p>
             </div>
             <div className=' border py-8 rounded-xl shadow-xl '>
                 <p className=' text-6xl font-bold text-indigo-600'>24/7</p>
                 <p className=' text-gray-400 mt-2'> Delivery</p>
             </div>
             <div className=' border py-8 rounded-xl shadow-xl '>
                 <p className=' text-6xl font-bold text-indigo-600'>500k</p>
                 <p className=' text-gray-400 mt-2'> Transaction</p>
             </div>
          </div>
        </div>
    </div>
  );
}

export default About;
