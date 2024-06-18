'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import styles from "./Ill4.module.css";
import Link from 'next/link';
import saveValue from '@/utils/Save';

const VerticalHorizontalIllusion = ({ sliderValue, stageWidth, stageHeight }) => {
  const horizontalLength = 150 + parseInt(sliderValue, 10);
  const verticalLength = 200;

  // Определяем масштаб для сохранения пропорций
  const scale = Math.min(stageWidth / 700, stageHeight / 500);

  // Центрируем рисунок
  const offsetX = (stageWidth - 700 * scale) / 2;
  const offsetY = (stageHeight - 500 * scale) / 2;

  return (
    <Stage width={stageWidth} height={stageHeight} className={styles.canvas} style={{ maxWidth: '100%' }}>
      <Layer scaleX={scale} scaleY={scale} offsetX={offsetX} offsetY={offsetY}>
        {/* Вертикальная линия */}
        <Line points={[400, 200, 400, 200 + verticalLength]} stroke="red" strokeWidth={2} />

        {/* Горизонтальная линия */}
        <Line points={[400 - horizontalLength / 2, 200 + verticalLength, 400 + horizontalLength / 2, 200 + verticalLength]} stroke="red" strokeWidth={2} />
      </Layer>
    </Stage>
  );
};

const Ill4 = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [stageSize, setStageSize] = useState({ width: 0, height: 0 });
  const stageContainerRef = useRef(null);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleSaveClick = () => {
    saveValue(4, sliderValue - 50);
  };

  useEffect(() => {
    const updateStageSize = () => {
      if (stageContainerRef.current) {
        setStageSize({
          width: stageContainerRef.current.offsetWidth,
          height: stageContainerRef.current.offsetHeight
        });
      }
    };

    updateStageSize();
    window.addEventListener('resize', updateStageSize);

    return () => {
      window.removeEventListener('resize', updateStageSize);
    };
  }, []);

  return (
    <div ref={stageContainerRef} className={styles.stageContainer}>
      <div className={styles.textmain}>
        <div className={styles.text}>
          Иллюзия Поггендорфа (Poggendorff illusion)
        </div>
        <VerticalHorizontalIllusion sliderValue={sliderValue} stageWidth={stageSize.width} stageHeight={stageSize.height} />
        <div className={styles.btns}>
          <input
            type="range"
            min="-100"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
          />
          <Link href="/test5" onClick={handleSaveClick}>Сохранить ответ</Link>
        </div>
      </div>
    </div>
  );
};

export default Ill4;
