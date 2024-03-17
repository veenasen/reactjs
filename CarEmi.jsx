import React, { useState } from 'react';
// import "./emiStyle.css"

const CarEmiCalculator = () => {
  const [principle, setPrinciple] = useState('');
  const [interest, setInterest] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  const calculateCarEmiAmount = () => {
    const r = parseFloat(interest)/12/100;
    const n = parseFloat(time)*12;
    const P = parseFloat(principle);
    const emiAmount = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setResult(`EMI: $${emiAmount.toFixed(2)}`);
  };

  return (
    <div className='style'>
      <h1 className='heading'> Car Loan EMI Calculator</h1>
      <div>
        <label className='subtitle'>Principle:</label>
        <input
          type="number"
          value={principle}
          onChange={(e) => setPrinciple(e.target.value)}
        />
      </div>
      <div>
        <label className='subtitle'>Interest (%):</label>
        <input
          type="number"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
      </div>
      <div>
        <label className='subtitle'>Time (years):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div><br/>
      <button className='button' onClick={calculateCarEmiAmount}>Calculate</button><br/><br/>
      <div className='result'>{result}</div>
    </div>
  );
};

export default CarEmiCalculator;