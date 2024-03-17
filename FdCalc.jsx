import React, { useState } from 'react';
import "./fdStyle.css"

const FixedDepositeCalculator = () => {
  const [investment, setInvestment] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  const calculateMaturityAmount = () => {
    const r = parseFloat(rate);
    const t = parseFloat(time);
    const P = parseFloat(investment);
    const maturityAmount = P + (P*r*t)/100;
    setResult(`Fixed Deposite(Maturity Amount): $${maturityAmount.toFixed(2)}`);
  };

  return (
    <div className='body1'>
    <div className='fieldset'>
      <h1 className='h1'>Fixed Deposite Calculator</h1>
      <div>
        <label className='label'>Investment:</label>
        <input className='box'
          type="number"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
        />
      </div>
      <div>
        <label className='label'>Interest (%):</label>
        <input className='box'
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div>
        <label className='label'>Time (years):</label>
        <input className='box'
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button className='buttonClick' onClick={calculateMaturityAmount}>Calculate</button><br/><br/>
      <div className='output'>{result}</div>
    </div>
    </div>
  );
};

export default FixedDepositeCalculator;