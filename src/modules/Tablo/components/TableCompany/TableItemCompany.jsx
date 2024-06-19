import React from 'react';
import styles from './TableItemCompany.module.css'
const TableItemCompany = ({company}) => {
    return (
        <div className={styles.divv}>
            <h2>{company}</h2>
        </div>
    );
};

export default TableItemCompany;