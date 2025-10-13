import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';  
import Banner from '../../Components/Banner/Banner';
import Apps from '../Apps/Apps';

const Home = () => {
    const navigate=useNavigate();
    const data=useLoaderData();
    console.log(data);
    return (
        <div className=''>
           
            <Banner></Banner>
             <h1 className='font-bold text-black text-4xl items-center text-center'>Trending Apps</h1>
            <p className='text-gray-500 items-center text-center p-4'>Explore All Trending Apps on the Market developed by us</p>
            <div className='w-11/12 mx-auto'>
             <Apps data={data.slice(0,8)}></Apps>
             <div className=' flex items-center justify-center mt-10 '><button onClick={()=>navigate('/Allapps')} className=" bg-[linear-gradient(125.07deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] text-white border-0 p-2 w-1/5 text-center"><span>Show All</span></button>
            </div>
            </div>
            
        </div>
    );
};

export default Home;
