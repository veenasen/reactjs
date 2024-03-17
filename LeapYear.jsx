import React, { useState } from 'react';

const LeapYearChecker = () => {
  const [year, setYear] = useState('');
  const [result, setResult] = useState('');

  const checkLeapYear = () => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      setResult('Leap Year');
    } else {
      setResult('Not a Leap Year');
    }
  };

  return (
    <div>
      <h1>Leap Year Checker</h1>
      <div>
        <label>Year:</label>
        <input
          type="number"
          value={year}
          placeholder='Enter the Year'
          onChange={(e) => setYear(parseInt(e.target.value))}
        />
      </div>
      <button onClick={checkLeapYear}>Check</button>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default LeapYearChecker;