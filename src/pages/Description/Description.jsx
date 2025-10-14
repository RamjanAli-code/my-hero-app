 import React from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import review from '../../assets/icon-review.png';
import {  useLoaderData, useNavigate, } from 'react-router';
import Rating from '../Rating/Rating';
import { ToastContainer, toast } from 'react-toastify';

const Description = () => {
  const data=useLoaderData();
 const navigate = useNavigate();

  const install = () => {
    const existing = JSON.parse(localStorage.getItem('installList')) || [];


      const updatedList = [...existing, data];
      localStorage.setItem('installList', JSON.stringify(updatedList));
      // alert(`${data.title} installed successfully!`);
      toast.success(`${data.title} installed!`, { autoClose: 1500 });
   setTimeout(()=> navigate(`/Installations/${data.id}`),1500);
  }

   return (

       <div className='w-11/12 mx-auto'>
 <div className="flex  items-center gap-5 md:gap-15 p-4">
          <img src={data.image} alt={data.title} className="w-1/3 h-2/3 md:h-[300px]  object-cover rounded-lg mb-4" />
          <div className='flex flex-col h-2/3 w-2/3  md:w-6/12'>
            <h1 className="text-2xl font-bold mb-1 text-black">{data.title}</h1>
          <h3 className="text-gray-600 mb-4">
            Developed By <span className="font-medium text-violet-500">{data.companyName}</span>
          </h3>

          <div className="flex  items-start justify-start gap-4 mb-4 h-2/3 pt-2 pb-2 md:pt-10 md:pb-10">
            <div className="  w-8/12  md:w-9/12   flex flex-col items-start justify-start rounded-lg">
              <img src={download} alt="downloads" className=" mb-2" />
              <h4 className='text-gray-400'>Downloads</h4>
              <h1 className="text-xl font-bold text-black">{data.downloads}</h1>
            </div>
            <div className=" w-6/12 md:w-9/12  flex flex-col items-start justify-start rounded-lg">
              <img src={rating} alt="downloads" className=" mb-2" />
              <h4 className='text-gray-400'>Average Ratings</h4>
              <h1 className="text-xl font-bold text-black">{data.ratingAvg}K</h1>
            </div>
            <div className=" w-8/12 md:w-9/12  flex flex-col items-start justify-start rounded-lg">
              <img src={review} alt="downloads" className="mb-2" />
              <h4 className='text-gray-400'>Total Reviews</h4>
              <h1 className="text-xl font-bold text-black">{data.reviews}K</h1>
            </div>
          </div>

          <button onClick={install}  className="btn btn-primary w-6/12">Install Now ({data.size} MB)</button>
              <ToastContainer />
          </div>
        </div>
        <div className='text-black bg-green-600'>
          <Rating ratings={data.ratings}/>
        </div>
        <div>
          <h1 className='text-2xl font-bold pb-2 text-black'>Description</h1>
          <p className='text-gray-400'>{data.description}</p>
        </div>
       </div>
   );
};

export default Description;
