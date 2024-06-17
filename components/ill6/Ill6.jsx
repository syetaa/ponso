'use client'
import React, { useState } from 'react';
import { Stage, Layer, Circle } from 'react-konva';
import styles from "./Ill6.module.css";
import Link from 'next/link';
import saveValue from '@/utils/Save';

const DelboeufIllusion = ({ sliderValue }) => {
  // Размеры внешнего круга и обводки
  const outerCircleRadius = 200;
  const outerCircleStrokeWidth = 10;

  // Функция для вычисления размера второго внутреннего круга на основе sliderValue
  const calculateInnerCircleRadius = () => {
    const baseInnerRadius = 10; // Базовый размер внутреннего круга
    const maxSliderValue = 50; // Максимальное значение ползунка
    const minSliderValue = -50; // Минимальное значение ползунка

    // Преобразование sliderValue в диапазон от -50 до 50 для второго внутреннего круга
    const normalizedValue = (sliderValue - minSliderValue) / (maxSliderValue - minSliderValue);
    return baseInnerRadius + normalizedValue * 100; // Размер внутреннего круга от 50 до 150
  };

  // Размеры первого и второго внутренних кругов
  const firstInnerCircleRadius = 50; // Фиксированный размер первого внутреннего круга
  const secondInnerCircleRadius = calculateInnerCircleRadius(); // Размер второго внутреннего круга

  return (
    <Stage width={800} height={600}>
      <Layer>
        {/* Левая пара кругов */}
        <Circle
          x={300}
          y={300}
          radius={200}
          fill="#16171A"
          stroke="red"
          strokeWidth={2}
        />
        <Circle
          x={300}
          y={300}
          radius={50} // Размер первого внутреннего круга
          fill="gray"
          stroke="black"
          strokeWidth={0}
        />

        {/* Правая пара кругов */}
        <Circle
          x={300 + 350}
          y={300}
          radius={100}
          fill="#16171A"
          stroke="red"
          strokeWidth={2}
        />
        <Circle
          x={300 + 350}
          y={300}
          radius={sliderValue + 25} // Размер второго внутреннего круга
          fill="gray"
          stroke="black"
          strokeWidth={0}
        />

      </Layer>
    </Stage>
  );
};

const Ill6 = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value, 10));
  };

  const handleSaveClick = () => {
    saveValue(6, 25 - sliderValue);
  };

  return (
    <div className={styles.textmain}>
      <div className={styles.text}>
        Иллюзия Дельбёуфа (Delboeuf illusion)
      </div>
      <DelboeufIllusion sliderValue={sliderValue} />
      <div className={styles.btns}>
        <input
          type="range"
          min="-50"
          max="50"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <Link href="/finalpage" onClick={handleSaveClick}>Завершить тест</Link>
      </div>
    </div>
  );
};

export default Ill6;
