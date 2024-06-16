import styles from './Home_comp.module.css'
import Image from "next/image";
import Link from 'next/link'


const Home_comp = () => {

    return(
            <div className={styles.textmain}>
                <div className={styles.text}>
                    Добрый день!
                </div>
                <div className={styles.text}>
                    Этот тест создан для демонстрации оптических иллюзий.
                </div>
                <div className={styles.text}>
                    Нажмите кнопку ниже чтобы начать.
                </div>
                <div className={styles.btn}>
                    <Link href="test1">Начать тест</Link>
                </div>
            </div>
    )
}

export {Home_comp};