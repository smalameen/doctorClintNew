import React from 'react';
import BusinessInfo from '../Home/BussinesInfo/BusinessInfo';
import NavBar from './NavBar';
import NavMain from './NavMain';
import "./NavMain.css";


const Header = () => {
    return (
        <div style={{height:"700px"}} class="header-container">
            <NavBar/>
            <NavMain/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;