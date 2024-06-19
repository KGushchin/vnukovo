import React from 'react';
import styles from './Logo.module.css';
const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={require('./logo.png')} alt="" className={styles.logo}/>
        </div>
    );
};

export default Logo;