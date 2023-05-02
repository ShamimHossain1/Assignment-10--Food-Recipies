import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Foooter from '../Footer/Foooter';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Foooter></Foooter>
            
        </div>
    );
};

export default Main;