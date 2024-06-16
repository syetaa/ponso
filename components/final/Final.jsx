'use client'
import { useEffect, useState } from "react";
import Link from 'next/link';
import styles from './Final.module.css'

export default function Final() {

    const [res1, setRes1] = useState(0)
    const [res2, setRes2] = useState(0)
    const [res3, setRes3] = useState(0)
    const [res4, setRes4] = useState(0)
    const [res5, setRes5] = useState(0)
    const [res6, setRes6] = useState(0)

    useEffect(() => {
        setRes1(Number(localStorage.getItem('test_1')));
        setRes2(Number(localStorage.getItem('test_2')));
        setRes3(Number(localStorage.getItem('test_3')));
        setRes4(Number(localStorage.getItem('test_4')));
        setRes5(Number(localStorage.getItem('test_5')));
        setRes6(Number(localStorage.getItem('test_6')));
    }, []);

    // console.log(res1 + res2 + res3 + res4 + res5)
    
    return (
        <div className={styles.textmain}>
            <h1>Поздравляем!</h1>
            <p>Вы прошли тест!</p>
            <p>Среднее отклонение: {(res1 + res2 + res3 + res4 + res5 + res6) / 6}</p>
            <p>Спасибо за прохождение теста!</p>
            <div className={styles.btn}>
                <Link href="/">Начать заново</Link>
            </div>
            
        </div>
  )
}
