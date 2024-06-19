import React from 'react';
import styles from './TableToItem.module.css'
const TableToItem = ({to}) => {
    return (
        <div className={styles.divv}>
            <h2>{to}</h2>
        </div>
    );
};

export default TableToItem;