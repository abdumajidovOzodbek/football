import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import './l.css'
const Layout = () => {
    return (
        <>
            <Navbar/>
            <div className="out">
            {
                    <Outlet/>   
            }
            </div>
            <Footer/>
        </>
    );
}

export default Layout;
