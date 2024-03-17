import React, { useState } from 'react';
// import "./emiStyle.css"

const ApyCalculator = () => {
  const [interest, setInterest] = useState('');
  const [time, setTime] = useState('');
  const [principle, setPrinciple] = useState('')
  const [result, setResult] = useState('');

  const calculateApyAmount = () => {
    const r = parseFloat(interest);
    const n = parseFloat(time);
    const p = parseInt(principle);
    const apyAmount = p*(1+(Math.pow(r/n,n))-1);
    setResult(`APY: $${apyAmount.toFixed(2)}`);
  };

  return (
    <div className='style'>
      <h1 className='heading'> APY Calculator</h1>
      <div>
        <label className='subtitle'>Desired monthly Pension:</label>
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
      <button className='button' onClick={calculateApyAmount}>Calculate</button><br/><br/>
      <div className='result'>{result}</div>
    </div>
  );
};

export default ApyCalculator;