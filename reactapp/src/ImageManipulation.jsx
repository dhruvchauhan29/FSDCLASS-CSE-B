import React, { useState } from 'react';
import cat from './images.jpg';

function ImageManipulation() {
  const [hight, setHight] = useState(100);
  const [width, setWidth] = useState(50);
  const [angle, setAngle] = useState(0);
  const [containerBgColor, setContainerBgColor] = useState('red'); // State for image container color

  const enhanceHeight = () => {
    setHight(hight + 30);
  };

  const enhanceWidth = () => {
    setWidth(width + 30);
  };

  const enrotate = () => {
    setAngle(angle + 30);
  };

  const toggleContainerBgColor = () => {
    setContainerBgColor(containerBgColor === 'red' ? 'blue' : 'red');
  };

  return (
    <div
      style={{
        border: '2px solid red',
        height: '600px',
        width: '400px',
        marginLeft: '600px',
        backgroundColor: '#d5eb34', // Main container background
      }}
    >
      <div
        style={{
          marginLeft: '40px',
          marginTop: '40px',
          backgroundColor: containerBgColor, // Image container color
          height: '200px',
          width: '200px',
          border: '1px solid black',
        }}
      >
        <img
          height={hight}
          width={width}
          src={cat}
          style={{ transform: `rotate(${angle}deg)` }}
          alt="Manipulated"
        />
      </div>
      <div style={{ marginTop: '40px' }}>
        <button id="btn" onClick={enrotate}>
          Rotate
        </button>
        <button id="btn" onClick={enhanceHeight}>
          Enhance Height
        </button>
        <button id="btn" onClick={enhanceWidth}>
          Enhance Width
        </button>
        <button id="btn" onClick={toggleContainerBgColor}>
          Toggle Image Container Color
        </button>
      </div>
    </div>
  );
}

export default ImageManipulation;
