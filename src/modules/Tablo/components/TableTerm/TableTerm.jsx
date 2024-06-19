import React from 'react';
import TableTermItem from "./TableTermItem";
import styles from './TableTerm.module.css'
const TableTerm = ({arr}) => {
    return (
        <div className={styles.divv}>
            <h2 className={styles.titl}>Терминал</h2>
            {arr.map((item, i) => (
                <TableTermItem key={i} term={item.term} />
            ))}
        </div>
    );
};

export default TableTerm;