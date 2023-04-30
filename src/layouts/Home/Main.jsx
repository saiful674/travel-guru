import React from 'react';
import Header from '../../Components/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import background_img from '../../assets/images/bg/background.png'
const Main = () => {
    return (
        <div style={{background: `url(${background_img})`}}>
           <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;