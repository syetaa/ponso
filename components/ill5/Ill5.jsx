'use client'
import React, { useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import styles from "./Ill5.module.css"
import Link from 'next/link';
import saveValue from '@/utils/Save';

const JastrowIllusion = ({ sliderValue }) => {
  const height = 50;
  const width = 200;
  const offset = parseInt(sliderValue, 10);

  return (
    <Stage width={700} height={500}>
      <Layer>
        {/* Верхняя фиксированная фигура */}
        <Line
          points={[
            300, 200,
            300 + width, 200,
            300 + width - height, 200 + height,
            300 - height, 200 + height,
          ]}
          stroke="black"
          strokeWidth={2}
          closed
          fill="lightgrey"
        />
        
        {/* Нижняя изменяемая фигура */}
        <Line
          points={[
            300, 300,
            250 + width + offset, 300,
            250 + width + offset - height, 300 + height,
            300 - height, 300 + height,
          ]}
          stroke="black"
          strokeWidth={2}
          closed
          fill="grey"
        />
      </Layer>
    </Stage>
  );
};

const Ill5 = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleSaveClick = () => {
    saveValue(5, sliderValue - 50);
  };

  return (
    <div className={styles.textmain}>
        <div className={styles.text}>
            Иллюзия Джастроу (Jastrow illusion) 
        </div>
        <JastrowIllusion sliderValue={sliderValue} />
        <div className={styles.btns}>
            <input
                type="range"
                min="-100"
                max="100"
                value={sliderValue}
                onChange={handleSliderChange}
            />
            <Link href="/test6" onClick={handleSaveClick}>Сохранить ответ</Link>
        </div>
        
    </div>
  );
};

export default Ill5;
