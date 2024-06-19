import React from 'react';
import Logo from '../../../UI/Logo/Logo.jsx';
import styles from './Header.module.css';
import background from '../../../img/mom.jpg';
import NavBar from "../components/NavBar/NavBar";
import Btn from "../../../UI/btn/btn.jsx";
const Header = () => {
    return (
        <div className={styles.divv} style={{ backgroundImage: `url('${background}')` }}>
       <NavBar/>
            <h2 className={styles.title}>Навстречу миру!</h2>
            <h2 className={styles.subtitle}>Это ваше время - используйте его на максимум</h2>
           <Btn></Btn>
        </div>
    );
};

export default Header;