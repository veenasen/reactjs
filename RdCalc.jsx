import React, { useState } from 'react';
import "./rdStyle.css"

const RdCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interest, setInterest] = useState('');
  const [time, setTime] = useState('');
  const [compoundFrequency, setCompoundFrequency] = useState('');
  const [result, setResult] = useState('');

  const calculateMaturityAmount = () => {
    const n = parseFloat(compoundFrequency);
    const r = parseFloat(interest);
    const t = parseFloat(time);
    const P = parseFloat(principal);
    const maturityAmount = P * (1+r/n)**n*t;
    setResult(`Recurring Deposite(Maturity Amount): $${maturityAmount.toFixed(2)}`);
  };

  return (
    <div className='body'>
      <h1 className='text'>Recurring Deposite Calculator</h1>
      <div>
        <label>Principal Amount:</label>
        <input className='input'
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Interest Rate (%):</label>
        <input className='input'
          type="number"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
      </div>
      <div>
        <label>Time (years):</label>
        <input className='input'
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <label>Compounds Per Year:</label>
        <input className='input'
          type="number"
          value={compoundFrequency}
          onChange={(e) => setCompoundFrequency(e.target.value)}
        />
      </div>
      <button className='click' onClick={calculateMaturityAmount}>Calculate</button><br/><br/>
      <div className='answer'>{result}</div>
    </div>
  );
};

export default RdCalculator;