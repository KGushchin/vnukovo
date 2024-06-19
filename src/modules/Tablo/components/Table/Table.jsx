import React from 'react';
import styles from './Table.module.css';
const Table = () => {
    return (
        <div className={styles.tablediv}>
            <h2 className={styles.tabletitle}>Компания</h2>
            <h2 className={styles.tabletitle}>Рейс</h2>
            <h2 className={styles.tabletitle}>Время</h2>
            <h2 className={styles.tabletitle}>Направление</h2>
            <h2 className={styles.tabletitle}>Терминал</h2>
            <h2 className={styles.tabletitle}>Выход</h2>
        </div>
    );
};

export default Table;