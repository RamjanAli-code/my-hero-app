import React from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardsInstall = ({updateApps,apps}) => {

  const uninstall = (id,title) => {
    const updated = apps.filter(item => item.id !== id);
    localStorage.setItem('installList', JSON.stringify(updated));
    toast.success(`${title} uninstalled!`, { autoClose: 1500 });
    updateApps(updated);
  }
    return (
        <div className="  w-11/12 mx-auto">
   {apps.map(app => (
  <div key={app.id} className="card-body card-border card mt-5  text-black b  ">
  <div className=' flex justify-between items-center '>
     <div className='flex  gap-5 '> 
     <div><img className='h-15 rounded-xl w-15' src={app.image} alt="" /></div>
   <div>
     <h2 className="card-title text-black">{app.title}</h2>
        <div className='flex gap-3  w-full mx-auto p-1'>
                      
                       <div className=' rounded-sm p-[2px]  text-green-300 flex items-center justify-center '><img className='h-[20px]' src={download} alt="" /><span className='ml-2'>{app.downloads}</span></div> 
                       <div className='rounded-sm p-[2px] text-amber-500  flex items-center justify-center '><img className='h-[20px]' src={rating} alt="" /><span className='ml-2'>{app.ratingAvg}</span></div>
                        <div className='text-gray-400'>{app.size}MB</div>
    </div>
   </div>
   </div>
    <div className="card-actions justify-end">
      <button onClick={() => uninstall(app.id,app.title)} className="btn btn-primary">UnInstall</button>
     
    </div>
  </div>
  </div>
   ))}
   <ToastContainer />
</div>
    );
};

export default CardsInstall;
