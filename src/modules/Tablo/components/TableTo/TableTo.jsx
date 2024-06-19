import React from 'react';
import TableToItem from "./TableToItem";
import styles from "./TableTo.module.css";
const TableTo = ({arr}) => {
    return (
        <div className={styles.divv}>
            <h2 className={styles.titl}>Направление</h2>
            {arr.map((item,key) => (
                <TableToItem key={key} to={item.to} />
            ))}
        </div>
    );
};

export default TableTo;