import React   from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import { useNavigate } from 'react-router';

const App = ({oneApp}) => {
 const navigate=useNavigate();
 const handleClick = () => {
  navigate(`/description/${oneApp.id}`);
};
    return (

            <div onClick={handleClick}   className='card  p-2 shadow-lg rounded-lg bg-white '>
                <div className='flex items-center justify-center'><img className='h-[200px] w-11/12  flex items-center justify-center   rounded-xl' src={oneApp.image} alt={oneApp.title} /></div>
                  <h2 className='text-2xl text-black items-start w-11/12 mx-auto'>{oneApp.title}</h2>
               <div className='flex justify-between  w-11/12 mx-auto'>
              
               <div className=' rounded-sm p-[2px] text-green-400 bg-green-200 flex items-center justify-center '><img className='h-[20px]' src={download} alt="" /><span className='ml-2'>9M</span></div> 
               <div className='rounded-sm p-[2px] text-amber-500 bg-amber-200 flex items-center justify-center '><img className='h-[20px]' src={rating} alt="" /><span className='ml-2'>5</span></div>
               </div>
               
            </div>
          
    );
};

export default App;
