import React from 'react';
import Header from '../../Components/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import background_img from '../../assets/images/bg/background.png'
const Main = () => {
    return (
        <div className='h-screen relative bg-cover bg-center' style={{ backgroundImage: `url(${background_img})` }}>
            <div className='bg-neutral opacity-40 h-full w-full absolute object-contain '>  </div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;