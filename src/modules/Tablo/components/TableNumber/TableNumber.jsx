import React from 'react';
import TableNumberItem from "./TableNumberItem.jsx"
import styles from "./TableNumber.module.css"
const TableNumber = ({arr}) => {
    return (
        <div className={styles.divv}>
           <h2 className={styles.titl}>Рейс</h2>
            {arr.map((item, index) => (
                <TableNumberItem key={index} number={item.number} />
            ))}
        </div>
    );
};

export default TableNumber;