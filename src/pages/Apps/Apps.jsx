import React from 'react';
import App from '../App/App';
const Apps=({data})=>{

    return (
    
    <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    data?.map((oneApp)=>(
                    <App key={oneApp.id} oneApp={oneApp}/>
                     ) )
               }
                </div>
    </div>
    );
};

export default Apps;