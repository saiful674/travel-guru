import React from 'react';
import Header from '../../Components/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import background_img from '../../assets/images/bg/background.png'
import toast, { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div className='min-h-screen relative bg-cover bg-center flex justify-center items-center' style={{ backgroundImage: `url(${background_img})` }}>
            <div className='bg-neutral opacity-40 min-h-full w-full absolute object-contain '>  </div>
            <Header></Header>
            <div className='my-container text-white z-10'>
                <Outlet></Outlet>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;