import React from 'react';
import styles from './TableTermItem.module.css';
const TableTermItem = ({term}) => {
    return (
        <div className={styles.divv}>
            <h2>{term}</h2>
        </div>
    );
};

export default TableTermItem;