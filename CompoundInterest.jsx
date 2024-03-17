import React, { useState } from 'react';

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [compoundsPerYear, setCompoundsPerYear] = useState('');
  const [result, setResult] = useState('');

  const calculateCompoundInterest = () => {
    const n = parseFloat(compoundsPerYear);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const P = parseFloat(principal);
    const compoundedAmount = P * Math.pow(1 + r / n, n * t);
    const calculatedInterest = compoundedAmount - P;
    setResult(`Compound Interest: $${calculatedInterest.toFixed(2)}`);
  };

  return (
    <div>
      <h1>Compound Interest Calculator</h1>
      <div>
        <label>Principal Amount:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Interest Rate (%):</label>
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
      <div>
        <label>Compounds Per Year:</label>
        <input
          type="number"
          value={compoundsPerYear}
          onChange={(e) => setCompoundsPerYear(e.target.value)}
        />
      </div>
      <button onClick={calculateCompoundInterest}>Calculate</button>
      <div>{result}</div>
    </div>
  );
};

export default CompoundInterestCalculator;