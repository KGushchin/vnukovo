import React from 'react';
import styles from './TableTime.module.css';
import TableTimeItem from './TableTimeItem';
const TableTime = ({arr}) => {
    return (
        <div className={styles.divv}>
            <h2 className={styles.titl}>Время</h2>
            {arr.map((item, index) => (
                <TableTimeItem key={index} time={item.time} />
            ))}
        </div>
    );
};

export default TableTime;