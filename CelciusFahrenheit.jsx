import React, { useState } from 'react';

const CelsiusToFahrenheitConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState(0);

  const convertCelsiusToFahrenheit = () => {
    const convertedFahrenheit = (celsius * 9/5) + 32;
    setFahrenheit(convertedFahrenheit);
  };

  return (
    <div>
      <h1>Celsius to Fahrenheit Converter</h1>
      <div>
        <label>Celsius:</label>
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={convertCelsiusToFahrenheit}>Convert</button>
      <div>
        <p>Fahrenheit: {fahrenheit}</p>
      </div>
    </div>
  );
};

export default CelsiusToFahrenheitConverter;