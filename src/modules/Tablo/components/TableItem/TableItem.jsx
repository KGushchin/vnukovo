import React from 'react';
import styles from './TableItem.module.css';
const TableItem = ({company,number,time,to,term,exit}) => {
    return (
        <div className={styles.divtable}>
            <h2 className={styles.titlec}>{company}</h2>
            <h2 className={styles.title}>{number}</h2>
            <h2 className={styles.time}>{time}</h2>
            <h2 className={styles.to}>{to}</h2>
            <h2 className={styles.term}>{term}</h2>
            <h2 className={styles.exit}>{exit}</h2>
        </div>
    );
};

export default TableItem;