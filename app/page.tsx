'use client'
import React, { useState } from 'react';

function App() {
  const [selectedColor, setSelectedColor] = useState('#00FF00'); // Set a default color

  const handleColorChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedColor(event.target.value);
  };

  return (
    <main className={`flex min-h-screen items-center justify-center bg-${selectedColor}`}>
      <input type="color" value={selectedColor} onChange={handleColorChange} />
    </main>
  );
}

export default App;
