import React from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';

const CardsInstall = () => {
    return (
        <div className="card card-border    w-11/12 mx-auto">
  <div className="card-body text-black b  ">
  <div className=' flex justify-between items-center '>
     <div className='flex  gap-5 '> 
     <div><img src={download} alt="" /></div>
   <div>
     <h2 className="card-title">Card Title</h2>
        <div className='flex gap-3  w-full mx-auto p-1'>
                      
                       <div className=' rounded-sm p-[2px] text-green-400 bg-green-200 flex items-center justify-center '><img className='h-[20px]' src={download} alt="" /><span className='ml-2'>9M</span></div> 
                       <div className='rounded-sm p-[2px] text-amber-500 bg-amber-200 flex items-center justify-center '><img className='h-[20px]' src={rating} alt="" /><span className='ml-2'>5</span></div>
                        <div className='text-gray-400'>250MB</div>
    </div>
   </div>
   </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">UnInstall</button>
    </div>
  </div>
  </div>
</div>
    );
};

export default CardsInstall;