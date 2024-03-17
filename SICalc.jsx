import React, { useState } from 'react';

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  const calculateSimpleInterest = () => {
    const calculatedInterest = (principal * rate * time) / 100;
    setResult(`Simple Interest: $${calculatedInterest.toFixed(2)}`);
  };

  return (
    <div>
      <h1>Simple Interest Calculator</h1>
      <div>
        <label>Principal Amount:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label>Rate of Interest (%):</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div>
        <label>Time (years):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button onClick={calculateSimpleInterest}>Calculate</button>
      <div>{result}</div>
    </div>
  );
};

export default SimpleInterestCalculator;