import React, { useState, useEffect } from 'react';

interface ColorPickerProps {
  initialColor: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ initialColor, onChange }) => {
  const [selectedColor, setSelectedColor] = useState(initialColor);

  useEffect(() => {
    document.documentElement.style.setProperty('background-color', selectedColor);
  }, [selectedColor]);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    onChange(newColor);
  };

  return (
    <div>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorPicker;
