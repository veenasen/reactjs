import React, { useState } from 'react';
import "./cagrStyle.css"

const CagrCalculator = () => {
  const [futurevalue, setFuturevalue] = useState('');
  const [presentvalue, setPresentvalue] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  const calculateCagr = () => {
    const FV = parseFloat(futurevalue);
    const PV = parseFloat(presentvalue);
    const n = parseFloat(time);
    const cagr = (((FV/PV)**1/n))-1;
    setResult(`CAGR: $${cagr.toFixed(2)}`);
  };

  return (
    <div className='cagrstyle'>
      <h1 className='cagrheading'> CAGR Calculator</h1>
      <div>
        <label className='cagrsubtitle'>INITIAL INVESTMENT:</label>
        <input
          type="number"
          value={presentvalue}
          onChange={(e) => setPresentvalue(e.target.value)}
        />
      </div>
      <div>
        <label className='cagrsubtitle'>FINAL VALUE:</label>
        <input
          type="number"
          value={futurevalue}
          onChange={(e) => setFuturevalue(e.target.value)}
        />
      </div>
      <div>
        <label className='cagrsubtitle'>Time (years):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div><br/>
      <button className='cagrbutton' onClick={calculateCagr}>Calculate</button><br/><br/>
      <div className='cagrresult'>{result}</div>
    </div>
  );
};

export default CagrCalculator;