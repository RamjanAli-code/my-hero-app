import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';

const CardsInstall = ({updateApps,apps}) => {

  const uninstall = (id) => {
    const updated = apps.filter(item => item.id !== id);
    localStorage.setItem('installList', JSON.stringify(updated));
    updateApps(updated);
  }
    return (
        <div className="  w-11/12 mx-auto">
   {apps.map(app => (
  <div className="card-body card-border card mt-5  text-black b  ">
  <div className=' flex justify-between items-center '>
     <div className='flex  gap-5 '> 
     <div><img className='h-15 rounded-xl w-15' src={app.image} alt="" /></div>
   <div>
     <h2 className="card-title text-black">{app.title}</h2>
        <div className='flex gap-3  w-full mx-auto p-1'>
                      
                       <div className=' rounded-sm p-[2px] text-green-400 bg-green-200 flex items-center justify-center '><img className='h-[20px]' src={download} alt="" /><span className='ml-2'>9M</span></div> 
                       <div className='rounded-sm p-[2px] text-amber-500 bg-amber-200 flex items-center justify-center '><img className='h-[20px]' src={rating} alt="" /><span className='ml-2'>5</span></div>
                        <div className='text-gray-400'>{app.size}MB</div>
    </div>
   </div>
   </div>
    <div className="card-actions justify-end">
      <button onClick={() => uninstall(app.id)} className="btn btn-primary">UnInstall</button>
    </div>
  </div>
  </div>
   ))}
</div>
    );
};

export default CardsInstall;





