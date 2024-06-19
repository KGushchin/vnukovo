import React from 'react';
import styles from './TableCompany.module.css';
import TableItemCompany from "./TableItemCompany";
const TableCompany = ({arr}) => {
    return (
        <div className={styles.divv}>
            <h2 className={styles.titl}>Компания</h2>
            {arr.map((item, index) => (
                <TableItemCompany company={item.company} key={index} />
            ))}
        </div>
    );
};

export default TableCompany;