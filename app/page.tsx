'use client'
import React, { useState } from 'react';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('#fff'); 

  const handleColorChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedColor(event.target.value);
  };


  
  return (
    <main  className={`flex min-h-screen items-center justify-center bg-${selectedColor}` } style={{ backgroundColor: selectedColor }}>
      <input type="color" value={selectedColor} onChange={handleColorChange} />
    </main>
  );
}

export default ColorPicker;
