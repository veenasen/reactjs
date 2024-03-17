import React, { useState } from 'react';
import "./ppfStyle.css"

const PpfCalculator = () => {
  const [investment, setInvestment] = useState('');
  const [interest, setInterest] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  const calculateMaturityAmount = () => {
    const r = parseFloat(interest);
    const t = parseFloat(time);
    const P = parseFloat(investment);
    const maturityAmount = P * (1+r) * t;
    setResult(`Maturity Amount: $${maturityAmount.toFixed(2)}`);
  };

  return (
    <div className='ppfStyle'>
      <h1 className='title'>PPF Calculator</h1>
      <div>
        <label className='subtitle1'>Investment:</label>
        <input
          type="number" 
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
        />
      </div><br/>
      <div>
        <label className='subtitle1'>Interest (%):</label>
        <input
          type="number"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
      </div><br/>
      <div>
        <label className='subtitle1'>Time (years):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div><br/>
      <button className='button1' onClick={calculateMaturityAmount}>Calculate</button><br/><br/>
      <div className='result1'>{result}</div>
    </div>
  );
};

export default PpfCalculator;