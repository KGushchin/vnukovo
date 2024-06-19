import React from 'react';
import styles from './TableNumberItem.module.css';
const TableNumberItem = ({number}) => {
    return (
        <div className={styles.divv}>
          <h2>{number}</h2>
        </div>
    );
};

export default TableNumberItem;