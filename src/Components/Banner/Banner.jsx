import React from 'react';
import hero from '../../assets/hero.png';
import { Play } from 'lucide-react';
import { FileUser } from 'lucide-react';
const Banner = () => {
    return (
       <div className="hero  min-h-screen flex flex-col items-center pt-20 mb-20">
 <div className='text-center w-[60%] '>
  <h1 className='text-5xl font-bold text text-black'>We Build <br /> <span className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
  <p className='text-gray-500 p-5 '>At HERO.IO ,we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
 </div>
     <div className="flex gap-6 p-5">
        <a href="https://play.google.com/store/apps?hl=en"
          className="flex items-center justify-center gap-2 p-2 border border-gray-400 text-black font-bold h-[40px] w-[150px] rounded hover:bg-gray-100 transition">
          <Play  />
          <span>Google Play</span>
        </a>
        <a href="https://www.apple.com/app-store/"
          className="flex items-center justify-center gap-2 p-2 border border-gray-400 text-black font-bold h-[40px] w-[150px] rounded hover:bg-gray-100 transition">
          <FileUser  />
          <span>App Store</span>
        </a>
      </div>

 <div><img className='' src={hero} alt="" /></div>
 <div className=' p-15 items-center text-center h-[620px] md:h-[300px] w-full bg-[linear-gradient(125.07deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] '> 
 <h1 className='text-3xl font-bold'>Trusted by Millions, Built for You</h1>
 <div className='w-11/12 mx-auto grid grid-cols-1  md:grid-cols-3 md:justify-around pt-5  '>
  <div className='  h-[150px] '>
    <h3 className='text-gray-400'>Total Downloads</h3>
    <h1 className='text-5xl font-bold p-2'>29.6M</h1>
    <p className='text-gray-400'>21% more than last month</p>
  </div>

 <div className='h-[150px] '>
    <h3 className='text-gray-400'>Total Reviews</h3>
    <h1 className='text-5xl font-bold p-2'>906K</h1>
    <p className='text-gray-400'>46% more than last month</p>
  </div>

  <div className='h-[150px] '>
    <h3 className='text-gray-400'>Active Apps</h3>
    <h1 className='text-5xl font-bold p-2'>132+</h1>
    <p className='text-gray-400'>31 more will Launch</p>
  </div>

 </div>
 </div> 
</div>
    );
};

export default Banner;
