import React, { useState } from 'react';

function ColorPicker() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, minHeight: '30vh' }}>
      <h1>Color Picker</h1>
      <input
        type="color"
        value={backgroundColor}
        onChange={(e) => handleColorChange(e.target.value)}
      />
    </div>
  );
}

export default ColorPicker;