import React from 'react';
import Htgitem from "../components/HTGITEM/Htgitem";
import styles from './HowToGo.module.css'
const HowToGo = () => {
    return (
        <div className={styles.divv}>
            <h2 className={styles.nasral}>Как добраться?</h2>
            <Htgitem
                src={'metro'}
                title={'Аэроэкспресс'}
                subtitle={'От киевского вокзала за 30-40 минут'}
                lastitle={'Расписание'}
                link={'https://www.tutu.ru/rasp.php?st1=20000&st2=77103&date=tomorrow'}
            />
            <Htgitem
                src={'bus'}
                title={'Автобус'}
                subtitle={'От м. Филатов луг и Саларьево 18-25 минут'}
                lastitle={'Расписание'}
                link={'https://www.vnukovo.ru/ru/for-passengers/kak-dobratsya/avtobus/'}
            />
            <Htgitem
                src={'taxi'}
                title={'Такси'}
                subtitle={'Пользуйтесь услугами официальных перевозчиков'}
                lastitle={'Заказать '}
                link={'https://taxi.yandex.ru/ru_ru/'}
            />
        </div>
    );
};

export default HowToGo;