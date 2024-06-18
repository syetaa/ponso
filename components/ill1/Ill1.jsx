import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import saveValue from '@/utils/Save';
import styles from './Ill1.module.css';
import Link from 'next/link';

const PonzoIllusion = ({ sliderValue, stageWidth, stageHeight }) => {
  const lineWidth = parseInt(sliderValue, 10);
  const originalWidth = 600;
  const originalHeight = 450;

  // Определяем масштаб для сохранения пропорций
  const scale = Math.min(stageWidth / originalWidth, stageHeight / originalHeight);

  // Центрируем рисунок
  const offsetX = (stageWidth - originalWidth * scale) / 2;
  const offsetY = (stageHeight - originalHeight * scale) / 2;

  return (
    <Stage width={stageWidth} height={stageHeight} className={styles.canvas}>
      <Layer x={offsetX} y={offsetY} scaleX={scale} scaleY={scale}>
        <Line points={[250, 50, 150, 450]} stroke="yellow" strokeWidth={2} />
        <Line points={[350, 50, 450, 450]} stroke="yellow" strokeWidth={2} />
        <Line points={[250, 200, 350, 200]} stroke="red" strokeWidth={2} />
        <Line 
          points={[250, 350, 250 + lineWidth, 350]} 
          stroke="red" 
          strokeWidth={2} 
        />
      </Layer>
    </Stage>
  );
};

const Ill1 = () => {
  const [sliderValue, setSliderValue] = useState(40);
  const [stageSize, setStageSize] = useState({ width: 0, height: 0 });
  const stageContainerRef = useRef(null);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleSaveClick = () => {
    saveValue(1, sliderValue - 100);
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
          Иллюзия Понцо (Ponzo illusion)
        </div>
        <PonzoIllusion sliderValue={sliderValue} stageWidth={stageSize.width} stageHeight={stageSize.height}/>
        <div className={styles.btns}>
          <input
            type="range"
            min="10"
            max="300"
            value={sliderValue}
            onChange={handleSliderChange}
          />
          <Link href="/test2" onClick={handleSaveClick}>Сохранить ответ</Link>
        </div>
      </div>
    </div>
  );
};

export default Ill1;
