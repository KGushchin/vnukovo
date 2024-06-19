import React from 'react';
import styles from './Htgitem.module.css'
const Htgitem = ({src,title,subtitle,lastitle, link}) => {
    return (
        <div className={styles.divv}>
            <img src={require(`../../../../img/${src}.jpg`)} alt="" className={styles.gifka}/>
            <h2 className={styles.title}>{title}</h2>
            <h2 className={styles.subtitle}>{subtitle}</h2>
            <a href={link} className={styles.lastitle}>{lastitle}</a>
        </div>
    );
};

export default Htgitem;