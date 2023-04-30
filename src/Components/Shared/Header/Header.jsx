import React from 'react';
import logo from '../../../assets/images/icons/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className="my-container flex justify-between mt-5 navbar bg-transparent absolute top-0 text-white z-30">
            <div className="flex justify-between w-full md:w-fit">
                <a><img src={logo} alt="" /></a>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral  rounded-box w-52">
                        <li><input type="text" placeholder="Search your destination..." className="input border  placeholder:text-white border-white bg-slate-50 bg-opacity-30 w-full max-w-xs" /></li>
                        <li><Link >News</Link></li>
                        <li><Link to='/destination'>Destination</Link></li>
                        <li><Link to=''>Blogs</Link></li>
                        <li><Link to=''>Contact</Link></li>
                        <li><Link className='btn btn-warning'>Login</Link></li>
                    </ul>
                </div>
            </div>
            <div className=" hidden lg:flex">
                <ul className="flex gap-10 items-center">
                    <li><input type="text" placeholder="Search your destination..." className="input border  placeholder:text-white border-white bg-slate-50 bg-opacity-30 w-full max-w-xs" /></li>
                    <li><Link >News</Link></li>
                    <li><Link to='/destination'>Destination</Link></li>
                    <li><Link to=''>Blogs</Link></li>
                    <li><Link to=''>Contact</Link></li>
                    <li><Link className='btn btn-warning'>Login</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;