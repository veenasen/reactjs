import React, { useState } from 'react';
import "./cagrStyle.css"

const GratuityCalculator = () => {
  const [years, setYears] = useState('');
  const [salary, setSalary] = useState('');
  const [result, setResult] = useState('');

  const calculateGratuity = () => {
    const n = parseFloat(years);
    const b = parseFloat(salary);
    const gratuity = n*b*(15/26);
    setResult(`CAGR: $${gratuity.toFixed(2)}`);
  };

  return (
    <div className='cagrstyle'>
      <h1 className='cagrheading'> Gratuity Calculator</h1>
      <div>
        <label className='cagrsubtitle'>MONTHLY SALARY (Basic + DA):</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>
      <div>
        <label className='cagrsubtitle'>YEARS OF SERVICE:</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </div><br/>
      <button className='cagrbutton' onClick={calculateGratuity}>Calculate</button><br/><br/>
      <div className='cagrresult'>{result}</div>
    </div>
  );
};

export default GratuityCalculator;