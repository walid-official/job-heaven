import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;