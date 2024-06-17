'use client'
import React, { useState } from 'react';
import { Stage, Layer, Line, Text } from 'react-konva';
import styles from "./Ill4.module.css"
import Link from 'next/link';
import saveValue from '@/utils/Save';

const VerticalHorizontalIllusion = ({ sliderValue }) => {
  const horizontalLength = 150 + parseInt(sliderValue, 10);
  const verticalLength = 200;

  return (
    <Stage width={700} height={500}>
      <Layer>
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

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleSaveClick = () => {
    saveValue(4, sliderValue - 50);
  };

    return (
        <div className={styles.textmain}>
            <div className={styles.text}>
              Иллюзия Поггендорфа (Poggendorff illusion)
            </div>
            <VerticalHorizontalIllusion sliderValue={sliderValue} />
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
    );
};

export default Ill4;
