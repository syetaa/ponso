'use client'
import React, { useState } from 'react';
import { Stage, Layer, Circle } from 'react-konva';
import styles from "./Ill3.module.css"
import Link from 'next/link';
import saveValue from '@/utils/Save';

const EbbinghausIllusion = ({ sliderValue }) => {
  const innerCircleRadius1 = 15 + parseInt(sliderValue, 10);
  const innerCircleRadius2 = 30;
  const outerCircleRadiusSmall = 15;
  const outerCircleRadiusLarge = 40;

  return (
    <Stage width={800} height={600}>
      <Layer>
        {/* Центральный круг первого набора */}
        <Circle x={200} y={300} radius={innerCircleRadius1} fill="orange" />
        {/* Внешние круги первого набора */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Circle
            key={i}
            x={200 + 70 * Math.cos((i * Math.PI) / 3)}
            y={300 + 70 * Math.sin((i * Math.PI) / 3)}
            radius={outerCircleRadiusSmall}
            fill="blue"
          />
        ))}

        {/* Центральный круг второго набора */}
        <Circle x={600} y={300} radius={innerCircleRadius2} fill="orange" />
        {/* Внешние круги второго набора */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Circle
            key={i}
            x={600 + 140 * Math.cos((i * Math.PI) / 3)}
            y={300 + 140 * Math.sin((i * Math.PI) / 3)}
            radius={outerCircleRadiusLarge}
            fill="blue"
          />
        ))}
      </Layer>
    </Stage>
  );
};

const Ill3 = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleSaveClick = () => {
    saveValue(3, sliderValue - 15);
  };

  return (
    <div className={styles.textmain}>
      <div className={styles.text}>
        Иллюзия Эббингауза (Ebbinghaus illusion)
      </div>
      <EbbinghausIllusion sliderValue={sliderValue} />
          <div className={styles.btns}>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={sliderValue}
                  onChange={handleSliderChange}
                />
                <Link href="/test4" onClick={handleSaveClick}>Сохранить ответ</Link>
          </div>
      
    </div>
  );
};

export default Ill3;
