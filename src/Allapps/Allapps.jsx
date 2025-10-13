import React, { useState } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router';
import Apps from '../pages/Apps/Apps';
import { Search } from 'lucide-react';
import ErrorApp from '../ErrorApp/ErrorApp';

const Allapps = () => {
    const data=useLoaderData();
    const [search,setSearch]=useState('');
    const navigate=useNavigate();
    const filterData=data.filter(app=>app.title.toLowerCase().includes(search.toLowerCase()));
    if(search&&filterData.length===0){
        navigate('notfound');
    }
    const back=()=>{
        setSearch('');
        navigate('/Allapps');
    };
    return (
         <div className=''>
           
                    <div className='text-center'>
                        <h1 className='text-amber-400 text-4xl'>Trending Apps</h1>
                    <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                    </div>
                     <div className='flex justify-between m-2'>
                <div className='text-black'>({filterData.length}) Apps Found</div>
                <div className='text-black  border-gray-500 flex gap-1  items-center border'> <Search className='h-4 border-0' /><input  type="Search" placeholder='Search' value={search} onChange={e => setSearch(e.target.value)} /></div>
            </div>
                    <div>
                        {filterData.length>0?(<Apps data={filterData}></Apps>):(<Outlet context={{back}}/>)}
                    </div>
                </div>
    );
};

export default Allapps;
