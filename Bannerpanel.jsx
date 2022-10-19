import React from 'react';
import bgimg from'../assets/techmanagement.png';
function Bannerpanel() {
  return (
    <div name='home' className='scrollbar-none scrollbar-hide w-screen h-screen bg-zinc-200 flex flex-col justify-between scroll-smooth  '>
         <div className=' scrollbar-none grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className=' flex flex-col  md:items-start justify-center w-full'>
                <h1 className=' font-bold font-serif text-3xl'> technoloGY Management</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                   tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className=' w-28 py-3 rounded-full hover:bg-indigo-900 my-4'>Get Started</button>
                
            </div>
            <div className='w-[75%] md:mx-24 space-y-20'>
                
                   
                <img className=' lg:w-[600px] lg:h-600px] md:w-[400px] md:h-400px] sm:w-[600px] sm:h-600px]  rounded-md' src={bgimg} alt=""></img>
                   
                
            </div>
            
         </div>
    </div>
  );
}

export default Bannerpanel;
