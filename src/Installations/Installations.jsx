import React from 'react';
import { useLoaderData } from 'react-router';
import CardsInstall from '../pages/CardsInstall/CardsInstall';

const Installations = () => {
  const data=useLoaderData();
   console.log(data); 
    return (
        <div className='bg-white  '>
             <div className='text-center text-black'>
                        <h1 className=' text-4xl'>Trending Apps</h1>
                    <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                    </div>
                        <div className='flex justify-between items-center  m-2 w-11/12 mx-auto'>
                <div className='text-black'>({data.length}) Apps Found</div>
                 <div className=''>
                    <fieldset className="fieldset ">
  
  <select defaultValue="Sort" className="select bg-white text-black border border-gray-300">
    <option disabled={true}>Sort</option>
    <option>Sort By Size</option>
    <option>Sort By Name</option>
    <option>Sort By Company</option>
  </select>
 
</fieldset>
            </div> 
           
        </div>
          <div className=''>
                <CardsInstall/>
            </div>
        </div>
    );
};

export default Installations;