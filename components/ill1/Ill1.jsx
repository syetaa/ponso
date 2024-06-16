'use client'
import React, { useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import saveValue from '@/utils/Save';

import styles from './ill1.module.css';
import Link from 'next/link';

const PonzoIllusion = ({ sliderValue }) => {
  // Преобразуем значение ползунка в число
  const lineWidth = parseInt(sliderValue, 10);

  return (
    <Stage width={700} height={500}>
      <Layer>
        {/* Диагональные линии */}
        <Line points={[300, 50, 200, 450]} stroke="yellow" strokeWidth={2} />
        <Line points={[400, 50, 500, 450]} stroke="yellow" strokeWidth={2} />

        {/* Горизонтальные линии */}
        <Line points={[300, 200, 400, 200]} stroke="red" strokeWidth={2} />
        <Line 
          points={[350 - lineWidth / 2, 350, 350 + lineWidth / 2, 350]} 
          stroke="red" 
          strokeWidth={2} 
        />
      </Layer>
    </Stage>
  );
};



const Ill1 = () => {
  const [sliderValue, setSliderValue] = useState(40);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

    return (
        <div>
            <div className={styles.textmain}>
                <div className={styles.text}>
                  Иллюзия Понцо (Ponzo illusion)
                </div>
                <PonzoIllusion sliderValue={sliderValue} />
                <div className={styles.btns}>
                    <input
                        type="range"
                        min="10"
                        max="300"
                        value={sliderValue}
                        onChange={handleSliderChange}
                    />
                    <Link href="/test2" onClick={saveValue(1, sliderValue - 100)}>Сохранить ответ</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Ill1;
