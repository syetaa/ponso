'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Circle } from 'react-konva';
import styles from "./Ill6.module.css";
import Link from 'next/link';
import saveValue from '@/utils/Save';

const DelboeufIllusion = ({ sliderValue }) => {
  const stageRef = useRef(null);
  const containerRef = useRef(null);
  const [stageSize, setStageSize] = useState({ width: 800, height: 600 });

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

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        setStageSize({
          width: containerWidth,
          height: containerHeight,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.canvasContainer} ref={containerRef}>
      <Stage width={stageSize.width} height={stageSize.height} ref={stageRef}>
        <Layer>
          {/* Левая пара кругов */}
          <Circle
            x={stageSize.width * 0.25}
            y={stageSize.height * 0.5}
            radius={stageSize.width * 0.25}
            fill="#16171A"
            stroke="red"
            strokeWidth={2}
          />
          <Circle
            x={stageSize.width * 0.25}
            y={stageSize.height * 0.5}
            radius={firstInnerCircleRadius}
            fill="gray"
            stroke="black"
            strokeWidth={0}
          />

          {/* Правая пара кругов */}
          <Circle
            x={stageSize.width * 0.75}
            y={stageSize.height * 0.5}
            radius={stageSize.width * 0.125}
            fill="#16171A"
            stroke="red"
            strokeWidth={2}
          />
          <Circle
            x={stageSize.width * 0.75}
            y={stageSize.height * 0.5}
            radius={secondInnerCircleRadius}
            fill="gray"
            stroke="black"
            strokeWidth={0}
          />
        </Layer>
      </Stage>
    </div>
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
