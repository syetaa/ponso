'use client'
import styles from './Ill2.module.css'
import React, { useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import Link from 'next/link';
import saveValue from '@/utils/Save';

const MullerLyerIllusion = ({ sliderValue }) => {
  const lineLength = 100 + parseInt(sliderValue, 10);

  return (
    <Stage width={700} height={500}>
      <Layer>
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

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className={styles.textmain}>
      <div className={styles.text}>
        Иллюзия Мюллера-Лайера (Müller-Lyer illusion)
      </div>
      <MullerLyerIllusion sliderValue={sliderValue} />
      <div className={styles.btns}>
        <input
        type="range"
        min="0"
        max="150"
        value={sliderValue}
        onChange={handleSliderChange}
        />
        <Link href="/test3" onClick={saveValue(2, sliderValue - 100)}>Сохранить ответ</Link>
      </div>
      
    </div>
  );
};

export default Ill2;
