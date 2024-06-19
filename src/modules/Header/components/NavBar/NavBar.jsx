import React from 'react';
import styles from './Navbar.module.css'
import Logo from "../../../../UI/Logo/Logo.jsx";
import Li from "../li/Li";
const NavBar = () => {
    return (
        <div className={styles.divv}>
 <Logo/>
 <Li></Li>
        </div>
    );
};

export default NavBar;