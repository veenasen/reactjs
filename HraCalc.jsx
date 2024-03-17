import React, { useState } from 'react';
import "./cagrStyle.css"

const HraCalculator = () => {
  const [salary, setSalary] = useState('');
  const [dearness, setDearness] = useState('');
  const [result, setResult] = useState('');

  const calculateHra = () => {
    const basicSalary = parseFloat(salary);
    const dearnessAllowance = parseFloat(dearness);
    const cities = (50/100)*((basicSalary+dearnessAllowance)*12);
    setResult(`HRA for Metro Cities: $${cities.toFixed(2)}`);
  };

  return (
    <div className='cagrstyle'>
      <h1 className='cagrheading'> HRA Calculator</h1>
      <div>
        <label className='cagrsubtitle'>Basic Salary:</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>
      <div>
        <label className='cagrsubtitle'>Dearness Allowance:</label>
        <input
          type="number"
          value={dearness}
          onChange={(e) => setDearness(e.target.value)}
        />
      </div><br/>
      <button className='cagrbutton' onClick={calculateHra}>Calculate</button><br/><br/>
      <div className='cagrresult'>{result}</div>
    </div>
  );
};

export default HraCalculator;