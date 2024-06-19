import React, {useState} from 'react';
import styles from './Support.module.css'
const Support = () => {
    const [a,seta] = useState('');
    const aboba = function(e) {
        seta(e.target.value);
    }
    const res = function() {
        seta('');
    }
    return (
        <div className={styles.divv}>
            <p className={styles.pp}>Отправить обращение</p>
            <input type="text" placeholder={'Введите ваш e-mail'} className={styles.email}/>
            <textarea placeholder={'Введите обращение'} className={styles.msg} value={a}
                      onChange={e => seta(e.target.value)}/>
            <button onClick={res} className={styles.btna}>Отправить запрос</button>
            <h2 className={styles.contacts}>Наши контакты для связи: <br></br> +7 (495) 937-55-55 <br></br> +7 (495) 775-20-10</h2>
        </div>
    );
};

export default Support;