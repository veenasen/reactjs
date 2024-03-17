import React, { useState } from 'react';

const FahrenheitToCelsiusConverter = () => {
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsius, setCelsius] = useState(0);

  const convertFahrenheitToCelsius = () => {
    const convertedCelsius = (5/9)*(fahrenheit-32);
    setCelsius(convertedCelsius);
  };

  return (
    <div>
      <h1>Fahrenheit To Celsius Converter</h1>
      <div>
        <label>Fahrenheit:</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => setFahrenheit(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={convertFahrenheitToCelsius}>Convert</button>
      <div>
        <p>Celsius: {celsius}</p>
      </div>
    </div>
  );
};

export default FahrenheitToCelsiusConverter;