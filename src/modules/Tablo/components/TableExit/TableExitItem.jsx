import React from 'react';
import styles from './TableExitItem.module.css';
const TableExitItem = ({exit}) => {
    return (
        <div className={styles.divv}>
            <h2 className={styles.titl}>{exit}</h2>
        </div>
    );
};

export default TableExitItem;