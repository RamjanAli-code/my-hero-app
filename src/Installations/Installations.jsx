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
   const parseDownloads = (d) => {
    if (typeof d === "string") {
      if (d.includes("K")) return parseFloat(d) * 1000;
      if (d.includes("M")) return parseFloat(d) * 1000000;
    }
    return parseFloat(d);
  };
     const handleSort = (val) => {
    let sortedApps = [...installed];
    if (val === 'Low') {
      sortedApps.sort((a, b) => parseDownloads(a.downloads)- parseDownloads(b.downloads));
    }
       else if (val === 'High') {
      sortedApps.sort((a, b) =>  parseDownloads(b.downloads)- parseDownloads(a.downloads));
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
  
  <select value={sorted}  onChange={(e) => handleSort(e.target.value)} defaultValue="sort" className="select bg-white text-black border border-gray-300">
    <option >Sort</option>
    <option value="Low">Low-to-High</option>
    <option value="High">High-to-Low</option>
  </select>
 
</fieldset>
            </div> 
           
        </div>
          <div className=' '>
 <CardsInstall apps={installed} updateApps={handleUpdate} />
               
            </div>
        </div>
    );
};

export default Installations;