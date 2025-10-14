import React from 'react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router';
const Footer = () => {
    return (
      <footer className="  bg-neutral mt-20 ">
        <Link to="/" className='flex items-center justify-end  md:items-center md:justify-center flex-row-reverse p-15 h-10'>
          <h1>HERO.IO</h1>
          <img className='h-[60px] mr-5' src={logo} alt="" />
        </Link>
<div className='footer text-neutral-content p-15  grid grid-cols-2 gap-10 md:grid-cols-4 '>
    <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">CONTACT</h6>
   <div className=''>
     <a className="link link-hover flex gap-2 pb-2"> <Twitter /><span>Twitter</span></a>
    <a className="link link-hover flex gap-2 pb-2"><Instagram /><span>Instagram</span></a>
    <a className="link link-hover flex gap-2 pb-2">  <Youtube /><span>Youtube</span></a>
     <a className="link link-hover flex gap-2 pb-2">  <Facebook /><span>Facebook</span></a>
   </div>
  </nav>
</div>
<div className='flex items-center justify-center p-5'>
  <p>Copyright © 2025 - All right reserved</p>
</div>
</footer>
    );
};

export default Footer;