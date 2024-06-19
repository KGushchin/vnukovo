import React from 'react';
import styles from './Li.module.css'

const Li = () => {
    const scroll = function() {
        window.scrollTo({
            top: 2100,  // это координат где должен быть экран
            behavior: 'smooth'  //Это анимация
        })
    }
    const scrollnav = function() {
        window.scrollTo({
            top: 1400,  // это координат где должен быть экран
            behavior: 'smooth'  //Это анимация
        })
    }
    const scrollcont = function() {
        window.scrollTo({
            top: 2400,  // это координат где должен быть экран
            behavior: 'smooth'  //Это анимация
        })
    }
    return (
        <div className={styles.divv}>
            <ul className={styles.listul}>
                <li className={styles.list} onClick={scroll}>Услуги</li>
                <li className={styles.list} onClick={scrollnav}>Как добраться</li>
                <li className={styles.list} onClick={scrollcont}>Связь</li>

            </ul>
        </div>
    );
};

export default Li;