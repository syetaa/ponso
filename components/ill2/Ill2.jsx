'use client'
import styles from './Ill2.module.css'
import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import Link from 'next/link';
import saveValue from '@/utils/Save';

const MullerLyerIllusion = ({ sliderValue, stageWidth, stageHeight }) => {
  const lineLength = 100 + parseInt(sliderValue, 10);
  const originalWidth = 700;
  const originalHeight = 500;

  // Определяем масштаб для сохранения пропорций
  const scale = Math.min(stageWidth / originalWidth, stageHeight / originalHeight);

  // Центрируем рисунок
  const offsetX = (stageWidth - originalWidth * scale) / 2;
  const offsetY = (stageHeight - originalHeight * scale) / 2;

  return (
    <Stage width={stageWidth} height={stageHeight} className={styles.canvas}>
      <Layer x={offsetX} y={offsetY} scaleX={scale} scaleY={scale}>
        {/* Первая линия с "стрелками наружу" */}
        <Line points={[100, 200, 300, 200]} stroke="red" strokeWidth={2} />
        <Line points={[100, 200, 120, 180]} stroke="red" strokeWidth={2} />
        <Line points={[100, 200, 120, 220]} stroke="red" strokeWidth={2} />
        <Line points={[300, 200, 280, 180]} stroke="red" strokeWidth={2} />
        <Line points={[300, 200, 280, 220]} stroke="red" strokeWidth={2} />
        
        {/* Вторая линия с "стрелками внутрь" */}
        <Line points={[100, 400, 100 + lineLength, 400]} stroke="red" strokeWidth={2} />
        <Line points={[100, 400, 80, 380]} stroke="red" strokeWidth={2} />
        <Line points={[100, 400, 80, 420]} stroke="red" strokeWidth={2} />
        <Line points={[100 + lineLength, 400, 120 + lineLength, 380]} stroke="red" strokeWidth={2} />
        <Line points={[100 + lineLength, 400, 120 + lineLength, 420]} stroke="red" strokeWidth={2} />
      </Layer>
    </Stage>
  );
};

const Ill2 = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [stageSize, setStageSize] = useState({ width: 0, height: 0 });
  const stageContainerRef = useRef(null);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleSaveClick = () => {
    saveValue(2, sliderValue - 100);
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
          Иллюзия Мюллера-Лайера (Müller-Lyer illusion)
        </div>
        <MullerLyerIllusion sliderValue={sliderValue} stageWidth={stageSize.width} stageHeight={stageSize.height}/>
        <div className={styles.btns}>
          <input
            type="range"
            min="0"
            max="150"
            value={sliderValue}
            onChange={handleSliderChange}
          />
          <Link href="/test3" onClick={handleSaveClick}>Сохранить ответ</Link>
        </div>
      </div>
    </div>
  );
};

export default Ill2;
