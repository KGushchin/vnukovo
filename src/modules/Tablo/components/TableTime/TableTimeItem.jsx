import React from 'react';
import styles from './TableTimeItem.module.css';
const TableTimeItem = ({time}) => {
    return (
        <div className={styles.divv}>
            <h2>{time}</h2>
        </div>
    );
};

export default TableTimeItem;