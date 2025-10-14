import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet,  useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Spin from '../Spin/Spin';



const Root = () => {
    const navigation=useNavigation();
    return (
        <div>
         <Navbar/>
        <main className="p-0">
       <div>
        {navigation.state==='loading'&&<Spin/>}
         <Outlet />
       </div>
        </main>
       <Footer/>
        </div>
    );
};

export default Root;
