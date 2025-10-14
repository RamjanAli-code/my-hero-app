import React, { useEffect, useState } from 'react';
import CardsInstall from '../pages/CardsInstall/CardsInstall';

const Installations = () => {
  const [installed, setInstalled] = useState([]);
  const [sorted, setSorted] = useState('');

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem('installList')) || [];
       setInstalled(apps);
       }, []);
    const handleUpdate = (newList) => {
      setInstalled(newList);
  }
     const handleSort = (val) => {
    let sortedApps = [...installed];
    if (val === 'Low') {
      sortedApps.sort((a, b) => a.size - b.size);
    }
       else if (val === 'High') {
      sortedApps.sort((a, b) =>  b.size - a.size);
    }
    setInstalled(sortedApps);
    setSorted(val);
  }
    return (
        <div className='bg-white  '>
             <div className='text-center text-black'>
                        <h1 className=' text-4xl'>Trending Apps</h1>
                    <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                    </div>
                        <div className='flex justify-between items-center  m-2 w-11/12 mx-auto'>
                <div className='text-black'>({installed.length}) Apps Found</div>
                 <div className=''>
                    <fieldset className="fieldset ">
  
  <select value={sorted}  onChange={(e) => handleSort(e.target.value)} defaultValue="Sort" className="select bg-white text-black border border-gray-300">
    <option >Sort</option>
    <option value="Low">Low-to-High</option>
    <option value="High">High-to-Low</option>
  </select>
 
</fieldset>
            </div> 
           
        </div>
          <div className=''>
 <CardsInstall apps={installed} updateApps={handleUpdate} />
               
            </div>
        </div>
    );
};

export default Installations;