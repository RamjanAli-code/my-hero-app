import React from 'react';
import { Github } from 'lucide-react';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router';


const Navbar = () => {

    return (
 <div className="navbar bg-white shadow-sm mx-auto w-11/12 text-black ">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
        <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow text-gray-900">
        <li><NavLink>
          <NavLink to="/" className={({isActive})=>isActive?'text-purple-600  underline underline-offset-2':''}>Home</NavLink>
          </NavLink></li>
        <li>
          <NavLink to="/Allapps"  className={({isActive})=>isActive?'text-purple-600  underline underline-offset-2':''}>Apps</NavLink>

        </li>
        <li>
         <NavLink to="/Installations/:id" className={({isActive})=>isActive?'text-purple-600  underline underline-offset-2':''}>Installations</NavLink>
        </li>
      </ul>
        
    </div>
    <Link to="/" className="btn btn-ghost text-xl"><img className='h-[40px] w-[40px]' src={logo} alt="" /><span className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent'>HERO.IO</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex text-gray-900">
    <ul className="menu menu-horizontal px-1">
     <li>
          <NavLink to="/" className={({isActive})=>isActive?'text-purple-600  underline underline-offset-2':''}>Home</NavLink>
          </li>
      <li>
     <NavLink to="/Allapps"  className={({isActive})=>isActive?'text-purple-600  underline underline-offset-2':''}>Apps</NavLink>
      </li>
   <li><NavLink to="/Installations/:id" className={({isActive})=>isActive?'text-purple-600  underline underline-offset-2':''}>Installations</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/' className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] text-white border-0"><Github /><span>Contribute</span></a>
  </div>
</div>
    );
};

export default Navbar;


