import React from 'react';
import styles from './Tablo.module.css';
import Table from "../components/Table/Table";
import TableItem from "../components/TableItem/TableItem";
import TableCompany from "../components/TableCompany/TableCompany";
import TableNumber from "../components/TableNumber/TableNumber"
import TableTime from "../components/TableTime/TableTime";
import TableTo from "../components/TableTo/TableTo";
import TableTerm from "../components/TableTerm/TableTerm";
import TableExit from "../components/TableExit/TableExit";
const arr = [
    {company:'Utair', number:'ЮТ 463',time:'10:00',to:'Тюмень', term:'А',exit:'17'},
    {company:'Utair', number:'ЮТ 373',time:'10:00',to:'Бишкек', term:'А',exit:'26'},
    {company:'Россия', number:'ФВ 6004',time:'10:30',to:'Санкт-Петербург', term:'А',exit:'09'},
    {company:'Turkish Airlines', number:'ТК 414',time:'10:30',to:'Стамбул', term:'А',exit:'22'},
    {company:'Победа', number:'ДР 465',time:'13:35',to:'Ульяновск', term:'А',exit:'12А'},
    {company:'Flydubai', number:'FZ 990',time:'16:00',to:'Дубай', term:'А',exit:'09'},
    {company:'Победа', number:'DP 967',time:'19:50',to:'Минск', term:'А',exit:'23А'},

]

const Tablo = () => {
    return (
        <div className={styles.divv}>
               <TableCompany arr={arr}/>
               <TableNumber arr={arr}/>
            <TableTime arr={arr}/>
            <TableTo arr={arr}/>
            <TableTerm arr={arr}/>
            <TableExit arr={arr}/>
        </div>
    );
};

export default Tablo;