import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <img className={styles.logo} src={require('../../img/logotip.png')} alt=""/>
        </div>
    );
};

export default Footer;