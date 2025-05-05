import React from 'react';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <main style={{padding: '0rem'}}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;
