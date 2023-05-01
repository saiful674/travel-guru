import React, { useContext } from 'react';
import logo from '../../../assets/images/icons/logo.png'
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContex);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <nav className="my-container flex justify-between mt-5 navbar bg-transparent absolute top-0 text-white z-30">
            <div className="flex justify-between w-full md:w-fit">
                <Link to='/'><img src={logo} alt="" /></Link>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral  rounded-box w-52">
                        <li><Link >Home</Link></li>
                        <li><Link to='/destinations'>Destination</Link></li>
                        <li><Link to='/blog'>Blogs</Link></li>
                        <li><Link to=''>Contact</Link></li>
                        {
                            user && <li><p>{user.displayName}</p></li>
                        }
                            <li><input type="text" placeholder="Search your destination..." className="input border  placeholder:text-white border-white bg-slate-50 bg-opacity-30 w-full max-w-xs mb-4 md:mb-0" /></li>
                        {
                            user ? <li><button onClick={handleLogout} className='btn btn-warning'>Logout</button></li> : <li><Link to='/login' className='btn btn-warning'>Login</Link></li>
                        }
                    </ul>
                </div>
            </div>
            <div className=" hidden lg:flex">
                <ul className="flex gap-10 items-center">
                    <li><input type="text" placeholder="Search your destination..." className="input border  placeholder:text-white border-white bg-slate-50 bg-opacity-30 w-full max-w-xs" /></li>
                    <li><Link >Home</Link></li>
                    <li><Link to='/destinations'>Destination</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li>
                    <li><Link to=''>Contact</Link></li>
                    {
                        user && <li><p>{user.displayName}</p></li>
                    }
                    {
                        user ? <li><button onClick={handleLogout} className='btn btn-warning'>Logout</button></li> : <li><Link to='/login' className='btn btn-warning'>Login</Link></li>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Header;