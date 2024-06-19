import React from 'react';
import TableExitItem from "./TableExitItem";
import styles from './TableExit.module.css'
const TableExit = ({arr}) => {
    return (
        <div className={styles.divv}>
            <h2 className={styles.titl}>Выход</h2>
            {arr.map((item, index) => (
                <TableExitItem key={index} exit={item.exit} />
            ))}
        </div>
    );
};

export default TableExit;